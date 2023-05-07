import {Button, FormControl, Container, TextField, Paper} from "@mui/material";
import {useState} from "react";
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
    hash?: string;
}

const FormTemplate = (props: props) => {
    const {onSubmit, hash} = props
    const [formValues, setFormValues] = useState<ITemplate>({
        temp_title: "", temp_name: "", temp_date: "", temp_speciality: [],
    });

    const {insertTemplate, updateTemplate} = useSmc(undefined);
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {name, value} = event.target;
        if (name === "otherValues") {
            const values = value.split(",");
            setFormValues(prevValues => ({...prevValues, [name]: values}));
        } else {
            setFormValues(prevValues => ({...prevValues, [name]: value}));
        }
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const date = new Date(event.target.value).toDateString();
        setFormValues(prevValues => ({...prevValues, date}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        hash !== undefined ? updateTemplate(formValues, hash) :
            insertTemplate(formValues);
    };

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{width: '100%'}}>
                    <TextField
                        required={true}
                        name="templateTitle"
                        placeholder="Template title"
                        type="text"
                        size="small"
                        sx={{mt: 1}}

                        onChange={event => handleInputChange(event)}

                    />
                    <TextField
                        required={true}
                        name="templateName"
                        placeholder="Template name"
                        type="text"
                        size="small"
                        sx={{mt: 1}}

                        onChange={event => handleInputChange(event)}
                    />
                    <text>Template Date</text>
                    <TextField
                        required={true}
                        name="date"
                        type="date"
                        sx={{mt: 1}}

                        onChange={event => handleDateChange(event)}
                    />
                    <TextField
                        required={true}
                        name="otherValues"
                        placeholder="Specs separated by comma ','"
                        type="text"
                        size="small"
                        multiline
                        sx={{mt: 1}}

                        onChange={event => handleInputChange(event)}
                    />
                    <Button type="submit">Register</Button>
                </FormControl>
            </form>
        </Container>
    );
};
export default FormTemplate;
