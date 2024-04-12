import { createContext, useContext } from "react";

// Context for managing todos
export const TodoContext = createContext({
    todos: [
        {
            //here, `id` property used for to identify which todo to modify
            id: 1,
            //`todo` property used for to work with the new todo list item
            todo: "Todo Msg",
            //`completed` property used for to toggle the todo list items
            completed: false,
        }   
    ],

    addTodo : (todo) => {} ,
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})

// Custom hook to consume TodoContext
export const useTodo = () => {
    return useContext(TodoContext)
}

// Provider component for TodoContext
export const TodoProvider = TodoContext.Provider