import {IDploma} from "../type";
import {useState} from "react";

export function checkKeyIntegrity(accessKeyRef: string) {
    //TODO :check length
    //TODO :check NoSpace
    //TODO :Check type Character
    return true;
}

export type Rights = "CERTIFIER" | "CERTIFIED" | "USER" | "CERTIFIED&CERTIFIER" | "NONE"

export function checkRightsIntegrity(dploma: IDploma | undefined, account: string) {

    if (dploma?.dip_addr_certified?.toLowerCase().includes(account) && dploma?.dip_addr_certifier?.toLowerCase().includes(account)) {
        return "CERTIFIED&CERTIFIER"
    } else if (dploma?.dip_addr_certifier?.toLowerCase().includes(account)) {
        return "CERTIFIER"
    } else if (dploma?.dip_addr_certified?.toLowerCase().includes(account)) {
        return "CERTIFIED"
    }
    else {
        return "USER"
    }

}
