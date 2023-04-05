/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */


// manipulaçao de dados acontece no app
import "./App.css";
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies

import NovaTarefa from "./components/NovaTarefa";
import ListaTarefas from "./components/ListaTarefas";


const App = () => {


  const [todos, setTodos] = useState([]);


  const onNewTodo = (value) => {
    setTodos([...todos, { id: new Date().getTime(), title: value, checked: false }])
  }

  const ontoggle = (todo) => {
    setTodos(todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)))

  }
  const onRemove = (todo) => {
    setTodos(todos.filter((obj)=> obj.id !== todo.id))
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title d">Todo</h1>
      </header>
      <section className="main">
        <NovaTarefa onNewTodo={onNewTodo}/>
        <ListaTarefas todos={todos} ontoggle={ontoggle} onRemove={onRemove}/>
      </section>
    </section>
  )
}





export default App;
