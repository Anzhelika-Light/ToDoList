import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="todoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('todoList__item', {
          'todoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="todoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="todoList__text">{text}</p>
        <button
          type="button"
          className="todoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
