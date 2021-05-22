import Appointment from "../models/Appointment";
import { startOfHour, parseISO, isBefore, format, subHours } from "date-fns";
import pt from "date-fns/locale/pt";
import * as Yup from "yup";
import User from "../models/User";
import File from "../models/File";
import Notification from "../schemas/notification";
import Mail from "../../lib/Mail";

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointment = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ["date"],
      attributes: ["id", "date"],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: "provider",
          attributes: ["id", "name"],
          include: [
            {
              model: File,
              as: "avatar",
              attributes: ["id", "path", "url"],
            },
          ],
        },
      ],
    });

    return res.json(appointment);
    // return res.json({ message: "Deus é bom" });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json(400).json({ error: "Validation fails" });
    }

    const { provider_id, date } = req.body;

    //
    // Check if provider_id is a provider
    //

    // console.log(provider_id);

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: "you can created appoitments only with providers" });
    }

    const hourStart = startOfHour(parseISO(date));

    // check for past Dates
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: "Past Date are not permited" });
    }

    //Check date availability

    const checkAvailability = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: "appointment date is not available" });
    }

    const checkUser = await User.findOne({
      where: { id: req.userId },
    });

    if (checkUser.id == provider_id) {
      return res.status(400).json({ error: "provider cannot be use" });
    }

    const appoitment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });

    const user = await User.findByPk(req.userId);
    const formattedDate = format(hourStart, "'dia' dd 'de' MMM', as' H:mm'h'", {
      locale: pt,
    });

    //notify provider

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appoitment);
    // return res.json({ message: "Deus é bom" });
  }

  async delete(req, res) {
    const appoitment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "provider",
          attributes: ["name", "email"],
        },
      ],
    });

    if (appoitment.user_id != req.userId) {
      return res.status(401).json({
        error: "you don't have permission to cancel this appointments",
      });
    }

    const dateWithSub = subHours(appoitment.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      return res.status(401).json({
        error: "you can only cancel appointements 2 hours in advance",
      });
    }

    appoitment.canceled_at = new Date();

    await appoitment.save();

    await Mail.sendMail({
      to: `${appoitment.provider.name} <${appoitment.provider.email}>`,
      subject: "Agendamento cancelado",
      text: "você tem um novo cancelamento",
    });

    return res.json(appoitment);
  }
}

export default new AppointmentController();