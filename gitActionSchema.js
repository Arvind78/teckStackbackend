const mongoose = require("mongoose")

const gitAction = new mongoose.Schema({
    request_id:  {type: String},
    author: {type: String},
    action: {type: String},
    from_branch: {type: String},
    to_branch: {type: String},
    timestamp: {type: Date}
    
},{
    timestamps: true,
    })

module.exports= mongoose.model("actionRecord",gitAction)