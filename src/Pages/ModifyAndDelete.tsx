import React, {useEffect, useState} from "react";
import {Dploma} from "../../Type/Types";
import Box from '@mui/material/Box';
import {Button, Container, Fab, Grid, Input} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import DisplayDiploma from "../Components/DisplayDiploma";
import {IDploma} from "../type";
import {useSmc} from "../hooks/useSmc";
import FormLayout from "../Components/FormLayout";


const ModifyAndDelete = () => {
    const third = red[500]; // #f44336
    const [dplomas, setDplomas] = useState<IDploma | undefined>();
    const [hash, setHash] = useState<any>({id: ""})
    const {certification, fetchWeb3} = useSmc(undefined)

    useEffect(() => {
        // here is the API Response
        console.log(dplomas)
    },[dplomas])

    function doSomething() {
        console.log("do something")
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setHash({id: event.target.value})
    }

    function handleClick() {
        let promise = fetchWeb3(hash.id);
        promise.then((res) => {
            return setDplomas(res)
        })
    }
    useEffect(() => {  }, [dplomas])
    return (
        <Container>
            <FormLayout title={"Modify & Delete"} description={""}>
                <Box>
                    <Input fullWidth={true} onChange={event => handleChange(event)} aria-label={"test"}></Input>
                    <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
                    <DisplayDiploma diplomas={dplomas}/>
                </Box>
            </FormLayout>


            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                {/*check les droits de l'utilisateur -> grisé ou non les boutons*/}

                <Fab onClick={doSomething} color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab onClick={doSomething} color="primary" aria-label="edit">
                    <VisibilityOffIcon />
                </Fab>
                <Fab onClick={doSomething} color="secondary" aria-label="edit">
                    <DeleteForeverIcon />
                </Fab>

            </Box>
        </Container>


    )
}
export default ModifyAndDelete;