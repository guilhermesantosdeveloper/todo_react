import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import './styles.css'

// eslint-disable-next-line react/function-component-definition, react/jsx-filename-extension
const NovaTarefa = ({ onNewTodo }) => {
  // passanod parametro por propriedades
  const enterKey = 13;
  const escKey = 27;


  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    if( onNewTodo ) {
      onNewTodo(value);
      erase();
    }

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
    // eslint-disable-next-line react/jsx-filename-extension
    <input
      className="new-todo"
      placeholder="Insira sua tarefa aqui"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown} />
  );
};

// https://www.npmjs.com/package/prop-types
NovaTarefa.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};





export default NovaTarefa
