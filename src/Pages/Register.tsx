import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useEffect, useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import QRcode from "../Components/QRcode";
import FormModal from "../Components/FormModal";
import FindAndExplore from "./FindAndExplore";

const Register = () => {

    const [open, setOpen] = useState(false);
    const {connected, connect} = useWeb3()
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true)
    }
    useEffect(() => {
        if (!connected) {
            setClicked(false)
        }
    }, [connected])

    return (<Container fixed={true}>

            {connected ? <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <FormModal open={open} setOpen={setOpen} description={""} title={"Register a generic template"} action={"Certify"}>
                        //insert Form here

                    </FormModal>

                </Grid>
                <Grid item xs={12} lg={4}>
                    <FormModal open={open} setOpen={setOpen} description={""} title={"Register with template" }
                               action={"Certify"}>
                        //insert Form here
                    </FormModal>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FormModal open={open} setOpen={setOpen} description={""} title={"Register without template "} action={"certify"}>
                        //insert Form here
                    </FormModal>
                </Grid>

            </Grid> : <Grid>
                <Paper sx={{p: 2, m: 2, display: "flex", flexDirection: "column", alignItems: "center"}}
                >
                    {clicked ? <div><Typography>You are currently not connected with your metamask account</Typography>
                            <Button variant={"outlined"} onClick={connect}>Connect</Button></div> :
                        <div><Typography>You are currently not connected with your metamask account
                        please chek your browser extensions
                        </Typography></div>
                 }

                </Paper>

            </Grid>}

        </Container>
    )
}
export default Register
