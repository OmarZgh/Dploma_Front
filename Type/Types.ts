//define here the value returns by API method
export interface Dploma {
    name: string;
}


export interface Certified {
    cfied_fisrtname: string,
    cfied_lastname: string,
    cfied_birthdate: string,
}

interface Certifier {
    cfier_name: string,
    cfier_adress: string,
}

interface Template {
    temp_tiltle:string,
    temp_name:string,
    temp_date:string,
    temps_spam:string[]
}

export interface Certification {
    dip_addr_certifier: string,
    dip_addr_certified: string,
    dip_certified: Certified
    dip_certifier: Certifier,
    dip_template:Template
}
