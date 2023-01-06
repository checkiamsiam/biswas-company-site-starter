import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import securtyImage from "../../assets/images/protect.png";
import Image from "next/image";
import { Box } from "@mui/system";
import {
  AiOutlineDatabase,
  AiOutlineCloudServer,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

const CyberSecurity = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ p: "70px" }}>
        <Grid item lg={6} md={12} xs={12} sx={{ px: 3 }}>
          <Typography
            component="p"
            sx={{ color: "#e21f36", fontWeight: "600", mb: 3 }}
          >
            Cyber Security Protect
          </Typography>
          <Typography
            sx={{ fontSize: "30px", fontWeight: "700" }}
            component="h4"
            variant="h4"
          >
            Protect Your Website, Web Server, and Web Application for Helping
            You Being Threats From The Hacker
          </Typography>
          <Grid container sx={{ my: 3 }} spacing={4}>
            <Grid item lg={6} md={12} xs={12}>
              <Card
                sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  padding: "22px",
                  ":before": {
                    content: `""`,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    
                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", color: "#e21f36" }}
                  component="h3"
                  variant="h3"
                >
                  <AiOutlineDatabase />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Database Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "gray",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                  do.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Card
                sx={{
                  backgroundColor: "#e21f36",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  padding: "22px",
                  ":before": {
                    content: `""`,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    
                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", color: "white" }}
                  component="h3"
                  variant="h3"
                >
                  <MdOutlineSecurity />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Database Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "white",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                  do.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Card
                sx={{
                  backgroundColor: "#e21f36",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  padding: "22px",
                  ":before": {
                    content: `""`,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", color: "white" }}
                  component="h3"
                  variant="h3"
                >
                  <AiOutlineCloudServer />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Web Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "white",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                  do.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Card
                sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  padding: "22px",
                  ":before": {
                    content: `""`,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    
                    borderRadius: "inherit",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", color: "#e21f36" }}
                  component="h3"
                  variant="h3"
                >
                  <AiOutlineSecurityScan />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Server Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "center",
                    py: 1,
                    color: "gray",
                  }}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                  do.
                </Typography>
              </Card>
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
