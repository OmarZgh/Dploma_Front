import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Dialog, DialogActions, DialogContent, Divider, Paper,} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormLayout from "../Form/FormLayout";
import {RequestQueryStatus} from "../../type";
import {deleteCertification} from "../../hooks/useSmc";
import LinearBuffer from "../LinearBuffer";


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

const FormModalDelete = (props: Iprops) => {
    const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
    const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
    const [response, setResponse] = useState<string>("")
    const { open = false, setOpen, title, action, disabled} = props;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = () => {
        setRequestStatus(LOADING);
        deleteCertification(props.hash).then((res) => {
            setResponse(res.events.evtDeletedCertif.returnValues[0])
            setRequestStatus(SUCCESS);
        }).catch(() => {
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

                </Paper></div>
            case ERROR:
                return <div><Paper variant={"outlined"}><Typography variant={"h5"}>Visbility
                    status</Typography><Typography
                    noWrap={true}>Error</Typography>
                </Paper></div>
            default:
                return <div><Typography variant={"h5"}>Please notice that this action is
                    irreversible
                    and will delete the certification from the blockchain ,Consider modifying it instead. Could you
                    please confirm your the deletion of this certification?</Typography>
                </div>
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
                <DialogContent> <FormLayout title={title} description={""}
                /> {renderContent()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete}>Confirm</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>)

}

export default FormModalDelete
