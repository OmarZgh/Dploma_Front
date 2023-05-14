import {
    addTemplate,
    changeVisibility, deleteCertif,
    getDploma,
    insertWithoutTemplate,
    insertWithTemplate, updateTemplate,
} from "../Services/Web3APi";
import {useEffect, useState} from "react";
import {IDploma, ITemplate} from "../type";


const fetchWeb3 = async (id?: string | undefined) => {
    return id! ? await getDploma(id).then((res: IDploma) => {
        const certif: IDploma = res
        return certif
    }) : undefined
}

export const insertTemplate = async (template: ITemplate) => {
    return addTemplate(template.temp_title!, template.temp_name!, template.temp_date!, template.temp_speciality!)

}

export const updateTemp = (template: ITemplate, hash: string) => {
    return updateTemplate(hash, template.temp_title!, template.temp_name!, template.temp_date!, template.temp_speciality!)
}
export const createWithoutTemplate = (certifiedFirstName: string,
                                      certifiedLastName: string,
                                      certifiedBirthDate: string,
                                      certifierName: string,
                                      certifierPhysicalAdress: string,
                                      certifiedPublicAdress: string,
                                      templateTitle: string,
                                      templateName: string,
                                      tempDate: string,
                                      otherValues: string[]) => {
    return insertWithoutTemplate(certifiedFirstName, certifiedLastName, certifiedBirthDate, certifierName, certifierPhysicalAdress, certifiedPublicAdress, templateTitle, templateName, tempDate, otherValues)

}
export const createWithTemplate = (cfiedfirstname: string,
                                   cfiedLastname: string,
                                   cfiedBirthdate: string,
                                   cfierName: string,
                                   cfierPhysicalAdress: string,
                                   hashTemplate: string,
                                   certifiedPubAdress: string,) => {
    return insertWithTemplate(cfiedfirstname, cfiedLastname, cfiedBirthdate, cfierName, cfierPhysicalAdress, hashTemplate, certifiedPubAdress)
}
export const deleteCertification = (hash: string) => {

  return deleteCertif(hash)
}


export const toggleVisibility = (hash: string) => {
    return  changeVisibility(hash)

}

export const useSmc = (props: { id: string } | undefined) => {
    const id = props?.id
    const [certification, setCertification] = useState<IDploma>()

    useEffect(() => {
        const fetchDploma = async () => {
            setCertification(await fetchWeb3(id))
        }
        fetchDploma()
    }, [])


    return {
        certification,
        fetchWeb3: fetchWeb3,
        insertWithTemplate,
        insertWithoutTemplate,
        updateTemplate: updateTemp
    }
}




