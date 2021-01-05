import React from 'react';
import Task from '../components/Task'

const TodoList = ({todos, setTodos}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          key={todo.id}
          title={todo.title}/>
      ))}
    </ul>
  );
}

export default TodoList
