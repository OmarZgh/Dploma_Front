import {addTemplate, getDploma} from "../Services/Web3APi";
import {useEffect, useState} from "react";
import {IDploma, ITemplate} from "../type";



const fetchWeb3 = async (id?:string|undefined) => {
    return id!?await getDploma(id).then((res: IDploma) => {
        const certif: IDploma = res
        return certif
    }):undefined
}

const insertTemplate = async (template : ITemplate)=>{
    return addTemplate(template.temp_title!,template.temp_name!,template.temp_date!,template.temp_speciality!)

}

const updateTemplate = (template : ITemplate,hash:string)=>{}
const insertWithoutTemplate = (certif : IDploma)=>{
    console.log("insert "+certif)
    return null;
}
const insertWithTemplate = (template : IDploma)=>{
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


    return {certification,fetchWeb3:fetchWeb3, insertWithTemplate, insertTemplate, insertWithoutTemplate,updateTemplate}
}




