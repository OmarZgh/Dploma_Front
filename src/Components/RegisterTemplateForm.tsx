import {Button, FormControl, FormLabel, TextField} from "@mui/material";


interface props {
    onSubmit: () => void;
}
const RegisterTemplateForm = (props: props) => {
    const {onSubmit} = props
    return (
        <FormControl>
            <FormLabel>Enter Name</FormLabel>
            <TextField placeholder={"name"} type="text" size='small'/>
            <TextField placeholder={"name"} type="text" size='small'/>
            <TextField placeholder={"name"} type="text" size='small'/>
            <TextField placeholder={"name"} type="text" size='small'/>
            <TextField type="date"></TextField>
            <Button>Submit</Button>

        </FormControl>
    );
};

export default RegisterTemplateForm;
