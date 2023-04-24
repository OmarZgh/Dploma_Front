import {getDploma} from "../Services/Web3APi";
import {useEffect, useState} from "react";
import {IDploma, ITemplate} from "../type";



const fetchWeb3 = async (id?:string|undefined) => {
    return id!?await getDploma(id).then((res: IDploma) => {
        const certif: IDploma = res
        return certif
    }):undefined
}

const insertTemplate = (template : ITemplate)=>{
    console.log("insert "+template)
    return null;
}
const insertWithoutTemplate = (certif : IDploma)=>{
    console.log("insert "+certif)
    return null;
}
const insertWithTemplate = (template : IDploma)=>{
    console.log("insert "+template)
    return null;
}
const deleteCertif = (template : string)=>{

    return null;
}
const modifyTemplate = (template : ITemplate, hash : string)=>{

    return null;
}

const toggleVisibility = (hash : string)=>{

    return null;
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


    return {certification,fetchWeb3:fetchWeb3, insertWithTemplate, insertTemplate, insertWithoutTemplate}
}




