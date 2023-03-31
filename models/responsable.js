
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const responsableSchema = new Schema(  {
 
  
  NomR: String,
  EmailR: String,
  PasswordR: String,
  NomE : String,

  
  
  } );



module.exports=mongoose.model("responsable", responsableSchema);