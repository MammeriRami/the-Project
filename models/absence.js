
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const absenceSchema = new Schema(  {
 
  
  
  Nom: String,
  DateA: Date,
  
  
  } );



module.exports=mongoose.model("absence", absenceSchema);