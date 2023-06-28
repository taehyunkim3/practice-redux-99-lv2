

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Page404 from "../pages/Page404";
import Layout from "./layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="works" element={<Works />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router