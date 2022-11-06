import { Todo } from "../models/Todo";

export interface TodoContextType {
    todos: Todo[];
    addTodo(task: string): void;
    removeTodo(todo: Todo): void;
    toggleTodo(todo: Todo): void;
}