const mongoose = require('mongoose');

//schema
const messageSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    text:{type:String, required:true},
   
});


const Message = mongoose.model("message", messageSchema);
module.exports = Message;