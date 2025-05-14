<<<<<<< HEAD

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
=======

const mongoose=require("mongoose");
const { string } = require("zod");



mongoose.connect("mongodb+srv://shubhamkc194:shubhamkc2005@cluster0.yrzhttm.mongodb.net/")
const todoschema=mongoose.Schema({
    title:string,
    description:string,
    completed:Boolean
})

const todo=mongoose.model('todos',todoschema );

module.exports={
    todo
}
>>>>>>> 62f18b7b027b39441cfe40a76d618f23538c0d15
