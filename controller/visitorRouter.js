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

module.exports=router