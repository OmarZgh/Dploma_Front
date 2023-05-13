import Web3 from "web3";
import { AbiItem } from 'web3-utils'
import abi from "../ABI/ABI.json";
import {IDploma, ITemplate} from "../type";
import {useSmc} from "../hooks/useSmc";

const web3 = new Web3((window as any).ethereum);
const contractAddress=process.env.REACT_APP_CONTRACT_ADDRESS;
const dploma = new web3.eth.Contract(abi as unknown as AbiItem[], contractAddress);
const sender=(window as any).ethereum.request({method: "eth_requestAccounts"}).then((res:any)=>{console.log(res)}).catch((err:any)=>{console.log(err)})

export const getDploma = async (id: string) => {
    const diploma:IDploma = await dploma.methods.getCertification(id).call();
    return diploma;
}
export const addTemplate = async ( title: string, name: string, date: string, spec: string[]) => {
    const diploma = await dploma.methods.createTemplate(title, name, date, spec).call();
    console.log(diploma)
    return diploma;
}

const insertWithTemplate = async (id: string, templateId: string, name: string, date: string, spec: string[]) => {
    const diploma:IDploma = await dploma.methods.connect(sender).insertWithTemplate(templateId, name, date, spec).call();
    return diploma;
}
