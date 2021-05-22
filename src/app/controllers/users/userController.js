import User from '../../models/User';

class userController{
    async create(req, res){
        // res.json({
        //     mesage:'Deus é bom'
        // })
        try {
            const {...data} = req.body;
            const user = await User.create({
                ...data
            });
            return res.json(user);

        } catch (error) {
            console.log(error);
            return res.status(500);
            
        }
     };
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
                 mesage:'usuário não encontrato'
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
                 mesage:'usuário não encontrato'
             })

     };
    }
}

export default new userController();