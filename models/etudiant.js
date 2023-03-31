
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const etudiantSchema = new Schema(  {
 
  
  
  Nom: String,
  EmailE: String,
  PasswordE : String,
  Stagiare: Boolean,
  Specialite: String,
  
  } );



module.exports=mongoose.model("etudiant", etudiantSchema);