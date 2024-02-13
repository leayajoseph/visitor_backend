const express=require("express")

const router=express.Router()
const securityModel=require("../model/securityModel")

const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=req.body.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let security=new securityModel(data)
        let result=security.save()
        res.json(
            {status:"success"}
        )
        }
    )
})

module.exports=router