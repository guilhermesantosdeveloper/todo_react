/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */

import "./App.css";
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdDelete } from 'react-icons/md';


const App = () => {
  const enterKey = 13;
  const escKey = 27;


  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    // biblioteca uuid ou utilizar numeros ramdomicos para gerar id
    setTodos([...todos, { id: new Date().getTime(), title: value, checked: false }])

    erase();
  }

  const onChange = (event) => {
    // event e a forma para receber parametros de um input
    setValue(event.target.value)
  }
  const onKeyDown = (event) => {
    // codigos teclas : https://www.asciitable.com/
    if (event.which === enterKey) {
      submit();
    } else if (event.which === escKey) {
      erase();
    }
  }

  const ontoggle = (todo) => {
    setTodos(todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)))

  }


  return (
    <section id="app" className="container">
      <header>
        <h1 className="title d">Todo</h1>
      </header>
      <section className="main">
        <input className="new-todo"
          placeholder="Insira sua tarefa aqui"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown} />
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
                <button type="button" className="remove">
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
