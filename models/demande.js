
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const demandeSchema = new Schema(  {
 
  
  
  Nom: String,
  EmailE: String,
  EmailR: String,
  NomE: String,
  Duree: Number,
  DateD: Date,
  DateF: Date,
  validC: Boolean,
  validR: Boolean, 
  
  } );



module.exports=mongoose.model("demande", demandeSchema);