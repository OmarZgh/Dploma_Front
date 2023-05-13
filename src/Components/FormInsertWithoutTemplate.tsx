import React, {useState} from "react";
import {Button, FormControl, Container, TextField, Paper, Typography} from "@mui/material";
import {IDploma, RequestQueryStatus} from "../type";
import {createWithoutTemplate, useSmc} from "../hooks/useSmc";
import LinearBuffer from "./LinearBuffer";
import QRcode from "./QRcode";


interface FormValues {

    certifiedFirstName: string;
    certifiedLastName: string;
    certifiedBirthDate: string;
    certifierName: string;
    certifierPhysicalAdress: string;
    certifiedPublicAdress: string;
    templateTitle: string;
    templateName: string;
    tempDate: string;
    otherValues: string[];
}

interface props {
    onSubmit?: (values: FormValues) => void;
}

const FormWithoutTemplate = (props: props) => {
        const {onSubmit} = props
        const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
        const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
        const [response, setResponse] = useState<string>("")
        const [formValues, setFormValues] = useState<FormValues>({
            certifiedFirstName: "",
            certifiedLastName: "",
            certifiedBirthDate: "",
            certifierName: "",
            certifierPhysicalAdress: "",
            certifiedPublicAdress: "",
            templateTitle: "",
            templateName: "",
            tempDate: "",
            otherValues: []
        });


        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target;
            if (name === "otherValues") {
                const values = value.split(",");
                setFormValues(prevValues => ({...prevValues, [name]: values}));
            } else {
                setFormValues(prevValues => ({...prevValues, [name]: value}));
            }
        };

        const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const tempDate = new Date(event.target.value).toDateString();
            setFormValues(prevValues => ({...prevValues, tempDate}));
        };

        const handleBirthDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const certifiedBirthDate = new Date(event.target.value).toDateString();
            setFormValues(prevValues => ({...prevValues, certifiedBirthDate}));
        };

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setRequestStatus(LOADING)
            console.log(formValues)
            createWithoutTemplate(formValues.certifiedFirstName,
                formValues.certifiedLastName,
                formValues.certifiedBirthDate,
                formValues.certifierName,
                formValues.certifierPhysicalAdress,
                formValues.certifiedPublicAdress,
                formValues.templateTitle,
                formValues.templateName,
                formValues.tempDate,
                formValues.otherValues).then((res) => {
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
                                name="certifierPhysicalAdress"
                                placeholder="Certifier Physical Adress"
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
                            <TextField
                                required={true}
                                name="templateTitle"
                                placeholder="Template title"
                                type="text"
                                size="small"
                                sx={{mt: 1}}
                                onChange={handleInputChange}
                            />
                            <TextField
                                required={true}
                                name="templateName"
                                placeholder="Template name"
                                type="text"
                                size="small"
                                sx={{mt: 1}}
                                onChange={handleInputChange}
                            />
                            <text>Template Date</text>
                            <TextField
                                required={true}
                                name="tempDate"
                                type="date"
                                sx={{mt: 1}}
                                onChange={handleDateChange}
                            />
                            <TextField
                                required={true}
                                name="otherValues"
                                placeholder="Specs separated by comma ','"
                                type="text"
                                size="small"
                                multiline
                                sx={{mt: 1}}
                                onChange={handleInputChange}
                            />
                            <Button type="submit">Register</Button>
                        </FormControl>
                    </form>);

            }
        }
        return (
            <Container sx={{ justifyContent: 'center', width: '100%'}}>
                {renderContent()}
            </Container>
        );
    }
;

export default FormWithoutTemplate;
