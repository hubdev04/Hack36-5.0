const mongoose=require('mongoose');
const schem=new mongoose.Schema({
    
name:{
    type:String,
    required:true,
}
,
email:{
    type:String,
    required:true,
    unique:true,
}
,
username:{
    type:String,
    required:true,
    unique:true,
},

password:{
    type:String,
    required:true,
}
,

})
const Register=new mongoose.model("Register",schem);
module.exports=Register;