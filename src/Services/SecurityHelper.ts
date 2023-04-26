import {IDploma} from "../type";

export function checkKeyIntegrity(accessKeyRef: string) {
    //TODO :check length
    //TODO :check NoSpace
    //TODO :Check type Character
    return true;
}

export type Rights = "CERTIFIER" | "CERTIFIED" | "USER" ;

export function checkRightsIntegrity(dploma:IDploma|undefined,account:string) {
    switch (account) {
        case dploma?.dip_addr_certifier: return "CERTIFIER";
        case dploma?.dip_addr_certified: return "CERTIFIED";
        default: return "USER";
    }
}
