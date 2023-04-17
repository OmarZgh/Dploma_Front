import {Button, Container, Grid, Input, Modal, Typography} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import React, {useState} from "react";
import RegisterTemplateForm from "../Components/RegisterTemplateForm";
import RegisterTemplateProvider from "../Components/RegisterTemplateProvider";
import RegisterWithoutTemplate from "../Components/RegisterWithoutTemplate";

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
                    <RegisterTemplateForm onSubmit={() => {
                        console.log("submit")
                    }}/>
                );
            case "templateProvider":
                return (
                    <RegisterTemplateProvider onSubmit={() => {}}/>
                );
            case "noTemplate":
                return (
                    <RegisterWithoutTemplate onSubmit={() => {}}/>
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
                <Container maxWidth="xl" sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%' ,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    maxWidth: 'none',}}>
                    <Typography variant="h6">Register a template</Typography>
                    <Typography variant="subtitle1">Please fill out the form below</Typography>
                    {renderForm()}
                </Container>
            </Modal>

        </Container>
    )
}
export default Register;
