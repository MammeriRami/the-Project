
var mongoose=require("mongoose");



const Schema = mongoose.Schema;


const enterpriseSchema = new Schema(  {
  
  NomE: String,
  } );



module.exports=mongoose.model("enterprise", enterpriseSchema);