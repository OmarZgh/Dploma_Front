import React, {SyntheticEvent, useEffect, useState} from "react";

import {Dploma} from "../../Type/Types";
import {getDploma} from "../Services/Web3APi";
import {useSmc} from "../hooks/useSmc";
import {id} from "ethers";
import {Button, Input} from "@mui/material";
import {IDploma} from "../type";
import Box from "@mui/material/Box";
import DisplayDiploma from "../Components/DisplayDiploma";

const FindAndExplore = () => {
    const [dplomas, setDplomas] = useState<IDploma | undefined>();
    const [hash, setHash] = useState<any>({id: ""})
    const {certification, fetchWeb3} = useSmc(undefined)


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
        <Box>
            <Input fullWidth={true} onChange={event => handleChange(event)} aria-label={"test"}></Input>
            <Button onClick={handleClick} fullWidth={true} variant={"contained"}>Find</Button>
            <DisplayDiploma diplomas={dplomas}/>
        </Box>
        //Display the Dplomas

    )

}
export default FindAndExplore;
