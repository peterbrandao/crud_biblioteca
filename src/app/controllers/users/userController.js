// import * as Yup from 'yup';
import User from '../../models/User';

class UserController {
  async create(req, res) {
    try {
      const { ...data } = req.body;

      const user = await User.create({ ...data });

      return res.status(201).json({ user, token: user.tokenGenerate() });
    } catch (err) {console.log(err)
      return res
        .status(500)
        .json({ err:'erro'});
    }
  }
  async list(req, res){
    const user = await User.findAll();
    res.json(user); 
 };
 async listIndex(req, res){
  const user = await User.findOne({
      where: {
          id:req.params.id
      }
  });
  res.json(user); 
};
async delete(req, res){
  try {
     const user = await User.findOne({
         where: {
             id:req.params.id
         }
     });
     user.update({
         deleted_at:new Date()
     })
     res.json(user); 
  } catch (error) {
      res.json({
          mesage:'Usuário não encontrato'
      })

  }
};
async update(req, res){
  try {
      const {
          ...date
      }
      = req.body 
      const user = await User.findOne({
          where: {
              id:req.params.id
          }
      });
      user.update({
          ...date
      })
      res.json(user); 
   } catch (error) {
       res.json({
           mesage:'não foi possivel realizar a alteração dos usuários'
       })
      };
    }
  }

export default new UserController();