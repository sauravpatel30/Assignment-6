const mongoose=require("mongoose");

mongoose.pluralize(null);

const hospitalSchema=mongoose.Schema({
    hospid:String,
    hospname:String,
    hospaddress:String,
    hospbed:String
});

const hospitalModel=mongoose.model("hospital",hospitalSchema,"hospital");
module.exports=hospitalModel;