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
    let {hash} = useParams()
    const handleChange = () => {
        setChangeToogleTheme(!toogleTheme)
    }
    console.log(hash)

    const {connect, account, connected} = useWeb3()

    return (
        <BrowserRouter>
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

            <Routes>
                <Route path={"/"} element={<FindAndExplore/>}>
                    <Route path={":id"} element={<FindAndExplore/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Layout
