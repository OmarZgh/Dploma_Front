import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Dialog, DialogActions, DialogContent, Divider, Paper,} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormLayout from "./FormLayout";
import {RequestQueryStatus} from "../../type";
import LinearBuffer from "../LinearBuffer";
import QRcode from "../QRcode";
import {toggleVisibility} from "../../hooks/useSmc";


interface Iprops {
    children?: React.ReactNode,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    title?: string | undefined,
    description?: string | undefined,
    action?: string,
    disabled?: boolean,
    hash: string,
}

const FormModalVisbility = (props: Iprops) => {

    const { open = false, setOpen, title, action, disabled} = props;
    const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
    const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
    const [response, setResponse] = useState<string>("")
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCertifiedVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setRequestStatus(LOADING);
        toggleVisibility(props.hash).then((res) => {
            setResponse(res.events.evtCertifiedVisisbility.returnValues[0])
            setRequestStatus(SUCCESS);
        }).catch((err) => {
            setRequestStatus(ERROR);
        })
    }
    const renderContent = () => {
        switch (requestStatus) {
            case LOADING:
                return <div style={{display: "flex"}}>
                    <LinearBuffer/>
                </div>;
            case SUCCESS:
                return <div><Paper variant={"outlined"}><Typography variant={"h5"}>Visbility
                    status</Typography><Typography
                    noWrap={true}>{response}</Typography>
                    <QRcode hash={response}/>

                </Paper></div>;
            case ERROR:
                return <div>Error</div>;
            default:
                return <div>Please notice that this action will hide the personal information of the user concerned by
                    this
                    certification</div>;
        }
    }
    return (
        <div>
            <Card component={Button} fullWidth={true} sx={{maxWidth: 345}} style={{borderRadius: 20}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Divider/>
                    <Typography gutterBottom sx={{mb: 2, mt: 1}} variant="body2" color="text.secondary">

                    </Typography>

                    {disabled ?
                        <Button disabled variant="contained" onClick={handleClickOpen}>{action}</Button> :
                        <Button variant="contained" onClick={handleClickOpen}>{action}</Button>}
                </CardContent>
            </Card>
            <Dialog
                sx={{borderRadius: 20}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <div><DialogContent> <FormLayout title={title} description={""}/> {renderContent()}
                </DialogContent></div>

                <DialogActions>
                    <Button onClick={(e) => handleCertifiedVisibility(e)}>Confirm</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>)
}

export default FormModalVisbility
