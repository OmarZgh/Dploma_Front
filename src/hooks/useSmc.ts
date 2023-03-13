import {getDploma} from "../Services/Web3APi";
import {useEffect, useState} from "react";



export const useSmc = () => {
    const fetchWeb3 = async (id: string) => {
        return  await getDploma(id).then((res: any) => {
            console.log(res)
            return res
        })
    }
    const [log, setLog] = useState("")


    return {log, fetchWeb3: fetchWeb3}
}




