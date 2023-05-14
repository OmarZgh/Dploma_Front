import Web3 from "web3";
import {AbiItem} from 'web3-utils'
import abi from "../ABI/ABI.json";
import {IDploma} from "../type";

const web3 = new Web3((window as any).ethereum)
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const dploma = new web3.eth.Contract(abi as AbiItem[], contractAddress);

export const getDploma = async (id: string) => {
    const diploma: IDploma = await dploma.methods.getCertification(id).call();
    return diploma;
}
export const addTemplate = async (title: string, name: string, date: string, spec: string[]) => {
    const sender = await web3.eth.getAccounts()
    return await dploma.methods.createTemplate(title, name, date, spec).send({from: sender[0]});
}

export const insertWithTemplate = async (cfiedfirstname: string,
                                         cfiedLastname: string,
                                         cfiedBirthdate: string,
                                         cfierName: string,
                                         cfierPhysicalAdress: string,
                                         hashTemplate: string,
                                         certifiedPubAdress: string,
) => {
    const sender = await web3.eth.getAccounts()
    return await dploma.methods.insertWithTemplate(cfiedfirstname,
        cfiedLastname,
        cfiedBirthdate,
        cfierName,
        cfierPhysicalAdress,
        hashTemplate,
        certifiedPubAdress).send({from: sender[0]});
}

export const insertWithoutTemplate = async (cfiedfirstname: string,
                                            cfiedLastname: string,
                                            cfiedBirthdate: string,
                                            cfierName: string,
                                            cfierPhysicalAdress: string,
                                            certifiedPubAdress: string,
                                            temptitle: string,
                                            tempName: string,
                                            tempDate: string,
                                            tempSpecs: string[]) => {
    const sender = await web3.eth.getAccounts()
    return await dploma.methods.insertWithoutTemplate(
        cfiedfirstname,
        cfiedLastname,
        cfiedBirthdate,
        cfierName,
        cfierPhysicalAdress,
        certifiedPubAdress,
        temptitle,
        tempName,
        tempDate,
        tempSpecs).send({from: sender[0]});
}

export const updateTemplate = async (hashTemplate: string,
                              title: string,
                              name: string,
                              date: string,
                              spec: string[]) => {
    const sender = await web3.eth.getAccounts()
    const diploma: IDploma = await dploma.methods.ModifyTemplate(
        hashTemplate,
        title,
        name,
        date,
        spec).send({from: sender[0]});
    return diploma;
}

export const deleteCertif = async (id: string) => {
    const sender = await web3.eth.getAccounts()
    return await dploma.methods.DeleteCertif(id).send({from: sender[0]});
}

export const changeVisibility = async (id: string) => {
    const sender = await web3.eth.getAccounts()
    return await dploma.methods.toggleStudentVisibility(id).send({from: sender[0]});
}
