import {Button, Container, Grid} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useState} from "react";
import {useWeb3} from "../hooks/Hooks";

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

        </Container>
    )
}
export default Register
