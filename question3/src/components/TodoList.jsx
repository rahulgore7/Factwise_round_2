import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sortByCreatedAtDesc = (a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt);
  const sortByCompletedAtAsc = (a, b) =>
    new Date(a.completedAt) - new Date(b.completedAt);

  const sortedTodos = todos
    .sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;
    })
    .sort((a, b) => {
      if (!a.completed && !b.completed) {
        return sortByCreatedAtDesc(a, b);
      }
      if (a.completed && b.completed) {
        return sortByCompletedAtAsc(a, b);
      }
      return 0;
    });

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add Todo"
        onKeyDown={(e) => e.key === "Enter" && addTodo(e.target.value)}
      />
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
