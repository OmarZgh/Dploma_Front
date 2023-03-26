import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useWeb3} from "../hooks/Hooks";
import FindAndExplore from "../Pages/FindAndExplore.Component";
import ModifyAndDelete from "../Pages/ModifyAndDelete";
import Register from "../Pages/Register";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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

   const  {connect,connected}= useWeb3()

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Find and Explore" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                    <Tab label="Modify" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <FindAndExplore/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ModifyAndDelete/>
            </TabPanel>
        </Box>
    );
}
