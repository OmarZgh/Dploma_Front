import {useEffect, useState} from "react";
import GetDplomaCard from "../Components/GetDplomaCard";
import {Dploma} from "../../Type/Types";

const FindAndExplore = () => {
    const [dplomas, setDplomas] = useState<Dploma>();

    useEffect(() => {
        // here is the API Response
        console.log(dplomas)
    },[dplomas])
    return (
            <GetDplomaCard updateValue={setDplomas}></GetDplomaCard>
            //Display the Dplomas

   )

}
export default FindAndExplore;