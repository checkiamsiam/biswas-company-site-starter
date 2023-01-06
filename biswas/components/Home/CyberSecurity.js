import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import securtyImage from "../../assets/images/protect.png";
import Image from "next/image";
import { Box } from "@mui/system";
import { AiOutlineDatabase,AiOutlineCloudServer } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";



const CyberSecurity = () => {
  return (
    <Container maxWidth="xl" >
      <Grid container spacing={2} sx={{ p: "70px" }}>
        <Grid item lg={6} md={12} xs={12} sx={{px:3}}>
          <Typography
            component="p"
            sx={{ color: "#e21f36", fontWeight: "600",mb:3 }}
          >
            Cyber Security Protect
          </Typography>
          <Typography sx={{fontSize:"30px",fontWeight:"700"}} component="h4" variant="h4" >
          Protect Your Website, Web Server, and Web Application for Helping You Being Threats From The Hacker
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={6} md={12} xs={12} >
                <Typography>

                </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12} >

            </Grid>
            <Grid item lg={6} md={12} xs={12} >

            </Grid>
            <Grid item lg={6} md={12} xs={12} >

            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Box>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={securtyImage}
              alt="securtyImage"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CyberSecurity;
