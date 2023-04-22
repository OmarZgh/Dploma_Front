
import {Button, FormControl, Container, TextField, Paper} from "@mui/material";
import {ReactNode, useState} from "react";


interface FormValues {
    name: string;
    templateTitle: string;
    templateName: string;
    date: Date;
    otherValues: string[];
}

interface props {
    onSubmit?: (values: FormValues) => void;
}
const RegisterTemplateForm = (props: props) => {
    const {onSubmit} = props
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        templateTitle: "",
        templateName: "",
        date: new Date(),
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
        const date = new Date(event.target.value);
        setFormValues(prevValues => ({...prevValues, date}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       // onSubmit(formValues);
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center',  width: '100%' }}>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ width: '100%' }}>
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
                        name="date"
                        type="date"
                        sx={{ mt: 1 }}
                        value={formValues.date.toISOString().substring(0, 10)}
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
export default RegisterTemplateForm;
