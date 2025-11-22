const express = require("express");
const router = express.Router();

//Routers
const posts=require('../userBackend/controls/postControl');
const user=require("../userBackend/controls/userControl");
// const login=require("../userBackend/controls/LoginControl")


router.post('/register',user.register);
router.get('/view',user.view);
router.post('/findone',user.findone);
router.post('/update/:id',user.update);
router.post('/delete/:id',user.userdelete)
router.post('/post',posts.upload,posts.field)
router.post('/postview',posts.postview)
router.post('/postfindone/:id',posts.postfindone)
router.post('/postupdate/:id',posts.upload,posts.postupdate)
router.post('/postuserdelete/:id',posts.postuserdelete)
router.post('/finduser',user.finduser)
module.exports=router;