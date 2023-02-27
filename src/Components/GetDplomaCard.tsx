import {Button, Input, Paper} from "@mui/material";
import React, {useState} from "react";
import {log} from "util";
import {checkKeyIntegrity} from "../Services/SecurityHelper";


const GetDplomaCard = (props:any) => {


    const [accessKeyRef, setAccessKeyRef] = useState<string>("")

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // TODO :Call Services Component to Interact whit the Smart contract
        const data:any=checkKeyIntegrity(accessKeyRef)?console.log("sendTOAPi :"+accessKeyRef):console.log("error")
        props.updateValue(data)
        //reset Input field
        setAccessKeyRef("")
    }

    return (<Paper color={"secondary"}>
        <Input fullWidth={true} onChange={event => {
            setAccessKeyRef(event.target.value)
        }} value={accessKeyRef}></Input>
        <Button sx={{p: 1}} fullWidth={true} style={{backgroundColor:"secondary"}} onClick={onSubmit}>Search</Button>
    </Paper>)

}

export default GetDplomaCard