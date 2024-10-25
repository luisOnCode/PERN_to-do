import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTodo from './components/input/InputTodo'
import ListTodos from './components/input/ListTodos'

function App() {
  return (
    <>
      <InputTodo />
      <ListTodos />
    </>
  )
}

export default App
