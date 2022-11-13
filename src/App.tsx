import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import NewTask from "./pages/NewTask";
import TodoContext from './contexts/TodoContext';
import Navbar from "./pages/components/Navbar";

export default function App(){
    return (
         <TodoContext>
          <BrowserRouter>
            <Navbar />
            <div className="uk-container">
            <Routes>
                <Route path='/TodoApp_with_React_and_TypeScript' element={<Homepage />} />
                <Route path='/NewTask' element={<NewTask />} />
            </Routes>
            </div>
          </BrowserRouter>
        </TodoContext>
    )
}
