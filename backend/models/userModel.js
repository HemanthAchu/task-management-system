
const mongoose =require('mongoose')
 const userschema =new mongoose.Schema({
  
  
     username:{
        type:String,
     },
     email:{
         type:String,
         required:true,
        
     },
     password:{
         type:String,
        
     }
 })
 const users =mongoose.model('users',userschema)
module.exports=users