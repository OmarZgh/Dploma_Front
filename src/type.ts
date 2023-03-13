export type IDploma= {
    dip_addr_certified?: string
    dip_addr_certifier?: string
    dip_cedrtifier?: ICertifier
    dip_certified?: ICertified
    dip_template?: ITemplate
}


export type ICertifier ={
    cfier_name?: string
    cfier_adress?: string

}

export type ICertified ={
    cfied_firstname?: string
    cfied_lastname?: string
    cfied_birthdate?: string
}

export interface ITemplate {
    temp_title?: string
    temp_name?: string
    temp_date?: string
    temp_speciality?: string[]
}
