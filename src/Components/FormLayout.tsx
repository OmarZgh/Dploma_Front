import React from "react";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

interface props {
    title: string,
    description: string,
    children?: React.ReactNode,
    backgroundColor?: string,
}

//Boost le design - utiliser ce composant pour les formulaires de chaque pages (Register, Modify, FindAndExplore)
const formLayout = (props: props) => {
    const {children, title, description, backgroundColor} = props
    return (
        <Container fixed={true}>
            <Typography variant={"h2"} align={"left"}>{title}</Typography>
            <Typography align={"left"}>{description}</Typography>
            <Box>{children}</Box>
        </Container>
    )
}

export default formLayout
