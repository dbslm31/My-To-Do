import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {" "}
        {task.task}
      </p>
      <div>
        <BsFillPencilFill
          className="pencil-icon"
          onClick={() => editTodo(task.id)}
        />
        <BsFillTrash3Fill
          className="trash-icon"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
