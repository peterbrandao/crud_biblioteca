// import * as Yup from 'yup';
import Autores from '../../models/Autores';

class AutoresController {
  async create(req, res) {
    try {
      const { ...data } = req.body;

      const autores = await Autores.create({ ...data });

      return res.status(201).json({autores });
    } catch (err) {console.log(err)
      return res
        .status(500)
        .json({ err:'erro'});
    }
  }
}

export default new AutoresController();