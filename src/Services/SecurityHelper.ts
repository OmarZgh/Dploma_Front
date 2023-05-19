import {IDploma} from "../Type/type";

export function checkKeyIntegrity(accessKeyRef: string) {

    let regex = new RegExp("^[a-zA-Z0-9]*$");
    let size = accessKeyRef.length;
    const isMatch = regex.test(accessKeyRef);
    if (!isMatch && size <29 && size >32) {
        return false;
    }
    else return true;
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
