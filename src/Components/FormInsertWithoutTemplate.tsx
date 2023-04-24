import React, { useState } from "react";
import {Button, FormControl, Container, TextField} from "@mui/material";
import {IDploma} from "../type";
import {useSmc} from "../hooks/useSmc";


interface FormValues {

    certifiedFirstName: string;
    certifiedLastName: string;
    certifiedBirthDate: Date;
    certifierName: string;
    certifierPhysicalAdress: string;
    certifiedPublicAdress: string;
    templateTitle: string;
    templateName: string;
    tempDate: Date;
    otherValues: string[];
}

interface props {
    onSubmit?: (values: FormValues) => void;
}
const FormWithoutTemplate = (props: props) => {
    const {onSubmit} = props
    const [formValues, setFormValues] = useState<IDploma>({
        dip_addr_certified: "",
        dip_addr_certifier: "",
        dip_certified:{cfied_firstname : "",cfied_lastname: "",cfied_birthdate: ""},
        dip_certifier:{cfier_name : "",cfier_adress: ""},
        dip_template:{temp_title:"", temp_name:"", temp_date:"", temp_speciality: []},

    });
    const {insertWithoutTemplate} = useSmc(undefined);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "otherValues") {
            const values = value.split(",");
            setFormValues(prevValues => ({...prevValues, [name]: values}));
        } else {
            setFormValues(prevValues => ({...prevValues, [name]: value}));
        }
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempDate = new Date(event.target.value);
        setFormValues(prevValues => ({...prevValues, tempDate}));
    };

    const handleBirthDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const certifiedBirthDate = new Date(event.target.value);
        setFormValues(prevValues => ({...prevValues, certifiedBirthDate}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        insertWithoutTemplate(formValues);
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center',  width: '100%' }}>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        required={true}
                        name="certifiedFirstName"
                        placeholder="Certified First Name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_certifier?.cfier_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="certifiedLastName"
                        placeholder="Certified Last Name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_certified?.cfied_lastname}
                        onChange={handleInputChange}
                    />
                    <text>Certified Birth Date</text>
                    <TextField
                        required={true}
                        name="certifiedBirthDate"
                        type="date"
                        sx={{ mt: 1 }}
                        value={formValues.dip_certified?.cfied_birthdate/*.toISOString().substring(0, 10)*/}
                        onChange={handleBirthDateChange}
                    />
                    <TextField
                        required={true}
                        name="certifierName"
                        placeholder="Certifier Name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_certifier?.cfier_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="certifierPhysicalAdress"
                        placeholder="Certifier Physical Adress"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_certifier?.cfier_adress}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="certifiedPublicAdress"
                        placeholder="Certified Public Adress"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_addr_certified}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="templateTitle"
                        placeholder="Template title"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_template?.temp_title}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="templateName"
                        placeholder="Template name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_template?.temp_name}
                        onChange={handleInputChange}
                    />
                    <text>Template Date</text>
                    <TextField
                        required={true}
                        name="tempDate"
                        type="date"
                        sx={{ mt: 1 }}
                        value={formValues.dip_template?.temp_date/*.toISOString().substring(0, 10)*/}
                        onChange={handleDateChange}
                    />
                    <TextField
                        required={true}
                        name="otherValues"
                        placeholder="Specs separated by comma ','"
                        type="text"
                        size="small"
                        multiline
                        sx={{ mt: 1 }}
                        value={formValues.dip_template?.temp_speciality/*.toString()*/}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Register</Button>
                </FormControl>
            </form>
        </Container>
    );
};

export default FormWithoutTemplate;
