import React from "react";
import {Container, Theme, Typography} from "@mui/material";
import Box from "@mui/material/Box";

interface props {
    title: string,
    description: string,
    children?: React.ReactNode,
    backgroundColor?: string,
}
const formLayout = (props: props) => {
    const {children, title, description, backgroundColor} = props

    return (
        <Container fixed={true} >
            <Typography variant={"h2"} className="TitleFormLayout">{title}</Typography>
            <Typography variant={"h5"} className="SubTitleFormLayout">{description}</Typography>
            <Box className="DplomasFormLayout">{children}</Box>
        </Container>
    )
}

export default formLayout
