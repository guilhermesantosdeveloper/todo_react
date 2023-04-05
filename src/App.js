/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */


// manipulaçao de dados acontece no app
import "./App.css";
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdDelete } from 'react-icons/md';
import NovaTarefa from "./components/NovaTarefa";


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

        <ul className="todo-list">

          {
            todos.map((todo) => (
              // precisa do key para diferenciar de outros elementos dentro do react
              <li key={todo.id.toString()}>
                <span className={['todo', todo.checked ? 'checked' : ""].join(' ')} // deve forca o join separar por espaco e nao por ,
                  onClick={() => ontoggle(todo)}
                  onKeyPress={() => ontoggle(todo)}
                  role="button"
                  tabIndex={0}>{todo.title}</span>
                <button type="button" className="remove" onClick={()=> onRemove(todo)}>
                  <MdDelete size={28} />
                </button>
              </li>
            ))
          }
        </ul>
      </section>


    </section>
  )
}





export default App;
