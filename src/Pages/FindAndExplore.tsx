import React, {SyntheticEvent, useEffect, useState} from "react";

import {Dploma} from "../../Type/Types";
import {getDploma} from "../Services/Web3APi";
import {useSmc} from "../hooks/useSmc";
import {id} from "ethers";
import {Button, Input} from "@mui/material";
import {IDploma} from "../type";
import Box from "@mui/material/Box";
import DisplayDiploma from "../Components/DisplayDiploma";
import FormLayout from "../Components/FormLayout";
import {useParams} from "react-router-dom";
import {hydrate} from "react-dom";

const FindAndExplore = (props:any) => {
    const [dplomas, setDplomas] = useState<IDploma | undefined>();
    const [hash, setHash] = useState<any>({id: ""})
    const { fetchWeb3} = useSmc(undefined)
    const {id}=useParams()

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setHash({id: event.target.value})
    }

    console.log(id)
    function handleClick() {
        let promise = fetchWeb3(hash.id);
        promise.then((res) => {
            return setDplomas(res)
        })
    }

    console.log(id)
    useEffect(() => {
        if(id){
            let hash= id.split("=")[1]
            let promise = fetchWeb3(hash);
            promise.then((res) => {
                return setDplomas(res)
            })
        }
    }, [])

    return (
        <FormLayout title={"find"} description={"search for a diploma"}>
            <Box>
                <Input fullWidth={true} onChange={event => handleChange(event)} aria-label={"test"}></Input>
                <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
                <DisplayDiploma diplomas={dplomas}/>
            </Box>
        </FormLayout>        //Display the Dplomas

    )

}
export default FindAndExplore;
