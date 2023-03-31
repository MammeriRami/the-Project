
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const noteSchema = new Schema(  {
 
  
  
  Nom: String,
  Note: Number,
  
  
  } );



module.exports=mongoose.model("note", noteSchema);