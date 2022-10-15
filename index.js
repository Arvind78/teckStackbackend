const express =  require("express")
const cor = require("cors")
const mongoose = require("mongoose")
const gitAction = require("./gitActionSchema")
const app = express();
app.use(express.json());

 
const dataBaseUrl='mongodb+srv://789789789@cluster0.7cu4fig.mongodb.net/?retryWrites=true&w=majority'

 

app.listen(3000,()=>{
console.log("Server is started");

});

console.log("hrello")


app.get("/",(req,res)=>{
    res.send("home")
})

app.post("/push",(req,res)=>{
    res.status(200).json({massages:"send"})
})
 