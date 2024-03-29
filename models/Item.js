const mongoose = require("mongoose")
const Schema  = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    shortlink:{
        type:String,
        require:true,
    },
    hostname:{
        type:String,
        require:true,
    },
    date:{
        type: Date,
        default:Date.now
    }
})


module.exports = Item = mongoose.model("item",ItemSchema);