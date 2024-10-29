import React from "react";
import refreshingUpdatedTable from "../../../util/refreshingUpdatedTable";

const todoUpdatingOnDataBase = async (inputTextResponse, urlID) => {
    try {
        const test = JSON.stringify({description: inputTextResponse})

        const response = await fetch(`http://localhost:5000/todo/${urlID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: test
        })

        console.log(response)
    } catch (err) {
        console.error(err)
    }
}

const userWantToUpdateToThis = (preFilled) => {
    return window.prompt("Edit:", preFilled)
}


function EditButton({ item, list, setList}) { 
    const editDescription = async e => {
        e.preventDefault();
        const gettingUpdatedString = userWantToUpdateToThis(item.description);
        try {
            const test = JSON.stringify({description: gettingUpdatedString})
            const response = await fetch(`http://localhost:5000/todo/${item}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: test
            })
    
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
        // refreshingUpdatedTable("UPDATE", list, item.id);
    }

    return (
        <>
           <button onClick={e => editDescription(e)}>Edit</button>
        </>
    )
}

export default EditButton;