import {Button, Container, Grid, Input, Modal, Typography} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import React, {useState} from "react";
import RegisterTemplateForm from "../Components/RegisterTemplateForm";
import FormLayout from "../Components/FormLayout";
import Box from "@mui/material/Box";
import DisplayDiploma from "../Components/DisplayDiploma";

const Register = () => {
    const [open, setOpen] = useState(false);
    const [formType, setFormType] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (type:string) => {
        setFormType(type);
        setOpen(true);
    };

    const renderForm = () => {
        switch (formType) {
            case "template":
                return (
                    <RegisterTemplateForm />
                );
            case "templateProvider":
                return (
                    <FormLayout title={"test"} description={"test"}>
                        <Box>
                            <Input className="CustomInput" fullWidth={true} aria-label={"test"}></Input>
                            <Button>Tester</Button>
                        </Box>
                    </FormLayout>
                );
            case "noTemplate":
                return (
                    <form>
                        <label htmlFor="templateName">Nom du template :</label>
                        <input type="text" id="templateName" name="templateName"/>

                        <label htmlFor="templateDescription">Description :</label>
                        <textarea id="templateDescription" name="templateDescription"></textarea>

                        <Button variant="contained" color="primary" type="submit">Enregistrer</Button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <Container style={{display: "flex"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <ButtonModal title={"Register a Template"}
                                 description={"Define a template in order to use it with multiple registration"}
                                 onClick={() => handleOpen("template")}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ButtonModal title={"Register with template provider"} description={"provider"}
                                 onClick={() => handleOpen("templateProvider")}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ButtonModal title={"Register without template"} description={""}
                                 onClick={() => handleOpen("noTemplate")}/>
                </Grid>
            </Grid>

            <Modal open={open} onClose={handleClose}>
                <Container sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4}}>
                    <Typography variant="h6" gutterBottom>
                        Register
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Please fill out the form below to register.
                    </Typography>
                    {renderForm()}
                </Container>
            </Modal>

        </Container>
    )
}
export default Register;
