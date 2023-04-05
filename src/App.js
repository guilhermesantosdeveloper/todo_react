/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */

import "./App.css";
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdDelete } from 'react-icons/md';


const App = () => {
  const enterKey = 13;
  const escKey = 27;

  const initialTodos = [
    { id: 1, title: 'Estudar React', checked: false },
    { id: 2, title: 'Estudar Boostrap', checked: true },
    { id: 3, title: 'Ir na academia', checked: false },
  ];

  const [todos, ] = useState(initialTodos);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    console.log(value);
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
                <span className="todo">{todo.title}</span>
                <button type="button" className="remove">
                  <MdDelete size={28}/>
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
