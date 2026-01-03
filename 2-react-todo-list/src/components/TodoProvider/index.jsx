import TodoContext from "./TodoContext";

import { useEffect, useState } from "react";

export function TodoProvider({ children }) {
  const TODOS = "todos";

  const storedTodos = JSON.parse(localStorage.getItem(TODOS));

  const [todos, setTodos] = useState(storedTodos || []);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get("description");

    setTodos((prevState) => {
      const newTodo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, newTodo];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((t) => t.id != id));
  };

  const toggleTodoCompleted = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodoCompleted, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
