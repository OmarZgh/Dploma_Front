import {IDploma} from "../Type/type";
import Box from "@mui/material/Box";
import {Divider, Grid, Paper, Typography} from "@mui/material";

interface DisplayDiplomaProps {
    diplomas?: IDploma
}

const DisplayDiploma = (props: DisplayDiplomaProps) => {
    const {diplomas} = props
    const t:number=(diplomas?.certTemplate?.tempDate!)
    const timestamp = new Date(t*1000).toDateString()
    return (
        <Box sx={{mt: 2}}>
            {diplomas! ? (
                <Paper  sx={{p:10,borderRadius:3,m:2,mt:4}}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6}>

                            <Typography variant={"h3"} color={"secondary"} align={"left"}>Certifier</Typography>
                            <Divider/>
                            <Typography noWrap={true} align={"left"} color={"dark"}><strong>Public address
                                :</strong> {diplomas?.certAddrCertifier}
                            </Typography>
                            <Typography noWrap={true} align={"left"} color={"dark"}><strong>Name
                                :</strong> {diplomas?.certCertifier?.cfierName}
                            </Typography>
                            <Typography noWrap={true} align={"left"} color={"dark"}><strong>Physical address
                                :</strong> {diplomas?.certCertifier?.cfierPhysicalAddress!}</Typography>

                        </Grid>
                        <Grid item={true} xs={12} md={6}>

                            <Typography variant={"h3"} color={"secondary"} align={"left"} >Certified</Typography>
                            <Divider/>
                            <Typography noWrap={true} align={"left"} color={"dark"}><strong>Public address
                                :</strong> {diplomas?.certAddrCertified}
                            </Typography>
                            <Typography align={"left"} color={"dark"}><strong>First name
                                :</strong> {diplomas?.certCertified?.cfiedFirstname}
                            </Typography>
                            <Typography align={"left"} color={"dark"}><strong>First name
                                :</strong> {diplomas?.certCertified?.cfiedLastname}
                            </Typography>
                            <Typography align={"left"}><strong>Birthdate
                                :</strong> {diplomas?.certCertified?.cfiedBirthdate}</Typography>

                        </Grid>
                        <Grid item={true} xs={12} md={6}>

                            <Typography variant={"h3"} color={'secondary'}align={"left"}>Diploma</Typography>
                            <Divider/>
                            <Typography align={"left"}><strong>Title :</strong> {diplomas?.certTemplate?.tempTitle}
                            </Typography>
                            <Typography align={"left"}><strong>Name :</strong> {diplomas?.certTemplate?.tempName}
                            </Typography>
                            <Typography align={"left"}><strong>Date :</strong> {timestamp}
                            </Typography>
                            <div>
                                <Typography align={"left"}><strong>Speciality
                                    :</strong>

                                </Typography>
                                <ul style={{position:"absolute"}}>
                                    {diplomas?.certTemplate?.tempSpecs?.map((speciality, index) => {
                                            return <ol key={index}>{speciality}</ol>
                                        }
                                    )}</ul>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                )
                : "No diplomas found"}
        </Box>
    )
}

export default DisplayDiploma
