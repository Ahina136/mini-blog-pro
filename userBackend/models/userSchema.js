const mongoose=require("mongoose");
const regSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    confirmpassword:{type:String}
});
module.exports=mongoose.model('user',regSchema);