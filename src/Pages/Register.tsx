import {Container, Grid} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useState} from "react";

const Register = () => {

    const [open, setOpen] = useState(false);
    return (<Container  style={{display:"flex"}}>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ButtonModal title={"Template"} description={""}/>
                </Grid>
                <Grid item xs={4}>
                    <ButtonModal title={"Template"} description={""}/>
                </Grid>
                <Grid item xs={4}>
                    <ButtonModal title={"Template"} description={""}/>
                </Grid>

            </Grid>

        </Container>
    )
}
export default Register
