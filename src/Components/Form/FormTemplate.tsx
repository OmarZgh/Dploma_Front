import {Button, Container, FormControl, IconButton, Paper, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {ITemplate, RequestQueryStatus} from "../../Type/type";
import {insertTemplate} from "../../hooks/useSmc";
import LinearBuffer from "../LinearBuffer";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


interface FormValues {
    name: string;
    templateTitle: string;
    templateName: string;
    temp_date: number;
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
            tempTitle: "", tempName: "", tempDate: 0, tempSpecs: [],
        });


        const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const {name, value} = event.target;
            if (name === "tempSpec") {
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
            const date = new Date(event.target.value).getDate();
            setFormValues(prevValues => ({...prevValues,tempDate: date}));

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
                                name="tempTitle"
                                placeholder="Template title"
                                type="text"
                                size="small"
                                sx={{mt: 1}}
                                onChange={event => handleInputChange(event)}

                            />
                            <TextField
                                required={true}
                                name="tempName"
                                placeholder="Template name"
                                type="text"
                                size="small"
                                sx={{mt: 1}}

                                onChange={event => handleInputChange(event)}
                            />
                            <Typography>Template Date</Typography>
                            <TextField
                                required={true}
                                name="tempDate"
                                type="date"
                                sx={{mt: 1}}

                                onChange={event => handleDateChange(event)}
                            />
                            <TextField
                                required={true}
                                name="tempSpec"
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
