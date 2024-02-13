const mongoose=require("mongoose")

const visitorSchema=new mongoose.Schema(
    {
        name:String,
        mobile:String,
        address:String,
        purpose:String,
        securityId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"security"
        }
    }
)

module.exports=mongoose.model("visitor",visitorSchema)