import {useEffect, useState} from "react";
import GetDplomaCard from "../Components/GetDplomaCard";
import {Dploma} from "../../Type/Types";
import Box from '@mui/material/Box';
import {Container, Fab, Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';


const FindAndExplore = () => {
    const third = red[500]; // #f44336
    const [dplomas, setDplomas] = useState<Dploma>();

    useEffect(() => {
        // here is the API Response
        console.log(dplomas)
    },[dplomas])

    function doSomething() {
        console.log("do something")
    }

    return (
        <Container>
            <GetDplomaCard updateValue={setDplomas}></GetDplomaCard>
            {/*Display the Dploma*/}

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
export default FindAndExplore;