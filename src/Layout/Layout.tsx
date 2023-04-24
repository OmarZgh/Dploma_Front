import {ThemeProvider} from "@emotion/react";
import {AppBar, CssBaseline, Typography, Switch, Theme} from "@mui/material";
import TabsLayout from "./TabsLayout";
import React, {useState} from "react";
import Footer from "../Components/Footer";
import {useWeb3} from "../hooks/Hooks";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import FindAndExplore from "../Pages/FindAndExplore";


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

    const {connect, account, connected} = useWeb3()

    return (
        <BrowserRouter>
            <ThemeProvider theme={toogleTheme ? theme : darkTheme}>
                <AppBar style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} position="sticky">
                <Typography variant={"h2"} align={"left"} style={{ paddingLeft: "20px" }}>Dploma</Typography>
                    <Typography align={"right"} style={{ padding: "20px" }}><Switch checked={toogleTheme} onChange={handleChange}
                                                        inputProps={{'aria-label': 'controlled'}}
                                                        color="warning"/>Theme</Typography>
                </AppBar>
                <CssBaseline/>
                <TabsLayout/>
                <Typography>You are connected with{account} </Typography>
                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
export default Layout
