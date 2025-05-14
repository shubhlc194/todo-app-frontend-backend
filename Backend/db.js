
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://shubhamkc194:shubhamkc2005@cluster0.yrzhttm.mongodb.net/todoApp?retryWrites=true&w=majority")
// ✅ Correct
const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});


const todo=mongoose.model('todos',todoschema );

module.exports={
    todo
}