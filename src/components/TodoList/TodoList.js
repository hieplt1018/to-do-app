import React from 'react';
import Task from '../Task/Task.js'
import './TodoList.css';

const TodoList = ({todos, setTodos}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          key={todo.id}
         />
      ))}
    </ul>
  );
}

export default TodoList
