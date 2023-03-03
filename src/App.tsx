import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Layout from "./Layout/Layout";
import {Button, createTheme, Typography} from "@mui/material";


function App() {
    const theme = createTheme()
    const darkTheme = createTheme({
            palette: {
                mode: "dark",
            }
        }
    )
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
    const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

    useEffect(() => {
        if ((window as any).ethereum) {
            //check if Metamask wallet is installed
            setIsMetamaskInstalled(true);
        }
    }, []);


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
                            <Typography variant={"h1"}>Welcome to Dploma </Typography>
                            <Typography>Connect Your Metamask Wallet</Typography>
                            <Button variant={"outlined"} onClick={connectMetamaskWallet}> Here</Button>
                        </div>
                    ) : (<>
                            <Typography variant={"h1"}>Welcome to Dploma </Typography>
                            <Typography>Please install Metamask extension</Typography>
                            <a href={"https://metamask.io/download/"}>here</a>

                        </>
                    )
                }
            </div>
        );
    }


    return (

        <div className="App">
            <Layout theme={theme} darkTheme={darkTheme} setEthereumAccount={setEthereumAccount}
                    ethereumAccount={ethereumAccount}/>

        </div>

    );
}

export default App;
