import { useState } from "react";


import './AddTodo.css'
import SvgAddButton from "./buttons/svg/SvgAddButton";

function AddTodo() {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        
        try {
            if (description) {
                const body = { description }

                const response = await fetch('http://localhost:5000/todos', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
    
                window.location = "/";
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input placeholder="add a new To-Do..." type="text" value={description} onChange={e => {setDescription(e.target.value)}}/>
                <button className="ContAddButton"><SvgAddButton className="CompAddButton" /></button>
            </form>
        </>
    )
}



export default AddTodo;