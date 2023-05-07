import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useEffect, useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import QRcode from "../Components/QRcode";
import FormModalTemplate from "../Components/FormModalTemplate";
import FindAndExplore from "./FindAndExplore";
import FormLayout from "../Components/FormLayout";
import FormTemplate from "../Components/FormTemplate";
import * as React from "react";
import FormInsertWithTemplate from "../Components/FormInsertWithTemplate";
import FormModalInsertWithTemlate from "../Components/FromModalInsertWithTemplate";
import FormModalInsertWithouTemplate from "../Components/FormModalInsertWithouTemplate";

const Register = () => {

    const [open, setOpen] = useState(false);
    const [openwithTemplate, setOpenWithTemplate] = useState(false);
    const [openWithouTemplate, setOpenWithoutTemplate] = useState(false);
    const {connected, connect} = useWeb3()
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true)
    }
    useEffect(() => {
        connect()
        if (!connected) {
            setClicked(false)
        }
    }, [connected])

    return (<Container fixed={true}>

            {connected ? <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <FormModalTemplate open={open} setOpen={setOpen} description={""} title={"Register a generic template"} action={"Certify"}/>



                </Grid>
                <Grid item xs={12} lg={4}>
                    <FormModalInsertWithTemlate open={openwithTemplate} setOpen={setOpenWithTemplate} description={""} title={"Register with template" }
                                       action={"Certify"}>

                    </FormModalInsertWithTemlate>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FormModalInsertWithouTemplate open={openWithouTemplate} setOpen={setOpenWithoutTemplate} description={""} title={"Register without template "} action={"certify"}>

                    </FormModalInsertWithouTemplate>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper>
                    <FormLayout title={"Test QR Code"} description={"Scan and download QR to fetch the certification"}>
                        <QRcode hash={"0x6DFB986F6E058B90F56B2B44834203E3045C85EEAC8D03D0A4345CF89093444D"}/></FormLayout>
                    </Paper>
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
