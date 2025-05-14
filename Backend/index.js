const express = require("express");
const { createtodo, updatetodo }    = require("./types")
const {todo}=require("./db");
const { title } = require("process");
const app = express();
const port = 3000;
app.use(express.json());
// //body:
// title:string
// description:string
app.post("/todo", async function(req,res){
    const createpayload=req.body;
    const parsepayload=createtodo.safeParse(createpayload)
    if(!parsepayload.success){
       return res.status(411).json({
        msg:"you send a wrong input " 
       }) 
       return; 
    }
   await todo.create({
      title:createpayload.title,
      description:createpayload.description,
      completed:false
    })
    res.json({
      msg:"todo craeted"
    })
    
})
app.get("/todos", async(req,res)=>{
   const todos= await todo.find({});
   res.json({
    todos
   })

})
app.put("/completed",async(req,res)=>{
  const updatepayload=req.body;
  const parsepayload=updatetodo.safeParse(updatepayload);
   if(!parsepayload.success){
       return res.status(411).json({
        msg:"you send a wrong input " 
       }) 
       return; 
    }
    await todo.update({
      _id:req.body.id,
    },{
      completed:true
    })
res.json({
  msg:"todo marked as complited"
})

})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

  