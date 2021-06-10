import Retiradas from '../../models/Retiradas';

class RetiradasController {
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
    let numero_livros = []

        const quantidade_livro_cliente = await Retiradas.findAll({
            where:{
                id_cliente: req.body.id_cliente
            }
          
        }) 




        numero_livros.Retiradas.map((clientes, contador)=>{
            
            console.log(contador)
            contador =+1 
        })

     
        if(numero_livros > 3){
            return res.status(404).json({message: 'numero de livros mais que permitido'})
        }
        try {
            const {...data} = req.body;
            const retiradas = await Retiradas.create({
                ...data
            });
            return res.json(retiradas); 

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const retiradas = await Retiradas.findAll();
        res.json(retiradas); 
     };
     async listIndex(req, res){
        const retiradas = await Retiradas.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(retiradas); 
     };

     async delete(req, res){
         try {
            const retiradas = await Retiradas.findOne({
                where: {
                    id:req.params.id
                }
            });
            retiradas.update({
                deleted_at:new Date()
            })
            res.json(retiradas); 
         } catch (error) {
             res.json({
                 mesage:'Retiradas não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const retiradas = await Retiradas.findOne({
                where: {
                    id:req.params.id
                }
            });
            retiradas.update({
                ...date
            })
            res.json(retiradas); 
         } catch (error) {
             res.json({
                 mesage:'não foi possivel realizar a a retirada dos livros'
             })

     };
    }
}

export default new RetiradasController();