const { timeStamp } = require("console");
const mongoose=require("mongoose");

const NewsSchema= mongoose.Schema(
{
   headline:{
   type:String,
   required:[true, "please enter headlines"],
},
  description:{
    type:String,
     required:[true,"please enter description"],
   
},
   link:{
       type:String,
       required:false,
        default:0,

},
  img:{
     type:String,
     required:false,
     default:0,
}

},
{
   timeStamp:true,
})