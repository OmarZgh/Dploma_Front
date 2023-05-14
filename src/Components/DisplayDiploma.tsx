import {IDploma} from "../type";
import Box from "@mui/material/Box";
import {Divider, Grid, Paper, Typography} from "@mui/material";

interface DisplayDiplomaProps {
    diplomas?: IDploma
}

const DisplayDiploma = (props: DisplayDiplomaProps) => {
    const {diplomas} = props

    return (
        <Box sx={{mt: 2}}>
            {diplomas! ? (
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6}>

                            <Typography variant={"h3"} color={"primary"} align={"left"}>Certifier</Typography>
                            <Divider/>
                            <Typography noWrap={true} align={"left"} color={"primary"}><strong>Public address
                                :</strong> {diplomas?.dip_addr_certifier}
                            </Typography>
                            <Typography noWrap={true} align={"left"} color={"primary"}><strong>Name
                                :</strong> {diplomas?.dip_certifier?.cfier_name}
                            </Typography>
                            <Typography noWrap={true} align={"left"} color={"primary"}><strong>Physical address
                                :</strong> {diplomas?.dip_certifier?.cfier_adress}</Typography>

                        </Grid>
                        <Grid item={true} xs={12} md={6}>

                            <Typography variant={"h3"} color={"primary"} align={"left"}>Certified</Typography>
                            <Divider/>
                            <Typography noWrap={true} align={"left"} color={"primary"}><strong>Public address
                                :</strong> {diplomas?.dip_addr_certified}
                            </Typography>
                            <Typography align={"left"} color={"primary"}><strong>First name
                                :</strong> {diplomas?.dip_certified?.cfied_firstname}
                            </Typography>
                            <Typography align={"left"} color={"primary"}><strong>First name
                                :</strong> {diplomas?.dip_certified?.cfied_lastname}
                            </Typography>
                            <Typography align={"left"}><strong>Birthdate
                                :</strong> {diplomas?.dip_certified?.cfied_birthdate}</Typography>

                        </Grid>
                        <Grid item={true} xs={12} md={6}>

                            <Typography variant={"h3"} align={"left"}>Diploma</Typography>
                            <Divider/>
                            <Typography align={"left"}><strong>Title :</strong>
                            </Typography>
                            <Typography align={"left"}>{diplomas?.dip_template?.temp_title}
                            </Typography>
                            <Typography align={"left"}><strong>Name :</strong> {diplomas?.dip_template?.temp_name}
                            </Typography>
                            <Typography align={"left"}><strong>Date :</strong> {diplomas?.dip_template?.temp_date}
                            </Typography>
                            <Typography align={"left"}><strong>Speciality
                                :</strong> {diplomas?.dip_template?.temp_speciality?.map((speciality, index) => {
                                return <div key={index}>{speciality}</div>
                            })}
                            </Typography>
                        </Grid>
                    </Grid>
                )
                : "No diplomas found"}
        </Box>
    )
}

export default DisplayDiploma
