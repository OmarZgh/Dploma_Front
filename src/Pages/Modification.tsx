import {Button, Container, Grid, Input} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useEffect, useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import {checkKeyIntegrity, checkRightsIntegrity, Rights} from "../Services/SecurityHelper";
import {IDploma} from "../type";
import {useSmc} from "../hooks/useSmc";
import Box from "@mui/material/Box";
import AuthentifiedModification from "./AuthentifiedModification";

const Modification = () => {

    const [open, setOpen] = useState(false);
    const {connected, account,} = useWeb3()
    const [dplomaHash, setDplomaHash] = useState<any>({id: ""})
    const [dploma, setDploma] = useState<IDploma>()
    const {fetchWeb3} = useSmc(undefined)
    const [userRight, setUserRight] = useState<Rights>("USER")
    const handleClick = () => {
        if (checkKeyIntegrity(dplomaHash)) {
            //fetch dpploma and define users access to functions
            let promise = fetchWeb3(dplomaHash);
            promise.then((res) => {
                return setDploma(res)
            })
            setUserRight(checkRightsIntegrity(dploma, account))
        }
        console.log(userRight)
        //TODO: return error if not valid
    }
    useEffect(() => {}, [dploma])
    return (<Container>
            <Box>
                <Input fullWidth={true} onChange={event => setDplomaHash({id: event.target.value})}
                       aria-label={"test"}></Input>
                <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
            </Box>
            <Box sx={{mt: 5}}>
                {connected && userRight !== "USER" ?
                    <AuthentifiedModification userRights={userRight} dploma={dploma}/>: "You are not allowed to interract with smart contracts please make a new registration"}
            </Box>
        </Container>
    )
}
export default Modification
