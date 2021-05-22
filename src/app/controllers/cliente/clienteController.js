import Cliente from '../../models/Cliente';

class clienteController{
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const cliente = await Cliente.create({
                ...data
            });
            return res.json(cliente);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const cliente = await Cliente.findAll();
        res.json(cliente); 
     };
     async listIndex(req, res){
        const cliente = await Cliente.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(cliente); 
     };

     async delete(req, res){
         try {
            const cliente = await Cliente.findOne({
                where: {
                    id:req.params.id
                }
            });
            livro.update({
                deleted_at:new Date()
            })
            res.json(cliente); 
         } catch (error) {
             res.json({
                 mesage:'Cliente não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const cliente = await Cliente.findOne({
                where: {
                    id:req.params.id
                }
            });
            cliente.update({
                ...date
            })
            res.json(cliente); 
         } catch (error) {
             res.json({
                 mesage:'Não foi possivel realizar a alteração do cliente, verifique!'
             })

     };
    }
}

export default new clienteController();