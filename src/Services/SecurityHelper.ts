import {IDploma} from "../type";

export function checkKeyIntegrity(accessKeyRef: string) {
    //TODO :check length
    //TODO :check NoSpace
    //TODO :Check type Character
    return true;
}

export type Rights = "CERTIFIER" | "CERTIFIED" | "USER" | "CERTIFIED&CERTIFIER" | "NONE"

export function checkRightsIntegrity(dploma: IDploma | undefined, account: string) {

    if (dploma?.certAddrCertified?.toLowerCase().includes(account) && dploma?.certAddrCertifier?.toLowerCase().includes(account)) {
        return "CERTIFIED&CERTIFIER"
    } else if (dploma?.certAddrCertifier?.toLowerCase().includes(account)) {
        return "CERTIFIER"
    } else if (dploma?.certAddrCertified?.toLowerCase().includes(account)) {
        return "CERTIFIED"
    } else {
        return "USER"
    }

}
