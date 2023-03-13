import {IDploma} from "../type";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

interface DisplayDiplomaProps {
    diplomas?: IDploma
}

const DisplayDiploma = (props: DisplayDiplomaProps) => {
    const {diplomas} = props

    return (
        <Box sx={{m: 5 ,p:3}} >
            {diplomas! ? (
                    <>
                        <Typography variant={"h3"} align={"left"}>Certifier</Typography>
                        <Typography align={"left"}><strong>Public address :</strong> {diplomas?.dip_addr_certifier}
                        </Typography>
                        <Typography align={"left"}><strong>Name :</strong> {diplomas?.dip_cedrtifier?.cfier_name}
                        </Typography>
                        <Typography align={"left"}><strong>Physical address
                            :</strong> {diplomas?.dip_cedrtifier?.cfier_adress}</Typography>

                        <Typography variant={"h3"} align={"left"}>Certified</Typography>
                        <Typography align={"left"}><strong>Public address :</strong> {diplomas?.dip_addr_certified}
                        </Typography>
                        <Typography align={"left"}><strong>Name :</strong> {diplomas?.dip_certified?.cfied_firstname}
                        </Typography>
                        <Typography align={"left"}><strong>Birthdate
                            :</strong> {diplomas?.dip_certified?.cfied_birthdate}</Typography>

                        <Typography variant={"h3"} align={"left"}>Diploma</Typography>
                        <Typography align={"left"}><strong>Name :</strong> {diplomas?.dip_template?.temp_name}
                        </Typography>
                        <Typography align={"left"}><strong>Title :</strong> {diplomas?.dip_template?.temp_title}
                        </Typography>
                        <Typography align={"left"}><strong>Date :</strong> {diplomas?.dip_template?.temp_date}
                        </Typography>
                        <Typography align={"left"}><strong>Speciality
                            :</strong> {diplomas?.dip_template?.temp_speciality?.map((speciality, index) => {
                            return <div key={index}>{speciality}</div>
                        })}
                        </Typography>


                    </>


                )
                : "No diplomas found"}
        </Box>
    )
}

export default DisplayDiploma
