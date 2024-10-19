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
        const {description} = req.body
        const newTodo = await pool.query(
            "INSERT INTO to_do (description) VALUES($1)",
            [description]
        );

        res.json(newTodo);
    } catch (err) {
        console.log(err.message);
    }
});

//get all todo

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server started on port 5000")
})