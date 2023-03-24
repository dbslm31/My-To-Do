import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";

const Todo = ({ task, toggleComplete }) => {
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
        <BsFillPencilFill className="pencil-icon" />
        <BsFillTrash3Fill className="trash-icon" />
      </div>
    </div>
  );
};

export default Todo;
