import React from 'react';
import {TabProps, Link, ListItemButton} from '@mui/material';

interface TabLinkProps extends Omit<TabProps, 'component'> {
    to: string;
    label: string;
}

function TabLink(props: TabLinkProps) {
    const {to, label, ...other} = props;
    return <ListItemButton focusRipple={true} component={Link} alignItems={"center"} href={to}
                           underline={"none"}>{label}</ListItemButton>
}

export default TabLink;
