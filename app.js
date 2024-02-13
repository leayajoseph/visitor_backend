const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const securityRoute=require("./controller/securityRouter")
const visitorRoute=require("./controller/visitorRouter")

const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://leaya:Leaya231@cluster0.sxtvlhw.mongodb.net/visitorDb?retryWrites=true&w=majority",{
useNewUrlParser: true
})

app.use("/api/security",securityRoute)
app.use("/api/visitor",visitorRoute)

app.listen(3001,()=>{
    console.log("server running")
})