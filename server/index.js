const cors = require("cors");
const express = require("express");
const pool = require("./db")
const app = express();


//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query(
            "INSERT INTO to_do (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todo

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM to_do");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err)
    }
})


//get a todo

app.get("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params
        const getTodo = await pool.query("SELECT * FROM to_do WHERE todo_id = $1", [id]);
        res.json(getTodo.rows)
    } catch (err) {
        console.error(err)
    }
})


//update a todo

app.put("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const putTodo = await pool.query(
            "UPDATE to_do SET description = $1 WHERE todo_id = $2",
            [description, id]
        )
        res.json("To-Do has been updated!!")
    } catch (err) {
        console.error(err)
    }
})


//delete a todo

app.delete("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM to_do WHERE todo_id = $1", [id]);
        res.json(`To-Do ${id} has been deleted`)
    } catch (err) {
        console.error(err)
    }
})

app.listen(5000, () => {
    console.log("server started on port 5000")
})