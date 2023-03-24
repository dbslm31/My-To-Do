import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

// Import Component
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    setValue("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>Maintenant, à toi de jouer!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoWrapper;
