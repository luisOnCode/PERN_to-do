import React from "react";
import SvgEditButton from "./svg/SvgEditButton";

import './EditButton.css'


function giveMeThePrompt(changeThis) {
    return window.prompt("Edit:", changeThis)
}

async function updateTheTodo(id, description) {
    const jsonDescriptionUpdate = JSON.stringify({description: description})
    try {
        const response = await fetch(`http://localhost:5000/todo/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: jsonDescriptionUpdate
        })

        window.location = "/";
    } catch (err) {
        console.error(err.message);
    }
}

function EditButton({item}) {
    const editTheTodo = async e => {
        e.preventDefault();
        const promptStringResponse = giveMeThePrompt(item.description);
        !(promptStringResponse && promptStringResponse !== item.description) ? promptStringResponse : updateTheTodo(item.todo_id, promptStringResponse)
    }

    return (
        <>
           <button onClick={e => editTheTodo(e)}><SvgEditButton /></button>
        </>
    )
}

export default EditButton;