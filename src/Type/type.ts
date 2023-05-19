export type IDploma= {
    certAddrCertified?: string
    certAddrCertifier?: string |undefined
    certCertifier?: ICertifier
    certCertified?: ICertified
    certTemplate?: ITemplate,

}


export type ICertifier ={
    cfierName?: string
    cfierPhysicalAddress?: string

}

export type ICertified ={
    cfiedFirstname?: string
    cfiedLastname?: string
    cfiedBirthdate?: string
}

export interface ITemplate {
    tempTitle?: string
    tempName?: string
    tempDate?: number
    tempSpecs?: string[]
}

export  enum RequestQueryStatus  {
    LOADING,
    SUCCESS,
    ERROR,
    NONE,
}
