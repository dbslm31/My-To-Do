import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Modifier la tâche"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        <BsCheckLg className="checked-icon" />
      </button>
    </form>
  );
};

export default EditTodoForm;
