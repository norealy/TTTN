const models = require('../models/');
const user_profile = models.Categories;
module.exports = {
  async getAllUsers(req,res){
    try {
      // await userAccount.create('username2','password2',1);
      await user_profile.create(null,'Thiet bi thong minh');
        const users = await user_profile.findAll();
        if(users){
            res.status(201).send(users);
        }
        else{
            re.status(404).send("User Not Found")
        }
      }
      catch(e){
          res.status(500).send(e);
      }
  }
}