import React from "react";
import "./todo.css";

const Todo = () => {
  return (
    <div className="todo-container">
      <header>
        <h4>Todo Component</h4>
      </header>
      <div className="todo-items">
        <p>Pen</p>
        <p>Pencil</p>
        <p>Pencil</p>
        <p>Pencil</p>
        <p>Pencil</p>
        <p>Pencil</p>
      </div>
    </div>
  );
};

export default Todo;
