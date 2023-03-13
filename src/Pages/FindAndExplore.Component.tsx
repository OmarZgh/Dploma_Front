import {useEffect, useState} from "react";
import GetDplomaCard from "../Components/GetDplomaCard";
import {Dploma} from "../../Type/Types";
import {getDploma} from "../Services/Web3APi";
import {useSmc} from "../hooks/useSmc";

const FindAndExplore = () => {
    const [dplomas, setDplomas] = useState<Dploma>();
    const {fetchWeb3,log}=useSmc()
    useEffect(() => {
        fetchWeb3("0x9B454B54E056C0BD6B182B70145319402A030FB6E7A1B980D16341F33B473D8C")
    }, [dplomas])
    return (
            <GetDplomaCard updateValue={setDplomas}></GetDplomaCard>
            //Display the Dplomas

   )

}
export default FindAndExplore;
