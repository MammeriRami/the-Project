
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const faculterSchema = new Schema(  {
 
  NomF: String,
  EmailF: String,
  NomU : String,
  } );



module.exports=mongoose.model("faculter", faculterSchema);