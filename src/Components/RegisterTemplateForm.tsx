
import {Button, FormControl, Container, TextField, Paper} from "@mui/material";
import {ReactNode, useState} from "react";
import {ITemplate} from "../type";
import {useSmc} from "../hooks/useSmc";


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
    const [formValues, setFormValues] = useState<ITemplate>({
        temp_title:"", temp_name:"", temp_date:"", temp_speciality: [],
    });

    const {insertTemplate} = useSmc(undefined);
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
       insertTemplate(formValues);
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
                        value={formValues.temp_title}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required={true}
                        name="templateName"
                        placeholder="Template name"
                        type="text"
                        size="small"
                        sx={{ mt: 1 }}
                        value={formValues.temp_name}
                        onChange={handleInputChange}
                    />
                    <text>Template Date</text>
                    <TextField
                        required={true}
                        name="date"
                        type="date"
                        sx={{ mt: 1 }}
                        value={formValues.temp_date/*.toISOString().substring(0, 10)*/}
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
                        value={formValues.temp_speciality/*.toString()*/}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Register</Button>
                </FormControl>
            </form>
        </Container>
    );
};
export default RegisterTemplateForm;
