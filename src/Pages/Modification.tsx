import {Button, Container, Grid, Icon, IconButton, Input} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useEffect, useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import {checkKeyIntegrity, checkRightsIntegrity, Rights} from "../Services/SecurityHelper";
import {IDploma} from "../type";
import {useSmc} from "../hooks/useSmc";
import Box from "@mui/material/Box";
import AuthentifiedModification from "./AuthentifiedModification";
import FormModalTemplate from "../Components/FormModalTemplate";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as React from "react";
import {getDploma} from "../Services/Web3APi";
import {SpaceBarRounded} from "@mui/icons-material";

const Modification = () => {

    const [open, setOpen] = useState(false);
    const {connected, account} = useWeb3()
    const [dplomaHash, setDplomaHash] = useState<any>({id: ""})
    const [dploma, setDploma] = useState<IDploma>()
    const {fetchWeb3} = useSmc(undefined)
    const [userRight, setUserRight] = useState<Rights>("NONE")
    const checkList: string[] | undefined = []
    const handleClick = () => {
        if (checkKeyIntegrity(dplomaHash)) {
            //fetch dpploma and define users access to functions
            getDploma("0x"+dplomaHash.id).then((res) => {
                    setUserRight(checkRightsIntegrity(res, account))
                }
            )
            console.log(userRight)
        }

    }


    const renderModal = () => {
        switch (userRight) {
            case "NONE":
                return <Box sx={{m: 3}}>Please enter the registration reference in order to modify it</Box>
            case "USER":
                return <Box sx={{m: 3}}>You are not allowed to interract with smart contracts please make a new
                    registration</Box>
            case "CERTIFIER":
                return <FormModalTemplate open={open} setOpen={setOpen} description={""}
                                          title={"Certifier Actions"} action={"Certify"}/>
            case "CERTIFIED":
                return <FormModalTemplate open={open} setOpen={setOpen} description={""}
                                          title={"Certifier Actions"} action={"Certify"}/>
            case "CERTIFIED&CERTIFIER":
                return (<><FormModalTemplate open={open} setOpen={setOpen} description={""}
                                             title={"Certifier Actions"} action={"Certify"}/>
                        <FormModalTemplate open={open} setOpen={setOpen} description={""}
                                           title={"Certifier Actions"} action={"Certify"}/>

                        <FormModalTemplate open={open} setOpen={setOpen} description={""}
                                           title={"Certifier Actions"} action={"Certify"}/></>

                )
        }
    }

    return (<Container>
            <Box>
                <Input fullWidth={true} onChange={event => setDplomaHash({id: event.target.value})}
                       aria-label={"test"}></Input>
                <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{m: 5, display:"inline-flex ", justifyContent:"space-around" }}>
                    {renderModal()}
                </Grid>
            </Grid>
        </Container>
    )
}
export default Modification
