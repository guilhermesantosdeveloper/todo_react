import React from 'react'
import { MdDelete } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'


function ListaTarefas({ todos, ontoggle, onRemove }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <ul className="todo-list">
    {
      todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span className={['todo', todo.checked ? 'checked' : ""].join(' ')}
            onClick={() => ontoggle && ontoggle(todo)}
            onKeyPress={() => ontoggle && ontoggle(todo)}
            role="button"
            tabIndex={0}>{todo.title}</span>
          <button type="button" className="remove" onClick={() =>onRemove && onRemove(todo)}>
            <MdDelete size={28} />
          </button>
        </li>
      ))
    }
  </ul>
};

ListaTarefas.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  ).isRequired,
  ontoggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default ListaTarefas
