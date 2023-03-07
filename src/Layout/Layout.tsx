import {ThemeProvider} from "@emotion/react";
import {AppBar, createTheme, CssBaseline, Typography, Switch, Button, Theme} from "@mui/material";
import TabsLayout from "./TabsLayout";
import React, {createContext, useEffect, useState} from "react";
import Footer from "../Components/Footer";
type SetEthereumAccount = (value: string | null) => void;

interface props {
    theme: Theme;
    darkTheme: Theme;
    ethereumAccount?: string;
    setEthereumAccount: SetEthereumAccount;

}

const Layout = (props: props) => {

    //theming
    const {theme, darkTheme, ethereumAccount, setEthereumAccount} = props;

    const [toogleTheme, setChangeToogleTheme] = useState<boolean>(true  )

    const handleChange = () => {
        setChangeToogleTheme(!toogleTheme )
    }

    // Disconnect the User's Ethereum wallet/account
    function disconnectFromWallet(): void {
        setEthereumAccount(null);
    }

    console.log(ethereumAccount)
    return (
        <ThemeProvider theme={toogleTheme ? theme : darkTheme}>
            <AppBar style={{display: "flex", flexDirection: "row"}} position="sticky">
                <Typography variant={"h2"} align={"left"}>Dploma</Typography>
                <Typography align={"right"}><Switch checked={toogleTheme} onChange={handleChange} inputProps={{'aria-label': 'controlled'}} color="warning"/>theme</Typography>
                <Button sx={{ml: 153}} onClick={disconnectFromWallet} variant={"contained"}>Disconnect</Button>
            </AppBar>
            <CssBaseline/>
            <TabsLayout/>
            <Typography>You are connected with {ethereumAccount}</Typography>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout
