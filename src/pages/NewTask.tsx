import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from "../contexts/TodoContextType";

const schema = yup.object().shape({
    task: yup.string().required('Não é possível adicionar uma tarefa sem dizer o que ela é.')
});

interface AddTodoForm{
    task: string
}

export default function NewTask(){
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    
    const { register, handleSubmit, formState: {errors} } = useForm<AddTodoForm>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm , e: any) => {
        addTodo(data.task);
        e.target.reset();
        window.location.href="/TodoApp_with_React_and_TypeScript"
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Adicionando nova tarefa a minha lista</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" {... register("task")} id="task" placeholder="Nova tarefa..." className="uk-input" />
                <span><small><strong className="uk-text-danger">{errors.task?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );

}    