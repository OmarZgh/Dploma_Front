import {getDploma} from "../Services/Web3APi";
import {useEffect, useState} from "react";
import {IDploma} from "../type";



const fetchWeb3 = async (id?:string|undefined) => {
    return id!?await getDploma(id).then((res: IDploma) => {
        const certif: IDploma = res
        return certif
    }):undefined
}
export const useSmc = (props:{id:string}|undefined) => {
    const id = props?.id
    const [certification, setCertification] = useState<IDploma>()

    useEffect(() => {
        const fetchDploma = async () => {
            setCertification(await fetchWeb3(id))
        }
        fetchDploma()
    }, [])

    console.log("certification", certification)
    return {certification,fetchWeb3:fetchWeb3}
}




