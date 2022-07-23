// Importing modules
import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NavHeader from "./components/NavHeader";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Cart from "./components/Cart";
import About from "./components/About";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <NavHeader></NavHeader>
            <Routes>
                <Route Path="/" element={<Home />} />
                <Route Path="/gallery" element={<Gallery />} />
                <Route Path="/cart" element={<Cart />} />
                <Route Path="/about" element={<About />} />

            </Routes>
            </BrowserRouter>
        </div>
    );
}
  
export default App;