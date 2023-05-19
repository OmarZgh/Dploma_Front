import React, {useState} from "react";
import {Button, FormControl, Container, TextField, Paper, Typography, IconButton} from "@mui/material";
import { RequestQueryStatus} from "../../Type/type";
import {createWithoutTemplate} from "../../hooks/useSmc";
import LinearBuffer from "../LinearBuffer";
import QRcode from "../QRcode";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";


interface FormValues {

    certifiedFirstName: string;
    certifiedLastName: string;
    certifiedBirthDate: string;
    certifierName: string;
    certifierPhysicalAdress: string;
    certifiedPublicAdress: string;
    templateTitle: string;
    templateName: string;
    tempDate: number;
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
            tempDate: 0,
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
            console.log(event.target.value)
            const tempDate = Math.round(new Date(event.target.value).getTime() / 1000)
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
    const handleCopy = () => {
        navigator.clipboard.writeText(response)
    }

        const renderContent = () => {
            switch (requestStatus) {
                case LOADING:
                    return <div style={{display: "flex"}}>
                        <LinearBuffer/>
                    </div>;
                case SUCCESS:
                    return <div><Paper variant={"outlined"} sx={{p:2}}><Typography variant={"h5"}>Hash Template</Typography><Typography
                        noWrap={true}>{response}</Typography>
                        <IconButton>
                            <ContentCopyIcon color="secondary" onClick={handleCopy}/>
                        </IconButton>
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
                            <Typography>Certified Birth Date</Typography>
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
                            <Typography>Template Date</Typography>
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
