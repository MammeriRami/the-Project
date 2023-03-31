
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const departmentSchema = new Schema(  {
 
  NomD: String,
  EmailF: String,
  NomF: String,

  } );



module.exports=mongoose.model("department", departmentSchema);