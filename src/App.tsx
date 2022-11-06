import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import NewTask from "./pages/NewTask";
import TodoContext from './contexts/TodoContext';

export default function App(){
    return (
         <TodoContext>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={Homepage()} />
                <Route path='/NewTask' element={NewTask()} />
            </Routes>
          </BrowserRouter>
        </TodoContext>
    )
}
