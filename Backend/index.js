const express = require("express");
const { createtodo }    = require("./types")
const app = express();
const port = 3000;
app.use(express.json());
// //body:
// title:string
// description:string
app.post("/todo",function(req,res){
    const createpayload=req.body;
    const parsepayload=createtodo.safeParse(createpayload)
    if(!parsepayload.success){
       return res.status(411).json({
        msg:"you send a wrong input "
       }) 
       return; 
    }
    
})
app.get("/todos",(req,res)=>{

})
app.put("/completed",(req,res)=>{

})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

  