import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Page from './page';

export default function App() {
  const [todo, setTodo] = useState({ text: '' });
  const [todos, setTodos] = useState([]);

  function handleCreateClick() {
    const newTodos = (todos === []) ? [todo] : [...todos.flat(), todo];
    setTodos(newTodos);
    setTodo({ text: '' });
  }

  function handleCompleteClick(index) {
    const { length } = todos;
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1, length)];
    setTodos(newTodos);
  }

  function handleTodoChange(e) {
    setTodo({ id: uuidv4(), text: e.target.value });
  }

  return (
    <Page
      todo={todo}
      todos={todos}
      handleTodoChange={handleTodoChange}
      handleCreateClick={handleCreateClick}
      handleCompleteClick={handleCompleteClick}
    />
  );
}
