import {Button, ButtonBaseActions, Typography} from "@mui/material";
import {ReactElement} from "react";
import Box from "@mui/material/Box";

const InstallMetamask = () => {
    const Style = {
        minHeight: "60vh",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
    }
    const handleClick = (e: any) => {
        window.open("https://metamask.io/download.html", "_blank")
    }

    return (<div style={Style}>
        <Box>
            <Typography variant={"h4"} sx={{m:3}}>Afin d'accéder à toute les fonctionanlité de Dploma il vous faudra installé l'extension
                Metamask</Typography>
        </Box>
        <Button color={"primary"} sx={{width:"60vh"}} variant={"outlined"} onClick={event => handleClick(event)}>Install Metamask</Button>
    </div>)
}
export default InstallMetamask
