import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useWeb3} from "../hooks/Hooks";

import InstallMetamask from "../Pages/InstallMetamask";
import Register from "../Pages/Register";
import Modification from "../Pages/Modification";
import {Outlet} from "react-router";
import {Route, Routes} from "react-router-dom";
import FindAndExplore from "../Pages/FindAndExplore";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const {metamasInstalled} = useWeb3()
    return (

        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 2, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Find and Explore" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                    <Tab label="Modify" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {/*pernmet de faire la lecture via QR code  de la certification avec l url suivant:
            exemple  http://localhost:3000/?id=0x9B454B54E056C0BD6B182B70145319402A030FB6E7A1B980D16341F33B473D8C
            */}
                <Routes>
                    <Route path={""} element={<FindAndExplore/>}>
                        <Route path={":id"} element={<FindAndExplore/>}/>
                    </Route>
                </Routes>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {metamasInstalled ? <Register/> : <InstallMetamask/>}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {metamasInstalled ? <Modification/> : <InstallMetamask/>}
            </TabPanel>
        </Box>
    );
}
