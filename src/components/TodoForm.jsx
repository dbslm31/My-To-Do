import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    addTodo(value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Qu'est-ce qu'on fait de beau aujourd'hui ?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        <BiPlus className="plus-icon" />
      </button>
    </form>
  );
};

export default TodoForm;
