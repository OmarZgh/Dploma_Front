import Web3 from "web3";
import { AbiItem } from 'web3-utils'
import abi from "../ABI/ABI.json";

const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/GoPk5qRGiHAo9EUXOvUquXJFW-MsRg5i");
const contractAddress="0xf87E2fD2214F291eE6098A091BA42DC01c002d7A"
const dploma = new web3.eth.Contract(abi as unknown as AbiItem[], contractAddress);


export const getDploma = async (id: string) => {
    const diploma = await dploma.methods.getCertification(id).call();
    return diploma;
}
