import React, { useState } from "react";
import {Button, FormControl, Container, TextField} from "@mui/material";


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
    const [formValues, setFormValues] = useState<FormValues>({
        certifiedFirstName: "",
        certifiedLastName: "",
        certifiedBirthDate: new Date(),
        certifierName: "",
        certifierPhysicalAdress: "",
        certifiedPublicAdress: "",
        templateTitle: "",
        templateName: "",
        tempDate: new Date(),
        otherValues: []
    });
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
        //onSubmit(formValues);
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
                        name="certifierPhysicalAdress"
                        placeholder="Certifier Physical Adress"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.certifierPhysicalAdress}
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
                    <TextField
                        required={true}
                        name="templateTitle"
                        placeholder="Template title"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.templateTitle}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="templateName"
                        placeholder="Template name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.templateName}
                        onChange={handleInputChange}
                    />
                    <text>Template Date</text>
                    <TextField
                        required={true}
                        name="tempDate"
                        type="date"
                        sx={{ mt: 1 }}
                        value={formValues.tempDate.toISOString().substring(0, 10)}
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
                        value={formValues.otherValues.toString()}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Register</Button>
                </FormControl>
            </form>
        </Container>
    );
};

export default FormWithoutTemplate;
