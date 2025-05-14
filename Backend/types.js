<<<<<<< HEAD
const zod = require("zod");

/*
   title: string
   description: string
*/
const createtodo = zod.object({
  title: zod.string(),
  description: zod.string()
});

const updatetodo = zod.object({
  id: zod.string()
});

module.exports = {
  createtodo,
  updatetodo
};
=======

const zod=require("zod");
  /*
     title:string
     description:string
  */
 const createtodo=zod.object({
  title:zod.string(),
  description: zod.string() 
 })
  const updatetodo=zod.object({
  id:zod.string()
 })
 module.exports={
    createtodo:createtodo,
    updatetodo:updatetodo
 }
>>>>>>> 62f18b7b027b39441cfe40a76d618f23538c0d15
