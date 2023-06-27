import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Detail from './Detail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/:id" element={< Detail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App