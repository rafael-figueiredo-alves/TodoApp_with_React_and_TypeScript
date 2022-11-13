import React,{ useContext }  from "react";
import TodoListItem from "./TodoListItem";
import { TodoContextType } from "../../contexts/TodoContextType";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoList(){
    const {todos} = useContext<TodoContextType>(TodoContext);

    return(
        <table className="uk-table">
            <caption>Minha Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo} />)
                    )
                }
            </tbody>
        </table>
    );
}