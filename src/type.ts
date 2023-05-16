export type IDploma= {
    certAddrCertified?: string
    certAddrCertifier?: string |undefined
    certCedrtifier?: ICertifier
    certCertified?: ICertified
    certTemplate?: ITemplate, dip_hash?: string
}


export type ICertifier ={
    cfierName?: string
    cfierPhysicalAdress?: string

}

export type ICertified ={
    cfiedFirstname?: string
    cfiedLastname?: string
    cfiedBirthdate?: string
}

export interface ITemplate {
    tempTitle?: string
    tempName?: string
    tempDate?: string
    tempSpec?: string[]
}

export  enum RequestQueryStatus  {
    LOADING,
    SUCCESS,
    ERROR,
    NONE,
}
