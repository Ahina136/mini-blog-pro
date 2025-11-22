const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const PORT = 8000;
const cors=require("cors")
app.use(cors())
const db=require('./database');

const router=require('./router');
app.use('/',router);
app.use('/images',express.static(`${__dirname}/uploads`))
app.listen(PORT,(error)=>{
    console.log("server is online")
})