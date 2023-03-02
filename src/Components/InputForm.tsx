import {Input} from "@mui/material";

interface props {
    label: string;
    value: string;
}

const InputForm = (props: props) => {
    const{label, value} = props;
    return(
        <>
            <label>{label}</label>
            <Input></Input>
        </>
    )
}

export default InputForm
