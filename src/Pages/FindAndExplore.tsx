import React, {useEffect, useState} from "react";
import {useSmc} from "../hooks/useSmc";
import {Button, Grid, Input} from "@mui/material";
import {IDploma} from "../Type/type";
import Box from "@mui/material/Box";
import DisplayDiploma from "../Components/DisplayDiploma";
import FormLayout from "../Components/Form/FormLayout";
import {useLocation} from "react-router-dom";
import QRcode from "../Components/QRcode";


const FindAndExplore = (props: any) => {
    const [dplomas, setDplomas] = useState<IDploma | undefined>();
    const [hash, setHash] = useState<any>({id: ""})
    const {fetchWeb3} = useSmc(undefined)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const [displayQR, setDisplayQR] = useState<boolean>(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

        setHash({id: event.target.value})
    }

    function handleClick() {
        let promise = fetchWeb3(hash.id);
        promise.then((res) => {
            return setDplomas(res)
        })
    }

    useEffect(() => {
        if (id) {
            let promise = fetchWeb3(id);
            promise.then((res) => {
                return setDplomas(res)
            })
        }
    }, [])
    const isEmpty = (obj: any) => {
        return hash.id === "0x";
    }
    useEffect(() => {
        if (isEmpty(hash)) {
            setDplomas(undefined)
            setDisplayQR(false)
        } else if (dplomas) {
            setDisplayQR(true)
        }
        if(id){
            setHash({id: id})
            setDisplayQR(true)
        }

    }, [ dplomas,handleChange])
    return (
        <FormLayout title={"find"} description={"search for a diploma"}>
            <Box>
                <Input fullWidth={true} onChange={event => handleChange(event)} aria-label={"test"}></Input>
                <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
                <DisplayDiploma diplomas={dplomas}/>


            </Box>
            <Grid spacing={0}
                  container
                  direction="column"
            >
                <div style={{}}> {displayQR ? <QRcode hash={hash.id}/> : <></>}</div>

            </Grid>
        </FormLayout>

    )

}
export default FindAndExplore;
