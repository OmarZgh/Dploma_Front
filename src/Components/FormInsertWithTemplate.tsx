import React, { useState } from "react";
import {Button, FormControl, Container, TextField} from "@mui/material";
import {useSmc} from "../hooks/useSmc";
import {IDploma} from "../type";


interface FormValues {
    certifiedFirstName: string;
    certifiedLastName: string;
    certifiedBirthDate: Date;
    certifierName: string;
    certifierAdress: string;
    hashTemplate: string;
    certifiedPublicAdress: string;
}

interface props {
    onSubmit?: (values: FormValues) => void;
}
const FormInsertWithTemplate = (props: props) => {
    const {onSubmit} = props
    const [formValues, setFormValues] = useState<IDploma>({
        dip_addr_certified: "",
        dip_addr_certifier: "",
        dip_certifier:{cfier_name : "",cfier_adress: ""},
        dip_certified:{cfied_firstname : "",cfied_lastname: "",cfied_birthdate: ""},
        dip_hash: "",
    });

    const {insertWithTemplate} = useSmc(undefined);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({...prevValues, [name]: value}));
    };

    const handleBirthDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const certifiedBirthDate = new Date(event.target.value);
        setFormValues(prevValues => ({...prevValues, certifiedBirthDate}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        insertWithTemplate(formValues);
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
                        value={formValues.dip_certified?.cfied_birthdate/*toISOString().substring(0, 10)*/}
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
                        name="certifierAdress"
                        placeholder="Certifier Adress"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_certifier?.cfier_adress}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="hashTemplate"
                        placeholder="Hash Template"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.dip_hash}
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

                    <Button type="submit">Register</Button>
                </FormControl>
            </form>
        </Container>
    );
};

export default FormInsertWithTemplate;
