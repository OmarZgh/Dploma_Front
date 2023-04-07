import React, {SyntheticEvent, useEffect, useState} from "react";
import {Dploma} from "../../Type/Types";
import {getDploma} from "../Services/Web3APi";
import {useSmc} from "../hooks/useSmc";
import {id} from "ethers";
import {Button, Container, Input, styled} from "@mui/material";
import {IDploma} from "../type";
import Box from "@mui/material/Box";
import DisplayDiploma from "../Components/DisplayDiploma";
import FormLayout from "../Components/FormLayout";

const CustomButton = styled(Button)({
    backgroundColor: 'rgba(0,60,255,0.47)',
    border: '2px',
    borderRadius: '4px',
    padding: '8px 50px',
    fontSize: '16px',
    color: '#000',
    cursor: 'pointer',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.51)',
        color: '#fff',
    },
});

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
        <Container>
            <FormLayout title={"Find"} description={"Explore diplomas"}>
                <Box>
                    <Input className="CustomInput" fullWidth={true} onChange={event => handleChange(event)} aria-label={"test"}></Input>
                    <CustomButton className="CustomButton" onClick={handleClick} variant={"contained"}>Find certification</CustomButton>
                    <DisplayDiploma diplomas={dplomas}/>
                </Box>
            </FormLayout>
            //Display the Dplomas
        </Container>
    )

}
export default FindAndExplore;
