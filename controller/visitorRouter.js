const express=require("express")
const router=express.Router()
const visitorModel=require("../model/visitorModel")

router.post("/addvisitor",async(req,res)=>{
    let data=req.body
    let visitor=new visitorModel(data)
    let result=await visitor.save()
    res.json({
        status:"success"
    })

})

router.get("/viewvisitor",async(req,res)=>{
    let result=await visitorModel.find()
    .populate("securityId","name age mobile -_id")
    .exec()
    res.json(result)
})

module.exports=router