/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */

import "./App.css";
import React, { useState } from "react";


const App = () =>{
  const enterKey = 13;
  const escKey = 27;

  const [value, setValue] = useState('');

  const erase = ()=>{
    setValue('');
  }

  const submit = ()=>{
    console.log(value);
    erase();
  }

  const onChange = (event)=>{
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
        onKeyDown={onKeyDown}/>
      </section>


    </section>
  )
}





export default App;
