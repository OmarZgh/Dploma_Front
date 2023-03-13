import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab, {TabProps} from '@mui/material/Tab';

import Box from '@mui/material/Box';
import {Link, Outlet} from "react-router-dom";
import TabLink from "../Components/Tablink";


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
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}



export default function TabsLayout() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                    <TabLink label="Find and Explort" to="/find"/>
                    <TabLink label="Register" to="/modify"/>
                    <TabLink label="Modify" to="/"/>
                </Tabs>
            </Box>¨
            <Outlet/>
        </Box>
    );
}
