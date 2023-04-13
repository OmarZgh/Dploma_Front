import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Divider} from "@mui/material";

interface props {
    title: string;
    description: string;
    image?: string;
    link?: string;
    action?: () => boolean,
    children?: React.ReactNode;
    onClick: () => any;
}

const ButtonModal = (props: props) => {
    const {title, description, image, link, action,children} = props;

    return (
        <Card component={Button} fullWidth={true} sx={{maxWidth: 345}} onClick={props.onClick} style={{borderRadius: 20}}>
            <CardMedia
                sx={{height: 140}}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Divider/>
                <Typography  gutterBottom sx={{mb: 2,mt:1}} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <div>{children}</div>
            </CardContent>
        </Card>
    );
}

export default ButtonModal
