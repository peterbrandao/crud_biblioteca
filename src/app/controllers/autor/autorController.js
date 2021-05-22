import Autor from '../../models/Autor';

class autorController{
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const autor = await Autor.create({
                ...data
            });
            return res.json(autor);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const autor = await Autor.findAll();
        res.json(autor); 
     };
     async listIndex(req, res){
        const autor = await Autor.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(autor); 
     };

     async delete(req, res){
         try {
            const autor = await Autor.findOne({
                where: {
                    id:req.params.id
                }
            });
            autor.update({
                deleted_at:new Date()
            })
            res.json(autor); 
         } catch (error) {
             res.json({
                 mesage:'Autor não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const autor = await Autor.findOne({
                where: {
                    id:req.params.id
                }
            });
            Autor.update({
                ...date
            })
            res.json(autor); 
         } catch (error) {
             res.json({
                 mesage:'Não foi possivel realizar a alteração do autor, verifique!'
             })

     };
    }
}

export default new autorController();