
const Post=require('../models/postSchema')
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
// single inside give the postSchema field name eg:img
const upload=multer({storage:storage}).single("img")
const field=(req,res)=>{
    let postdata=new Post({
        tittle:req.body.tittle,
         img:req.file,
         content:req.body.content,
        date:req.body.date
        

    })
    postdata.save()
    .then((result)=>{
     res.json(result)
    })
    .catch((err)=>{
res.json("err"+err)
    })
}
const postview=(req,res)=>{
    Post.find()
    .then((result)=>{
        res.json({data:result});
    })
    .catch((err)=>{
        console.log("error"+err);
    })
}
const postuserdelete = (req, res) => {
  Post
    .findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      res.json({ data: result });
    })
    .catch((err) => {
      res.json("err" + err);
    })}
const postfindone = (req, res) => {
  Post
    .find({ _id: req.params.id})
    .then((result) => {
      res.json({ data: result });
    })
    .catch((err) => {
      res.json("err" + err);
    });
};
const postupdate=(req,res)=>{
   
    
    Post.findByIdAndUpdate({_id:req.params.id},
        {tittle:req.body.tittle,
         img:req.file,
         content:req.body.content,
        date:req.body.date},{new:true})
    .then((result)=>{
        res.json({
            message:"User data changed",
            data:result
        })
    })
    .catch((err)=>{
        console.log("Error"+err);
    })
    

}
module.exports={field,upload,postfindone,postupdate,postuserdelete,postview}