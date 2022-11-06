import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { TodoContextType } from "./TodoContextType";
import { Todo } from "../models/Todo";
import { getData, saveData } from '../services/TodoService';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>(getData);

    useEffect(() => {
        saveData(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        const todo: Todo = {id: uuid(), task: title, done: false};
        setTodos([...todos, todo]);
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index));
    }

    const toggleTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
    }

    return(
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
            {props.children}
        </TodoContext.Provider>        
    )
}

export default TodoProvider;