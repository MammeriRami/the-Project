
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const chefSchema = new Schema(  {
 
  
  
  NomC: String,
  EmailC: String,
  PasswordC: String,
  NomD : String,
  
  } );



module.exports=mongoose.model("chef", chefSchema);