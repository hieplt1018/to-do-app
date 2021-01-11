import React from 'react';
import Task from '../Task/Task.js'
import './TodoList.css';

const TodoList = ({ todos, setTodos, filterText, setShowBulkAction }) => {
  return (
    <ul className="todo-list">
      {todos.filter((todo) => todo.title.includes(filterText)).map((todo) => (
        <Task
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          key={todo.id}
          setShowBulkAction={setShowBulkAction}
         />
      ))}
    </ul>
  );
}

export default TodoList
