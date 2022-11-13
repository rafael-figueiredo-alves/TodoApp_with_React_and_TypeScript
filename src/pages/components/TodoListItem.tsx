import React, { useContext } from "react";
import { Todo } from "../../models/Todo";
import { TodoContextType } from "../../contexts/TodoContextType";
import { TodoContext } from "../../contexts/TodoContext";

interface TodoListItemProp{
    todo: Todo
}

export default function TodoListItem (props: TodoListItemProp){
    const { removeTodo, toggleTodo } = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    const handleChange = (event: any) =>{
        toggleTodo(props.todo)
    }

    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"
                           type="checkbox"
                           checked={props.todo.done}
                           onChange={handleChange} />       
                </label>
            </td>
            <td className="uk-width-expand">
                {props.todo.task}
            </td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger"
                        uk-icon="trash"
                        onClick={() => onRemove(props.todo)} />        
            </td>
        </tr>
    )
}
