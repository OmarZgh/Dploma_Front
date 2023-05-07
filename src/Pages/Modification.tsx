import {Button, Container, Grid, Input, Typography} from "@mui/material";
import {useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import {checkKeyIntegrity, checkRightsIntegrity, Rights} from "../Services/SecurityHelper";
import Box from "@mui/material/Box";
import FormModalTemplate from "../Components/FormModalTemplate";
import * as React from "react";
import {getDploma} from "../Services/Web3APi";
import FormModalDelete from "../Components/FormModalDelete";
import FormModalModification from "../Components/FormModalModification";
import FormModalVisbility from "../Components/FormModalVisbility";


const Modification = () => {
    const [openDelete, setOpenDelete] = useState(false);
    const [openVisibility, setOpenVisibility] = useState(false);
    const [openModification, setOpenModification] = useState(false);
    const {account} = useWeb3()
    const [dplomaHash, setDplomaHash] = useState<any>({id: ""})
    const [userRight, setUserRight] = useState<Rights>("NONE")

    const handleClick = () => {
        if (checkKeyIntegrity(dplomaHash)) {
            //fetch dpploma and define users access to functions
            dplomaHash.id = dplomaHash.id.startsWith("0x") ? dplomaHash.id : "0x" + dplomaHash.id
            getDploma(dplomaHash.id).then((res) => {
                    setUserRight(checkRightsIntegrity(res, account))
                }
            )
        }

    }
    const renderModal = () => {
        switch (userRight) {
            case "NONE":
                return <Box sx={{m: 3}}><Typography variant={"h3"}>Please enter the registration reference in order to modify it</Typography></Box>
            case "USER":
                return <Box sx={{m: 3}}><Typography variant={"h3"}>You are not allowed to interact with this certification
                    please verify the provided
                    informations</Typography></Box>
            case "CERTIFIER":
                return <FormModalTemplate open={openModification} setOpen={setOpenModification} description={""}
                                          title={"Modify Certification"} action={"Certify"}/>
            case "CERTIFIED":
                return <FormModalDelete open={openDelete} setOpen={setOpenDelete}
                                        description={"Please notice that this action is irreversible" +
                                            " and will delete the certification from the blockchain ,Consider modifying it instead. Could you please confirm ?"}
                                        title={"Delete certification"} action={"Certify"}/>
            case "CERTIFIED&CERTIFIER":
                return (<> <FormModalModification open={openModification} setOpen={setOpenModification} title={"Modify Certification"}
                                                  description={""} action={"modify"}/>
                        <FormModalVisbility open={openVisibility} setOpen={setOpenVisibility} description={""}
                                            title={"Change Visibility"} action={"Vibility"}/>
                        <FormModalDelete open={openDelete} setOpen={setOpenDelete} description={""}
                                         title={"Delete certification"} action={"Delete"}/></>
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
                <Grid item xs={12} md={12} sx={{m: 5, display: "inline-flex ", justifyContent: "space-around"}}>
                    {renderModal()}
                </Grid>
            </Grid>
        </Container>
    )
}
export default Modification
