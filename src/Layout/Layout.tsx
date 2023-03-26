import {ThemeProvider} from "@emotion/react";
import {AppBar, createTheme, CssBaseline, Typography, Switch, Button, Theme} from "@mui/material";
import TabsLayout from "./TabsLayout";
import React, {useEffect, useState} from "react";
import Footer from "../Components/Footer";
import {useWeb3} from "../hooks/Hooks";
import {Route, Routes} from "react-router-dom";
import FindAndExplore from "../Pages/FindAndExplore.Component";



interface props {
    theme: Theme;
    darkTheme: Theme;

}

const Layout = (props: props) => {

    //theming
    const {theme, darkTheme} = props;

    const [toogleTheme, setChangeToogleTheme] = useState<boolean>(true)

    const handleChange = () => {
        setChangeToogleTheme(!toogleTheme)
    }


    const {connect,account,connected}=useWeb3()

    return (
        <ThemeProvider theme={toogleTheme ? theme : darkTheme}>
            <AppBar style={{display: "flex", flexDirection: "row"}} position="sticky">
                <Typography variant={"h2"} align={"left"}>Dploma</Typography>
                <Typography align={"right"}><Switch checked={toogleTheme} onChange={handleChange}
                                                    inputProps={{'aria-label': 'controlled'}}
                                                    color="warning"/>theme</Typography>
            </AppBar>
            <CssBaseline/>
            <TabsLayout/>


            <Typography>You are connected with{account} </Typography>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout
