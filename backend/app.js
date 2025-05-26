require("dotenv").config()
const express = require("express")
const bodyparser = require("body-parser")


// const path = require("path")
// const multer = require("multer")

const cors = require("cors")

const app = express()

app.use(bodyparser.json())

app.use(cors())

const userRoute = require("./Routes/userapi")

app.use("/api/user",userRoute)

const db = require("./db")

db()

const port = process.env.PORT

app.listen(port, () =>{
    console.log(`server runs now : http://localhost:${port}`)
})

app.get("/", (req,res) =>{
    res.send("Hi How are you today")
})





// const storage = multer.diskStorage({
//     destination:"./uploads/",
//     filename:function(req,file,cb){
//         cb(null,file.fieldname+Date.now()+".png");
//     }
// })


// const upload = multer({
//     storage:storage,
//     // limits:{
//     //     fileSize:100000
//     // }
// })
// router.post("/uploadimage",upload.single("profile_pic"),(req,res)=>{
//     res.json({"msg":"File Upload Successfully"})
// })
