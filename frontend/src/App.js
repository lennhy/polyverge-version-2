// Importing modules
import React, { useState, useEffect } from "react";
import NavHeader from "./components/NavHeader";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";


function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });
  
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);
  
    return (
        <div className="App">
            <NavHeader></NavHeader>
            <header className="App-header">
                <h1>Polyverge</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>
            </header>
            <Landing></Landing>
            <Gallery></Gallery>
        </div>
    );
}
  
export default App;