import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/input/AddTodo'
import ListTodos from './components/input/ListTodos'

function App() {
  return (
    <main>
      <h1>PERN To-Do List</h1>
      <AddTodo />
      <ListTodos />
    </main>
  )
}

export default App