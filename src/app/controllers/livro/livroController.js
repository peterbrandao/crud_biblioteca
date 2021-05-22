import Livro from '../../models/Livro';
import Produto from '../../models/Livro';

class livroController{
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const livro = await Livro.create({
                ...data
            });
            return res.json(livro);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const livro = await Livro.findAll();
        res.json(livro); 
     };
     async listIndex(req, res){
        const livro = await Livro.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(livro); 
     };

     async delete(req, res){
         try {
            const livro = await Livro.findOne({
                where: {
                    id:req.params.id
                }
            });
            livro.update({
                deleted_at:new Date()
            })
            res.json(livro); 
         } catch (error) {
             res.json({
                 mesage:'Livro não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const livro = await Livro.findOne({
                where: {
                    id:req.params.id
                }
            });
            livro.update({
                ...date
            })
            res.json(livro); 
         } catch (error) {
             res.json({
                 mesage:'Não foi possivel realizar a alteração do livro, verifique!'
             })

     };
    }
}

export default new livroController();