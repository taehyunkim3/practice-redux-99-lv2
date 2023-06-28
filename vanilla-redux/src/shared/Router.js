

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Page404 from "../pages/Page404";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="works" element={<Works />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Page404 />} />

            </Routes>

        </BrowserRouter>
    )
}

export default Router