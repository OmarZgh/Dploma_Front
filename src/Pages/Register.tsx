import {Button, Container, Grid} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import QRcode from "../Components/QRcode";

const Register = () => {

    const [open, setOpen] = useState(false);
    const {connected, connect} = useWeb3()
    return (<Container style={{display: "flex"}}>

            {connected?<Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <ButtonModal title={"Register a Template"}
                                 description={"Define a template in order to use it with multiple registration"}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ButtonModal title={"Register with template"} description={"provider"}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ButtonModal title={"Register without template"} description={""}/>
                </Grid>

        </Grid>:"not connected"}
        <QRcode hash={ "0x9B454B54E056C0BD6B182B70145319402A030FB6E7A1B980D16341F33B473D8C"}/>npm
        </Container>
    )
}
export default Register
