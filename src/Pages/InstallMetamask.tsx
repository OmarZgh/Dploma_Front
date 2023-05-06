import {Button, ButtonBaseActions, Container, Typography} from "@mui/material";
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

    return (< Container >

        <Box>
            <Typography variant={"h4"} sx={{m:3}}>In order to access all of Dploma's features you will need to install the
                Metamask</Typography>
            <Button color={"primary"} variant={"outlined"} onClick={event => handleClick(event)}>Install Metamask</Button>
        </Box>

    </Container>)
}
export default InstallMetamask
