import {Button, Container, Grid, Input} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useState} from "react";
import {useWeb3} from "../hooks/Hooks";
import {checkKeyIntegrity, checkRightsIntegrity, Rights} from "../Services/SecurityHelper";
import {IDploma} from "../type";
import {useSmc} from "../hooks/useSmc";
import Box from "@mui/material/Box";

const Modification = () => {

    const [open, setOpen] = useState(false);
    const {connected, account,} = useWeb3()
    const [dplomaHash, setDplomaHash] = useState<any>({id: ""})
    const [dploma, setDploma] = useState<IDploma>()
    const {fetchWeb3, certification} = useSmc(undefined)
    const [userRight, setUserRight] = useState<Rights>("USER")
    const handleClick = () => {
        if (checkKeyIntegrity(dplomaHash)) {
            //fetch dpploma and define users access to functions
            let promise = fetchWeb3(dplomaHash);
            promise.then((res) => {
                return setDploma(res)
            })
            checkRightsIntegrity(dploma, account)
        }

        //TODO: return error if not valid
    }
    return (<Container >
            <Box>
                <Input fullWidth={true} onChange={event => setDplomaHash({id: event.target.value})}
                       aria-label={"test"}></Input>
                <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
            </Box>
            <Box sx={{mt:5}}>
                {connected ? <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <ButtonModal title={"Modify a Template"}
                                     description={"Define a template in order to use it with multiple registration"}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <ButtonModal  title={"Delete a Certification"} description={"provider"}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <ButtonModal title={"Change visibility"} description={""}/>
                    </Grid>

                </Grid> : "not connected"}
            </Box>
        </Container>
    )
}
export default Modification
