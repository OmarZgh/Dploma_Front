import {IDploma} from "../type";
import Box from "@mui/material/Box";
import {Divider, Grid, Paper, Typography} from "@mui/material";

interface DisplayDiplomaProps {
    diplomas?: IDploma
}

const DisplayDiploma = (props: DisplayDiplomaProps) => {
    const {diplomas} = props

    return (
        <Box sx={{m: 5, p: 3, display: "-ms-flexbox"}}>
            {diplomas! ? (
                    <Grid container={true}>
                        <Grid item={true} xs={12} md={6}>
                            <Paper sx={{mt: 1, p: 3, display: "box"}}>
                                <Typography variant={"h3"} color={"primary"} align={"left"}>Certifier</Typography>
                                <Divider/>
                                <Typography align={"left"} color={"primary"}><strong>Public address
                                    :</strong> {diplomas?.dip_addr_certifier}
                                </Typography>
                                <Typography align={"left"} color={"primary"}><strong>Name
                                    :</strong> {diplomas?.dip_cedrtifier?.cfier_name}
                                </Typography>
                                <Typography align={"left"} color={"primary"}><strong>Physical address
                                    :</strong> {diplomas?.dip_cedrtifier?.cfier_adress}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Paper sx={{m: 1, p: 3}}>
                                <Typography variant={"h3"} color={"primary"} align={"left"}>Certified</Typography>
                                <Divider/>
                                <Typography align={"left"} color={"primary"}><strong>Public address
                                    :</strong> {diplomas?.dip_addr_certified}
                                </Typography>
                                <Typography align={"left"} color={"primary"}><strong>Name
                                    :</strong> {diplomas?.dip_certified?.cfied_firstname}
                                </Typography>
                                <Typography align={"left"}><strong>Birthdate
                                    :</strong> {diplomas?.dip_certified?.cfied_birthdate}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Paper sx={{m: 1, p: 3}}>
                                <Typography variant={"h3"} align={"left"}>Diploma</Typography>
                                <Divider/>
                                <Typography align={"left"}><strong>Name :</strong>
                                </Typography>
                                <Typography align={"left"}>{diplomas?.dip_template?.temp_name}
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
                            </Paper>

                        </Grid>
                    </Grid>


                )
                : "No diplomas found"}
        </Box>
    )
}

export default DisplayDiploma
