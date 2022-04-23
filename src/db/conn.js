const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Hack36",{
    
}).then(()=>{
    console.log("successful db connection");
}).catch((err)=>{
    console.log(err);
});
