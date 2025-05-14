const express = require("express");
const { createtodo, updatetodo } = require("./types");
const { todo } = require("./db");

const app = express();
const port = 3000;

app.use(express.json());

// POST /todo - create a new todo
app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsepayload = createtodo.safeParse(createpayload);

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


  