import Clientes from '../../models/Clientes';

class ClientesController {
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const clientes = await Clientes.create({
                ...data
            });
            return res.json(clientes);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
     async list(req, res){
        const clientes = await Clientes.findAll();
        res.json(clientes); 
     };
     async listIndex(req, res){
        const clientes = await Clientes.findOne({
            where: {
                id:req.params.id
            }
        });
        res.json(clientes); 
     };

     async delete(req, res){
         try {
            const clientes = await Clientes.findOne({
                where: {
                    id:req.params.id
                }
            });
            clientes.update({
                deleted_at:new Date()
            })
            res.json(clientes); 
         } catch (error) {
             res.json({
                 mesage:'Clientes não encontrato'
             })

         }
     };

     async update(req, res){
        try {
            const {
                ...date
            }
            = req.body 
            const clientes = await Clientes.findOne({
                where: {
                    id:req.params.id
                }
            });
            clientes.update({
                ...date
            })
            res.json(clientes); 
         } catch (error) {
             res.json({
                 mesage:'não foi possivel realizar a alteração do cliente'
             })

     };
    }
}

export default new ClientesController();