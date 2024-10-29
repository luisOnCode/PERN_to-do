import React, { useEffect, useState } from 'react';
import EditButton from './buttons/EditButton';

import refreshingUpdatedTable from '../../util/refreshingUpdatedTable';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`, {
                method: "DELETE"
            });

            setTodos(refreshingUpdatedTable("DELETE", todos, id))
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
                            <td><EditButton item={todo}/></td>
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