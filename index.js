const express =  require("express")
const mongoose = require("mongoose")
const gitAction = require("./gitActionSchema")
const app = express();
app.use(express.json());

const dataBaseUrl='mongodb+srv://Arvind:Arvind_varma@cluster0.yqwdumn.mongodb.net/?retryWrites=true&w=majority'

 mongoose.connect(dataBaseUrl).then(()=>{
    console.log("dataBase is conneted")
 }).catch((err)=>{
    console.log("error" +err)
 })

app.listen(2300,()=>{
console.log("Server is started");
})

app.post("/push",async(req,res)=>{
    try{
        const {request_id, author, branch, createdAt} = req.body;
        console.log(req.body);
        await gitAction.create({
            request_id,
            author,
            action: "push",
            to_branch: branch,
            timestamp: createdAt
        })
        res.json({message: "success"})
    }catch(err){
        throw new Error(err)
    }
})

app.post("/pull",async(req,res)=>{
    try{
        const {request_id, author, from_branch, to_branch, createdAt} = req.body;
        console.log(req.body);
        await gitAction.create({
            request_id,
            author,
            action: "pull_request",
            from_branch,
            to_branch,
            timestamp: createdAt
        })
        res.json({message: "success"})
    }catch(err){
        throw new Error(err)
    }
 })

 app.post("/marge",async(req,res)=>{
    try{
        const {request_id, author, from_branch, to_branch, createdAt} = req.body;
        console.log(req.body);
        await gitAction.create({
            request_id,
            author,
            action: "merge_pr",
            from_branch,
            to_branch,
            timestamp: createdAt
        })
        res.json({message: "success"})

    }catch(err){
        throw new Error(err)
    }
 })
