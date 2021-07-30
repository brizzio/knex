const express = require("express");

const db = require("./knex/db.js");

const app = express();

app.use(express.json());

/**
 * METHOD: GET
 * ROUTE: /todo
 * PURPOSE: Get all tasks
 */
app.get("/todo", async (req, res) => {
  const todos = await db("todo");
  res.json({ todos });
});

/**
 * METHOD: POST
 * ROUTE: /todo
 * PURPOSE: Create new task
 */
app.post("/todo", async (req, res) => {
  const { task } = req.body;
  const newTodo = await db("todo")
    .insert(task)
    .then(item => {
      return item.rowCount;
    });
    
  if (newTodo === 1) {
    return res.status(201).json({ message: "Todo created successfully" });
  }
});

app.put('/todo/:id', async (req, res) => {
    const {id} = req.params;
    const changes = req.body;
  
    try {
      const count = await db('todo').where({id}).update(changes);
      if (count) {
        res.status(200).json({updated: count})
      } else {
        res.status(404).json({message: "Record not found"})
      }
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
    }
  
  });

  app.delete('/todo/:id', async (req, res) => {
    const {id} = req.params;
  
    try {
      const count = await db('todo').where({id}).delete()
      if (count) {
        res.status(200).json({updated: count})
      } else {
        res.status(404).json({message: "Record not found"})
      }
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
    }
  
  });






const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));