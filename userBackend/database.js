const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog");
const db=mongoose.connection;
db.on("error",console.error.bind(console,"mongo connection error"));
db.once("open",()=>{
    console.log("Mongo Connected")
});
module.exports=db;