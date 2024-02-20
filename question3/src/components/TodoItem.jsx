import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div>
      <span
        onClick={() => {
          ontoggle(todo.id);
        }}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default TodoItem;
