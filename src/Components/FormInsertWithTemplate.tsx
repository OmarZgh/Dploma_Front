import React, {useState} from "react";
import {Button, FormControl, Container, TextField, Paper, Typography} from "@mui/material";
import {createWithTemplate, useSmc} from "../hooks/useSmc";
import {IDploma, RequestQueryStatus} from "../type";
import LinearBuffer from "./LinearBuffer";
import QRcode from "./QRcode";


interface FormValues {
    certifiedFirstName: string;
    certifiedLastName: string;
    certifiedBirthDate: string;
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
    const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
    const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
    const [response, setResponse] = useState<string>("")
    const [formValues, setFormValues] = useState<FormValues>({
        certifiedFirstName: "",
        certifiedLastName: "",
        certifiedBirthDate: "",
        certifierName: "",
        certifierAdress: "",
        hashTemplate: "",
        certifiedPublicAdress: ""

    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues(prevValues => ({...prevValues, [name]: value}));
    };

    const handleBirthDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const certifiedBirthDate = new Date(event.target.value).toDateString();
        setFormValues(prevValues => ({...prevValues, certifiedBirthDate}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setRequestStatus(LOADING);
        createWithTemplate(formValues.certifiedFirstName,
            formValues.certifiedLastName,
            formValues.certifiedBirthDate,
            formValues.certifierName,
            formValues.certifierAdress,
            formValues.hashTemplate,
            formValues.certifiedPublicAdress).then((res) => {
                console.log(res)
                setRequestStatus(SUCCESS);
                setResponse(res.events.evtCertifCreation.returnValues[1])
            }
        ).catch((err) => {
            setRequestStatus(ERROR);
        });
    };
    const renderContent = () => {
        switch (requestStatus) {
            case LOADING:
                return <div style={{display: "flex"}}>
                    <LinearBuffer/>
                </div>;
            case SUCCESS:
                return <div><Paper variant={"outlined"}><Typography variant={"h5"}>Hash
                    certifcation</Typography><Typography
                    noWrap={true}>{response}</Typography>
                    <QRcode hash={response}/>

                </Paper></div>;
            case ERROR:
                return <div>Error</div>;
            default:
                return (<form onSubmit={handleSubmit}>
                    <FormControl sx={{width: '100%'}}>
                        <TextField
                            required={true}
                            name="certifiedFirstName"
                            placeholder="Certified First Name"
                            type="text"
                            size="small"
                            sx={{mt: 1}}
                            onChange={handleInputChange}
                        />
                        <TextField
                            required={true}
                            name="certifiedLastName"
                            placeholder="Certified Last Name"
                            type="text"
                            size="small"
                            sx={{mt: 1}}
                            onChange={handleInputChange}
                        />
                        <text>Certified Birth Date</text>
                        <TextField
                            required={true}
                            name="certifiedBirthDate"
                            type="date"
                            sx={{mt: 1}}
                            onChange={handleBirthDateChange}
                        />
                        <TextField
                            required={true}
                            name="certifierName"
                            placeholder="Certifier Name"
                            type="text"
                            size="small"
                            sx={{mt: 1}}

                            onChange={handleInputChange}
                        />
                        <TextField
                            required={true}
                            name="certifierAdress"
                            placeholder="Certifier Adress"
                            type="text"
                            size="small"
                            sx={{mt: 1}}

                            onChange={handleInputChange}
                        />
                        <TextField
                            required={true}
                            name="hashTemplate"
                            placeholder="Hash Template"
                            type="text"
                            size="small"
                            sx={{mt: 1}}
                            onChange={handleInputChange}
                        />
                        <TextField
                            required={true}
                            name="certifiedPublicAdress"
                            placeholder="Certified Public Adress"
                            type="text"
                            size="small"
                            sx={{mt: 1}}
                            onChange={handleInputChange}
                        />

                        <Button type="submit">Register</Button>
                    </FormControl>
                </form>)
        }
    }
    return (
        <Container sx={{ justifyContent: 'center', width: '100%'}}>
            {renderContent()}
        </Container>
    );
};

export default FormInsertWithTemplate;
