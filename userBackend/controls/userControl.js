

const { result } = require('lodash');
const User=require('../models/userSchema');
const register=(req,res)=>{
    let user=new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    confirmpassword:req.body.confirmpassword
    })
    user.save()
    .then((result)=>{
        res.json({data:result});
    })
    .catch((err)=>{
        console.log("err"+err);
    })
}


const finduser = (req, res) => {
    const { email, password } = req.body;

    // 1. Find the user by email
    User.findOne({ email:email })
        .then((user) => {
            // 2. If no user found with that email
            if (!user) {
                return res.json({ 
                    status: 404, 
                    message: "User not found" 
                });
            }

            // 3. Compare the password sent from frontend with the database password
            if (user.password === password) {
                res.json({
                    status: 200,
                    message: "Login Successful",
                    data: user
                });
            } else {
                res.json({ 
                    status: 401, 
                    message: "Incorrect Password" 
                });
            }
        })
        .catch((err) => {
            console.log("Error: " + err);
            res.json({ status: 500, error: err });
        });
};


const view=(req,res)=>{
    User.find()
    .then((result)=>{
        res.json({data:result});
    })
    .catch((err)=>{
        console.log("error"+err);
    })
}


const userdelete = (req, res) => {
  User
    .findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      res.json({ data: result });
    })
    .catch((err) => {
      res.json("err" + err);
    })}
const findone = (req, res) => {
  User
    .find({ email: req.body.email })
    .then((result) => {
      res.json({ data: result });
    })
    .catch((err) => {
      res.json("err" + err);
    });
};
const update=(req,res)=>{
    let data={
        username:req.body.username,
        
    }
    
    User.findByIdAndUpdate({_id:req.params.id}, data, {new:true})
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
module.exports={register,view,update,findone,userdelete,finduser}