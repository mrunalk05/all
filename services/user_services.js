const userModel= require('../user_model');

class UserService{
    static async registerUser(name, email, password, gender, age){
        try{
            const createUser= new userModel({name, email, password, gender, age});
            
            return await createUser.save();
        }
        catch(err){
            throw err;
        }
    }
}

module.exports= UserService;