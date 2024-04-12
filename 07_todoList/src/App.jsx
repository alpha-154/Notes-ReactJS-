// App.jsx

import { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  // State for storing todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    //to add a new to do at the top of other todos
   // setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

    //to add a new to do at the bottom of other todos
    setTodos((prev) => [ ...prev , {id : Date.now(), ...todo}]);
  };

  // Function to update a todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Function to toggle completion status of a todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  // Load todos from local storage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    //in the value of the provider we've used {} braces for deconstruct the object
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo input form */}
            <TodoInput />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Display todo items */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
