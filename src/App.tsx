import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./Layout/Layout";
import {Button, createTheme, Typography} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {blue, green, grey, lightBlue, orange, red, yellow} from "@mui/material/colors";


function App() {
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#394867',

            },
            secondary: {
                light: red[500],
                main: '#212A3E',
                dark: red[900],
                contrastText: grey[50]
            },

            error: {
                light: red[400],
                main: '#212A3E',
                dark: red[300],
                contrastText: grey[800]
            },
            success: {
                main: green[500]
            },
            warning: {
                main: yellow[500],
                contrastText: grey[800]
            },
            info: {
                main: lightBlue[500]
            },
            text: {
                primary: grey[900],
                secondary: grey[700],
                disabled: grey[500]
            },
            action: {
                active: green[200],

                disabled: grey[700],
                disabledBackground: grey[200],
                hover: red[800],
                hoverOpacity: 1,
                focus: red[600],
                focusOpacity: 1,
                selected: red[300],
                selectedOpacity: 1
            },
            background: {
                default: blue[50],
                paper: grey[200]
            },
            common: {
                black: grey[900],
                white: grey[200]
            },
            tonalOffset: 0.2,


        }

    });
    const darkTheme = createTheme({
            palette: {
                mode: "dark",
            }
        }
    )

    return (

        <div className="App">
            <Layout theme={theme} darkTheme={darkTheme}/>
        </div>


    );
}

export default App;
