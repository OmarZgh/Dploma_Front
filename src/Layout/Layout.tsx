import {ThemeProvider} from "@emotion/react";
import {AppBar, Button, createTheme, CssBaseline, Toolbar, Typography, Switch} from "@mui/material";
import TabsLayout from "./TabsLayout";
import {useState} from "react";

const Layout = (props: any) => {
    const theme = createTheme()
    const darkTheme = createTheme({
            palette: {
                primary: {
                    main: '#FFFFFF',
                },
                secondary: {
                    main: '#edf2ff',
                },
            },
        }
    )

const [toogleTheme, setChangeToogleTheme] = useState<boolean>(false)
const handleChange = () => {
    setChangeToogleTheme(!toogleTheme)
}
return (
    <ThemeProvider theme={toogleTheme ? theme : darkTheme}>
        <AppBar style={{display: "flex", flexDirection: "row"}} position="sticky">
            <Typography sx={{}} variant={"h2"} align={"left"}>Dploma</Typography>
            <Switch
                checked={toogleTheme}
                onChange={handleChange}
                inputProps={{'aria-label': 'controlled'}}
                color="warning"
            />
        </AppBar>
        <CssBaseline/>
        <TabsLayout/>
    </ThemeProvider>
)
}
export default Layout