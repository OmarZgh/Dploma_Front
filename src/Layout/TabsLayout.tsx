import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import FindAndExplore from "../Pages/FindAndExplore.Component";
import FormLayout from "../Components/FormLayout";
import GetDplomaCard from "../Components/GetDplomaCard";
import InputForm from "../Components/InputForm";
import Register from "../Pages/Register";
import Modify from "../Pages/ModifyAndDelete";

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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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
                    <Tab label="Find and explore" {...a11yProps(0)} />
                    <Tab label="Register " {...a11yProps(1)} />
                    <Tab label="Modify & Delete" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <FindAndExplore/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Modify/>
            </TabPanel>
        </Box>
    );
}
