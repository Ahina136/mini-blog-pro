const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    tittle:{type:String,required:true},
    img:{type:Object,required:true},
    content:{type:String,required:true},
     date:{type:String,required:true}
});
module.exports=mongoose.model('post',postSchema);