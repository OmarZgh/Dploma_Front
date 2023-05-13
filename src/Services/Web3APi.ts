import Web3 from "web3";
import { AbiItem } from 'web3-utils'
import abi from "../ABI/ABI.json";
import {IDploma, ITemplate} from "../type";

const web3 = new Web3((window as any).ethereum)
const contractAddress=process.env.REACT_APP_CONTRACT_ADDRESS;

const dploma = new web3.eth.Contract(abi as AbiItem[], contractAddress);

export const getDploma = async (id: string) => {
    const diploma:IDploma = await dploma.methods.getCertification(id).call();
    return diploma;
}
export const addTemplate = async ( title: string, name: string, date: string, spec: string[]) => {
    const sender=await web3.eth.getAccounts()
    const diploma = await dploma.methods.createTemplate(title,name,date,spec).send({from: sender[0]});
    return diploma;
}

const insertWithTemplate = async (id: string, templateId: string, name: string, date: string, spec: string[]) => {
    const diploma:IDploma = await dploma.methods.insertWithTemplate(templateId, name, date, spec).call();
    return diploma;
}
