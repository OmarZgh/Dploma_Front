import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Paper} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import ButtonModal from "./ButtonModal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FormLayout from "./FormLayout";
import RegisterTemplateForm from "./RegisterTemplateForm";
import DialogContext from "@mui/material/Dialog/DialogContext";

interface Iprops {
    children?: React.ReactNode,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    title?: string | undefined,
    description?: string | undefined,
    action?: string,

}

const FormModalTemplate = (props: Iprops) => {

    const {children, open = false, setOpen, title, description, action} = props;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>


            <Card component={Button} fullWidth={true} sx={{maxWidth: 345}} style={{borderRadius: 20}}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Divider/>
                    <Typography gutterBottom sx={{mb: 2, mt: 1}} variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Button variant={"contained"} onClick={handleClickOpen}>
                        {action}
                    </Button>
                </CardContent>
            </Card>
            <Dialog
                sx={{borderRadius: 20}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogContent> <FormLayout title={title}
                                            description={description}></FormLayout><RegisterTemplateForm></RegisterTemplateForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>)

}

export default FormModalTemplate
