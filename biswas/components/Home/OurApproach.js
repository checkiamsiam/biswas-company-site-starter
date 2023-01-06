import { Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import approachImg from "../../assets/images/approach.png";

const OurApproach = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        component="p"
        sx={{
          fontSize: "18px",
          color: "#e21f36",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Our Approach
      </Typography>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "40px",
          my: 2,
        }}
      >
        To Enhance Your Cyber Defences Expert <br /> Will Support
      </Typography>
      <Grid container spacing={5} >
        <Grid item lg={6} sx={{ my: 4 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={approachImg}
            alt=""
          />
        </Grid>
        <Grid item lg={6} sx={{my:4}}>
          <Typography
            component="h5"
            variant="h5"
            sx={{ fontWeight: 600, fontSize: "25px",marginBottom:"40px" }}
          >
            Without stopping for a moment we give you best technology experience
            discussing from our expertise to stop threats being theft or
            damaged.
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={6}>
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
                    borderRadius: "0",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  borderRadius:0,
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderLeft:"2px solid #e21f36"
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    
                  }}
                >
                  Trusted Partner
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    
                    py: 1,
                
                  }}
                  component="p"
                >
                  sed diam nonumy eirmod tempor invidunt ut labore et.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6}>
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
                    borderRadius: "0",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  borderRadius:0,
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderLeft:"2px solid #e21f36"
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    
                  }}
                >
                  Product Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    
                    py: 1,
                
                  }}
                  component="p"
                >
                  sed diam nonumy eirmod tempor invidunt ut labore et.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6}>
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
                    borderRadius: "0",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  borderRadius:0,
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderLeft:"2px solid #e21f36"
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    
                  }}
                >
                 System Security
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    
                    py: 1,
                
                  }}
                  component="p"
                >
                  sed diam nonumy eirmod tempor invidunt ut labore et.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6}>
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
                    borderRadius: "0",
                  },
                  ":hover": {
                    transition: "all 0.3s ease-in-out",
                    transform: `translateY(-5px)`,
                    boxShadow:  "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  borderRadius:0,
                  boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderLeft:"2px solid #e21f36"
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    
                  }}
                >
                  Operational Security

                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    
                    py: 1,
                
                  }}
                  component="p"
                >
                  sed diam nonumy eirmod tempor invidunt ut labore et.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurApproach;
