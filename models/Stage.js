
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const stageSchema = new Schema(  {
 
  
  
  Nom: String,
  EmailE: String,
  EmailR: String,
  NomE: String,
  Duree: Number,
  DateD: Date,
  DateF: Date,
  Etat: Boolean,
  
  } );



module.exports=mongoose.model("stage", stageSchema);