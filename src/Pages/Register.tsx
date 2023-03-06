import {Button, Container, Grid} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useState} from "react";

const Register = () => {

    const [open, setOpen] = useState(false);

    function openTemplateForm() {
        setOpen(true)
    }

    function openDiplomeForm() {
        setOpen(true)
    }

    return (<Container  style={{display:"flex"}}>

            <Grid container spacing={2}>
                <Grid item xs={1} lg={4}>
                    <ButtonModal title={"Template"} description={"Créer une template de diplôme"} image={"https://picsum.photos/200"}>
                        <Button onClick={openTemplateForm} variant={"contained"}>Créer</Button>
                    </ButtonModal>
                </Grid>
                <Grid item xs={1} lg={4}>
                    <ButtonModal title={"Certification"} description={"Nouvelle certification"}>
                        <Button onClick={openDiplomeForm} variant={"contained"}>Créer</Button>
                    </ButtonModal>
                </Grid>
                <Grid item xs={1} lg={4}>
                    <ButtonModal title={"Template & certification"} description={"Vous avez la possibilité de créer une template et ajouter une certification"}>
                        <Button onClick={openTemplateForm} variant={"contained"}>Créer</Button>
                    </ButtonModal>

                </Grid>

            </Grid>

        </Container>
    )
}
export default Register
