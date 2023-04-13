import {Button} from "@mui/material";

const RegisterTemplateForm = () => {
    return (
        <form>
            <label htmlFor="templateName">Nom du template :</label>
            <input type="text" id="templateName" name="templateName" />

            <label htmlFor="templateDescription">Description :</label>
            <textarea id="templateDescription" name="templateDescription"></textarea>

            <Button variant="contained" color="primary" type="submit">Enregistrer</Button>
        </form>
    );
};

export default RegisterTemplateForm;
