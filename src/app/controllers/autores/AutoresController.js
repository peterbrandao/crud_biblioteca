// import * as Yup from 'yup';
import Autores from '../../models/Autores';

class AutoresController {
  async create(req, res){
      // res.json({
      //     mesage:'Deus é bom'
      // })
      try {
          const {...data} = req.body;
          const autores = await Autores.create({
              ...data
          });
          return res.json(autores);

      } catch (error) {
          console.log(error);
          return res.status(500);
          
      }
   };
   async list(req, res){
      const autores = await Autores.findAll();
      res.json(autores); 
   };
   async listIndex(req, res){
      const autores = await Autores.findOne({
          where: {
              id:req.params.id
          }
      });
      res.json(autores); 
   };

   async delete(req, res){
       try {
          const autores = await Autores.findOne({
              where: {
                  id:req.params.id
              }
          });
          autores.update({
              deleted_at:new Date()
          })
          res.json(autores); 
       } catch (error) {
           res.json({
               mesage:'Autores não encontrato'
           })

       }
   };

   async update(req, res){
      try {
          const {
              ...date
          }
          = req.body 
          const autores = await Autores.findOne({
              where: {
                  id:req.params.id
              }
          });
          autores.update({
              ...date
          })
          res.json(autores); 
       } catch (error) {
           res.json({
               mesage:'não foi possivel realizar a alteração dos autores'
           })

   };
  }
}

export default new AutoresController();