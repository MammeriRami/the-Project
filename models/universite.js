
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const unversiteSchema = new Schema(  {
 
  
  
  
  NomU: String,
  EmailU: String,
  Localisation : String,
  
  } );



module.exports=mongoose.model("unversite", unversiteSchema);