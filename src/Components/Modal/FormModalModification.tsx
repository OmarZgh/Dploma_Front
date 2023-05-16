import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Dialog, DialogActions, DialogContent, Divider, Paper,} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormLayout from "../Form/FormLayout";
import FormTemplate from "../Form/FormTemplate";
import {ITemplate, RequestQueryStatus} from "../../type";
import LinearBuffer from "../LinearBuffer";
import {updateTemp} from "../../hooks/useSmc";


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

const FormModalModification = (props: Iprops) => {
    const [template, setTemplate] = React.useState<ITemplate >({})
    const {children, open = false, setOpen, title, action, disabled} = props;
    const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
    const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
    const [response, setResponse] = useState<string>("")
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModify = () => {
        setRequestStatus(LOADING);
        updateTemp(template, props.hash).then((res) => {
           // setResponse(res.events.evtUpdatedTemp.returnValues[0])
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
                return <div><Typography variant={"h5"}>Modify content
                    status</Typography><Typography
                    noWrap={true}>{response}</Typography>

                </div>
            case ERROR:
                return <div><Paper variant={"outlined"}><Typography variant={"h5"}>Modify content
                    status</Typography><Typography
                    noWrap={true}>{response}</Typography>

                </Paper></div>
            default:
                return   (
                    <><Typography>Please notice that this action will perform a modification over the actual template
                        informations.</Typography><FormTemplate disabled={true}
                                                                setTemplate={setTemplate}></FormTemplate></>
                )

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
                />
                    {renderContent()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModify}>Modify</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>)

}

export default FormModalModification
