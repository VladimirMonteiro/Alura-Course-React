import TodoContext from "./TodoContext";

import { useState } from "react";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Props, state e hooks",
      completed: false,
      createdAt: "2022-10-31",
    },
  ]);

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
