
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
