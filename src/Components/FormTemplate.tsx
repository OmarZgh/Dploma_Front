import {Button, Container, FormControl, IconButton, LinearProgress, Paper, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {ITemplate, RequestQueryStatus} from "../type";
import {insertTemplate, useSmc} from "../hooks/useSmc";
import LinearBuffer from "./LinearBuffer";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface FormValues {
    name: string;
    templateTitle: string;
    templateName: string;
    temp_date: string;
    otherValues: string[];


}

interface props {
    onSubmit?: (values: FormValues) => void;
    hash?: string;

    setTemplate?: (values: ITemplate) => void;
    template?: ITemplate;
    disabled?: boolean;
}

const FormTemplate = (props: props) => {
        const {disabled,setTemplate} = props
        const {NONE, LOADING, SUCCESS, ERROR} = RequestQueryStatus
        const [requestStatus, setRequestStatus] = useState<RequestQueryStatus>(NONE);
        const [response, setResponse] = useState<string>("")
        const [formValues, setFormValues] = useState<ITemplate>({
            temp_title: "", temp_name: "", temp_date: "", temp_spec: [],
        });


        const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const {name, value} = event.target;
            if (name === "temp_speciality") {
                const values = value.split(",");
                setFormValues(prevValues => ({...prevValues, [name]: values}));
            } else {
                setFormValues(prevValues => ({...prevValues, [name]: value}));
            }
            if(setTemplate) {
                setTemplate(formValues);
            }
        };

        const handleDateChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const date = new Date(event.target.value).toDateString();
            setFormValues(prevValues => ({...prevValues, date}));
            if (setTemplate) {

            }
        };
        useEffect(() => {
            if (setTemplate) {
                setTemplate(formValues)
            }
        }, [formValues])
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setRequestStatus(LOADING)
            insertTemplate(formValues).then((res) => {
                setRequestStatus(SUCCESS);

                setResponse(res.events.evtTemplate.returnValues[1])
            }).catch((err) => {
                setRequestStatus(ERROR);
            })
        };

        const handleCopy = () => {
            navigator.clipboard.writeText(response)
        }

        useEffect(() => {
            renderContent()
        }, [requestStatus])
        const renderContent = () => {
            switch (requestStatus) {
                case LOADING:
                    return <div style={{display: "flex"}}>
                        <LinearBuffer/>
                    </div>;
                case SUCCESS:
                    return <div><Paper variant={"outlined"}><Typography variant={"h5"}>Hash Template</Typography><Typography
                        noWrap={true}>{response}</Typography>
                        <IconButton>
                            <ContentCopyIcon color="secondary" onClick={handleCopy}/>
                        </IconButton>
                    </Paper></div>;
                case ERROR:
                    return <div>Error</div>;
                default:
                    return (<form onSubmit={handleSubmit}>
                        <FormControl sx={{width: '100%'}}>
                            <TextField
                                required={true}
                                name="temp_title"
                                placeholder="Template title"
                                type="text"
                                size="small"
                                sx={{mt: 1}}
                                onChange={event => handleInputChange(event)}

                            />
                            <TextField
                                required={true}
                                name="temp_name"
                                placeholder="Template name"
                                type="text"
                                size="small"
                                sx={{mt: 1}}

                                onChange={event => handleInputChange(event)}
                            />
                            <text>Template Date</text>
                            <TextField
                                required={true}
                                name="temp_date"
                                type="date"
                                sx={{mt: 1}}

                                onChange={event => handleDateChange(event)}
                            />
                            <TextField
                                required={true}
                                name="temp_speciality"
                                placeholder="Specs separated by comma ','"
                                type="text"
                                size="small"
                                multiline
                                sx={{mt: 1}}

                                onChange={event => handleInputChange(event)}
                            />
                            {disabled ? <></> :    <Button variant="contained" sx={{mt: 1}} type="submit">Submit</Button>}
                        </FormControl>
                    </form>)

            }

        }

        return (
            <Container sx={{justifyContent: 'center', width: '100%', p: 3}}>
                <div style={{padding: 5}}>
                    {renderContent()}</div>
            </Container>
        );
    }
;
export default FormTemplate;
