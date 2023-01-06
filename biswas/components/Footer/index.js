import { Container, Grid, Stack, useTheme, Link, Typography, Box } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import RectangleIcon from "@mui/icons-material/Rectangle";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import style from "../../styles/home.module.css";
import logo from "../../assets/images/My project.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box className={style.setBgInFooter} sx={{ mt: 6 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={5} sx={{ py: 5 }}>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <Box>
              <Stack direction="row" alignItems="center">
                <Image src={logo} alt="logo" height="60" width="60" />
                <Link
                  href="#"
                  underline="none"
                  color={theme.palette.textColorForBgSecondary.lightWhite}
                  sx={{
                    cursor: "pointer",
                    fontSize: "35px",
                    fontWeight: 700,
                    transition: ".4s",
                    ":hover": { color: theme.palette.textColorForBgSecondary.main },
                  }}
                >
                  Biswas
                </Link>
              </Stack>
              <Typography color={theme.palette.textColorForBgSecondary.main} marginY={1}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vitae ullam aliquam velit optio similique illum nisi obcaecati
                nesciunt, fugit quidem dolores, animi dolor at illo. Saepe iste sint ad?
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" paddingY={1}>
                <Link
                  href="#"
                  underline="none"
                  color={theme.palette.textColorForBgSecondary.main}
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    padding: 1,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                    transition: "0.4s ease-in-out",
                    ":hover": {
                      backgroundColor: theme.palette.secondary.main,
                      translate: "0 -2px",
                    },
                  }}
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color={theme.palette.textColorForBgSecondary.main}
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    padding: 1,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                    transition: "0.4s ease-in-out",
                    ":hover": {
                      backgroundColor: theme.palette.secondary.main,
                      translate: "0 -2px",
                    },
                  }}
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color={theme.palette.textColorForBgSecondary.main}
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    padding: 1,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                    transition: "0.4s ease-in-out",
                    ":hover": {
                      backgroundColor: theme.palette.secondary.main,
                      translate: "0 -2px",
                    },
                  }}
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color={theme.palette.textColorForBgSecondary.main}
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    padding: 1,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                    transition: "0.4s ease-in-out",
                    ":hover": {
                      backgroundColor: theme.palette.secondary.main,
                      translate: "0 -2px",
                    },
                  }}
                >
                  <FaTwitter />
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <Box>
              <Typography color={theme.palette.textColorForBgSecondary.lightWhite} sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
                Address
              </Typography>
              <hr />
              <Grid container sx={{ marginTop: 3 }} rowGap={2}>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <AddLocationAltIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon , Chadnimath , Jatrabari , Dhaka</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <MailIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>
                      <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                        issiam02415@gmail.com
                      </Link>{" "}
                      <br />
                      <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                        issiam02415@gmail.com
                      </Link>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneInTalkOutlinedIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography>
                      <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                        +955069969666
                      </Link>{" "}
                      <br />
                      <Link underline="hover" color={theme.palette.textColorForBgSecondary.lightWhite} href="">
                        +98563556555
                      </Link>
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <Box>
              <Typography color={theme.palette.textColorForBgSecondary.lightWhite} s sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
                Solution
              </Typography>
              <hr />
              <Grid container sx={{ marginTop: 3 }} rowGap={1}>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12} width={{ lg: "25%", md: "50%", xs: "100%" }}>
            <Box>
              <Typography color={theme.palette.textColorForBgSecondary.lightWhite} s sx={{ fontSize: "20px", fontWeight: 500, marginBottom: 1 }}>
                Resources
              </Typography>
              <hr />
              <Grid container sx={{ marginTop: 3 }} rowGap={1}>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <RectangleIcon sx={{ color: theme.palette.secondary.main }} />
                    <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>Kajigaon</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container maxWidth="xl">
        <Stack justifyContent="space-between" spacing={1} alignItems="center" sx={{ py: 2 }}>
          <Typography color={theme.palette.textColorForBgSecondary.lightWhite}>
            Copyright @2023 Biswas.
          </Typography>
          <Stack direction="row" spacing={2} color={theme.palette.textColorForBgSecondary.lightWhite}>
            <Link href="" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
              Privacy Policy
            </Link>
            <Link href="" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
              Terms & Conditions
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
