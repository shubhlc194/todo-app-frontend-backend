const express = require("express");
<<<<<<< HEAD
const { createtodo, updatetodo } = require("./types");
const { todo } = require("./db");

=======
const { createtodo, updatetodo }    = require("./types")
const {todo}=require("./db");
const { title } = require("process");
>>>>>>> 62f18b7b027b39441cfe40a76d618f23538c0d15
const app = express();
const port = 3000;

app.use(express.json());
<<<<<<< HEAD

// POST /todo - create a new todo
app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsepayload = createtodo.safeParse(createpayload);
=======
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
>>>>>>> 62f18b7b027b39441cfe40a76d618f23538c0d15

  if (!parsepayload.success) {
    return res.status(411).json({
      msg: "You sent a wrong input"
    });
  }

  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false
  });

  res.json({
    msg: "Todo created"
  });
});

// GET /todos - get all todos
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos
  });
});

// PUT /completed - mark todo as completed
app.put("/completed", async (req, res) => {
  const updatepayload = req.body;
  const parsepayload = updatetodo.safeParse(updatepayload);

  if (!parsepayload.success) {
    return res.status(411).json({
      msg: "You sent a wrong input"
    });
  }

  const updated = await todo.findByIdAndUpdate(req.body.id, {
    completed: true
  });

  if (!updated) {
    return res.status(404).json({ msg: "Todo not found" });
  }

  res.json({
    msg: "Todo marked as completed"
  });
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

<<<<<<< HEAD

  
=======
  
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
app.get("",(req,res)=>{ 
   res.send("hello to home page");
})
  app.get("/shubham" (req,res)=>{
    console.log("shubham server is running");
    
  })
  
>>>>>>> 62f18b7b027b39441cfe40a76d618f23538c0d15
