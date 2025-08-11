import { useState, useEffect } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Navbar } from "./Navbar";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
return (
<>
  <Navbar />

  {/* Center everything below the navbar */}
  <div className="flex flex-col items-center min-h-[calc(100vh-64px)] bg-gray-100 py-10">

    {/* Form container */}
    <div className="w-full max-w-md p-6 border rounded-xl shadow-lg bg-white mb-8">
      <Form onSubmit={addTodo} />
    </div>

    {/* Todo list container */}
    <div className="w-full max-w-2xl p-6 border rounded-xl shadow-lg bg-white flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Todo List
      </h1>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>

  </div>
</>

);

}
