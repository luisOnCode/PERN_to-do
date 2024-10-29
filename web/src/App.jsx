import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/input/AddTodo'
import ListTodos from './components/input/ListTodos'

function App() {
  return (
    <>
      <AddTodo />
      <ListTodos />
    </>
  )
}

export default App
