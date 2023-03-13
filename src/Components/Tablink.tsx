import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Tabs, Tab, TabProps, Link, ListItemButton} from '@mui/material';

interface TabLinkProps extends Omit<TabProps, 'component'> {
    to: string;
    label: string;
}

function TabLink(props: TabLinkProps) {
    const {to, label, ...other} = props;
  return  <ListItemButton focusRipple={true} component={Link} alignItems={"center"} href={to} underline={"none"}>{label}</ListItemButton>
}

export default TabLink;
