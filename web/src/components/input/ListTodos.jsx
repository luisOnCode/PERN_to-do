import React, { useEffect, useState } from 'react';
import './ListTodos.css'

import EditButton from './buttons/EditButton';

import refreshingUpdatedTable from '../../util/refreshingUpdatedTable';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    const checkTodo = async (id) => {
        try {
            const checkTodo = await fetch(`http://localhost:5000/todo/${id}`, {
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
                        <th className='button-position'>Check</th>
                        <th className='description-position'>Description</th>
                        <th className='button-position'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id} className='todoContainer'>
                            <td className='button-position CheckButton'><button className='ContCheckButton buttonForm' onClick={() => checkTodo(todo.todo_id)}>✓</button></td>
                            <td className='description-position'><div>{todo.description}</div></td>
                            <td className='button-position'><div className='EditButton-container buttonForm '><EditButton item={todo}/></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListTodos;