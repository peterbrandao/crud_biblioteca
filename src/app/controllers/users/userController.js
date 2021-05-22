// import * as Yup from 'yup';
import User from '../../models/User';

class UserController {
  async create(req, res) {
    try {
      const { ...data } = req.body;

    //   await Yup.object()
    //     .shape({
    //       name: Yup.string().required(),
    //       password: Yup.string().required(),
    //       email: Yup.string().email().required(),
    //     })
    //     .validate(data, { abortEarly: false });

      const user = await User.create({ ...data });

      return res.status(201).json({ user, token: user.tokenGenerate() });
    } catch (err) {console.log(err)
      return res
        .status(500)
        .json({ err:'erro'});
    }
  }
}

export default new UserController();