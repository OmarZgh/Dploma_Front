import {ThemeProvider} from "@emotion/react";
import {AppBar, createTheme, CssBaseline, Typography, Switch, Button} from "@mui/material";
import TabsLayout from "./TabsLayout";
import React, {createContext, useEffect, useState} from "react";
import Footer from "../Components/Footer";

const Layout = (props: any) => {

    //theming
    const theme = createTheme()
    const darkTheme = createTheme({
            palette: {
                mode: "dark",
            }
        }
    )

    const [toogleTheme, setChangeToogleTheme] = useState<boolean>(false)
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
    const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

    useEffect(() => {
        if ((window as any).ethereum) {
            //check if Metamask wallet is installed
            setIsMetamaskInstalled(true);
        }
    }, [ethereumAccount]);

    //Does the User have an Ethereum wallet/account?
    async function connectMetamaskWallet(): Promise<void> {
        //to get around type checking
        (window as any).ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts: string[]) => {
                setEthereumAccount(accounts[0]);
            })
            .catch((error: any) => {
                alert(`Something went wrong: ${error}`);
            });
    }

    if (ethereumAccount === null) {
        return (
            <div className="App App-header">
                {
                    isMetamaskInstalled ? (
                        <div>
                            <button onClick={connectMetamaskWallet}>Connect Your Metamask Wallet</button>
                        </div>
                    ) : (
                        <p>Install Your Metamask wallet</p>
                    )
                }
            </div>
        );
    }

    const handleChange = () => {
        setChangeToogleTheme(!toogleTheme)
    }

    function disconnectFromWallet() {
        setEthereumAccount(null)
    }

    console.log(ethereumAccount)
    return (
        <ThemeProvider theme={toogleTheme ? theme : darkTheme}>
            <AppBar style={{display: "flex", flexDirection: "row"}} position="sticky">
                <Typography variant={"h2"} align={"left"}>Dploma</Typography>
                <Switch
                    checked={toogleTheme}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                    color="warning"
                />

                <Button sx={{ml:153}} onClick={disconnectFromWallet}>Disconnect</Button>
            </AppBar>
            <CssBaseline/>
            <TabsLayout/>
            <Typography>You are connected with {ethereumAccount}</Typography>
            <Footer />
        </ThemeProvider>
    )
}
export default Layout