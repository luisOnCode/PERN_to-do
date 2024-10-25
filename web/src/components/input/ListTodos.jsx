import React, { useEffect, useState } from 'react';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        console.log(`test on ${id} button`)
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`, {
                method: "DELETE"
            });

            console.log(deleteTodo);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json()
            
            setTodos(jsonData)
        } catch (err) {
            console.error(err)
        }
    } 

    useEffect(() => {
        getTodos(); 
    }, [])

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td><button onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr> 
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListTodos;