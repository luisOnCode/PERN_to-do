import { useState } from "react";

function AddTodo() {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1>PERN To-Do List</h1>
            <form onSubmit={onSubmitForm}>
                <input type="text" value={description} onChange={e => {setDescription(e.target.value)}}/>
                <button>Add</button>
            </form>
        </>
    )
}



export default AddTodo;