import Livros from '../../models/Livros';

class LivrosController {
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const livros = await Livros.create({
                ...data
            });
            return res.json(livros);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const livros = await Livros.findAll();
        res.json(livros); 
     };
     async listIndex(req, res){
        const livros = await Livros.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(livros); 
     };

     async delete(req, res){
         try {
            const livros = await Livros.findOne({
                where: {
                    id:req.params.id
                }
            });
            livros.update({
                deleted_at:new Date()
            })
            res.json(livros); 
         } catch (error) {
             res.json({
                 mesage:'Livros não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const livros = await Livros.findOne({
                where: {
                    id:req.params.id
                }
            });
            livros.update({
                ...date
            })
            res.json(livros); 
         } catch (error) {
             res.json({
                 mesage:'não foi possivel realizar a alteração dos livros'
             })

     };
    }
}

export default new LivrosController();