import { Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import style from "../../styles/home.module.css";
import logo from "../../assets/images/My project.png";
import MyButton from "../common/MyButton";

const HomeBanner = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" className={style.setBg} >
      <Stack direction="row" justifyContent="center" alignItems="center" minHeight="100vh"  sx={{ paddingTop: "150px" }}>
        <Stack width={{ lg: "50%", xs: "100%" }}>
          <Stack direction="row" justifyContent="center">
            <Image src={logo} height="100" width="100" alt="logo" />
          </Stack>
          <Typography textAlign="center" color={theme.palette.secondary.main} fontWeight="700" fontSize="15px">
            Top-Level Web Development
          </Typography>
          <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="800" fontSize={{ md: "50px", xs: "35px" }}>
            Modern Technologies and Real-Time Support
          </Typography>
          <Stack direction="row" justifyContent="center" marginTop="20px">
            <MyButton>Know More</MyButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeBanner;