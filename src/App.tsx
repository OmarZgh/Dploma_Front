import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./Layout/Layout";
import {Button, createTheme, Typography} from "@mui/material";
import {BrowserRouter} from "react-router-dom";


function App() {
    const theme = createTheme()
    const darkTheme = createTheme({
            palette: {
                mode: "dark",
            }
        }
    )

    return (
        <BrowserRouter>
            <div className="App">
                <Layout theme={theme} darkTheme={darkTheme}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
