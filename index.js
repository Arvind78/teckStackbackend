const express =  require("express")
const mongoose = require("mongoose")
const gitAction = require("./gitActionSchema")
const app = express();
app.use(express.json());

const dataBaseUrl='mongodb+srv://Arvind:Arvind_varma@cluster0.yqwdumn.mongodb.net/?retryWrites=true&w=majority'

//  mongoose.connect(dataBaseUrl).then(()=>{
//     console.log("dataBase is conneted")
//  }).catch((err)=>{
//     console.log("error" +err)
//  })

app.listen(3000,()=>{
console.log("Server is started");

});

console.log("hrello")


app.get("/",(req,res)=>{
    res.send("home")
})

app.post("/",(req,res)=>{
    res.status(200).json({massages:"send"})
})