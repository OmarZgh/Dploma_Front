import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Dialog, DialogActions, DialogContent, Divider} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormLayout from "../Form/FormLayout";
import FormWithoutTemplate from "../Form/FormInsertWithoutTemplate";
import {RequestQueryStatus} from "../../Type/type";

interface Iprops {
    children?: React.ReactNode,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    title?: string | undefined,
    description?: string | undefined,
    action?: string,

}

const FormModalInsertWithTemlate= (props: Iprops) => {
    const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
    const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
    const [response, setResponse] = useState<string>("")
    const {children, open = false, setOpen, title, description, action} = props;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>


            <Card sx={{maxWidth: 345}} style={{borderRadius: 20}}>

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
                                            description={description}></FormLayout><FormWithoutTemplate />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>)

}

export default FormModalInsertWithTemlate
