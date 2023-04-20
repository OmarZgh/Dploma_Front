import React, { useState } from "react";
import {Button, FormControl, Container, TextField} from "@mui/material";


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
    onSubmit: (values: FormValues) => void;
}
const RegisterTemplateProvider = (props: props) => {
    const {onSubmit} = props
    const [formValues, setFormValues] = useState<FormValues>({
        certifiedFirstName: "",
        certifiedLastName: "",
        certifiedBirthDate: new Date(),
        certifierName: "",
        certifierAdress: "",
        hashTemplate: "",
        certifiedPublicAdress: "",
    });
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
        onSubmit(formValues);
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
                        value={formValues.certifiedFirstName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="certifiedLastName"
                        placeholder="Certified Last Name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.certifiedLastName}
                        onChange={handleInputChange}
                    />
                    <text>Certified Birth Date</text>
                    <TextField
                        required={true}
                        name="certifiedBirthDate"
                        type="date"
                        sx={{ mt: 1 }}
                        value={formValues.certifiedBirthDate.toISOString().substring(0, 10)}
                        onChange={handleBirthDateChange}
                    />
                    <TextField
                        required={true}
                        name="certifierName"
                        placeholder="Certifier Name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.certifierName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="certifierAdress"
                        placeholder="Certifier Adress"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.certifierAdress}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="hashTemplate"
                        placeholder="Hash Template"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.hashTemplate}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="certifiedPublicAdress"
                        placeholder="Certified Public Adress"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.certifiedPublicAdress}
                        onChange={handleInputChange}
                    />

                    <Button type="submit">Register</Button>
                </FormControl>
            </form>
        </Container>
    );
};

export default RegisterTemplateProvider;
