import { Button, Link, useTheme, Hidden, IconButton , Stack , Container } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/images/My project.png";
import HeaderHambergerBody from "./HeaderHambergerBody";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const HeaderMain = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: theme.palette.primary.main,
        py: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" paddingY={1}>
          <Image src={logo} alt="logo" height="60" width="60" />
          <Link
            href="#"
            underline="none"
            color={theme.palette.textColorForBgSecondary.lightWhite}
            sx={{ cursor: "pointer", fontSize: "35px", fontWeight: 700 , transition: ".4s", ":hover": { color: theme.palette.textColorForBgSecondary.main } }}
          >
            Biswas
          </Link>
        </Stack>
        <Hidden mdDown>
          <Stack direction="row" spacing={{ lg: 8, md: 2 }} justifyContent="center" alignItems="center" paddingY={1}>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{ cursor: "pointer", fontSize: "20px", transition: ".4s", ":hover": { color: theme.palette.textColorForBgSecondary.main } }}
            >
              Home
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{ cursor: "pointer", fontSize: "20px", transition: ".4s", ":hover": { color: theme.palette.textColorForBgSecondary.main } }}
            >
              About us
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{ cursor: "pointer", fontSize: "20px", transition: ".4s", ":hover": { color: theme.palette.textColorForBgSecondary.main } }}
            >
              Services
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{ cursor: "pointer", fontSize: "20px", transition: ".4s", ":hover": { color: theme.palette.textColorForBgSecondary.main } }}
            >
              Team
            </Link>
            <Link
              href="#"
              underline="none"
              color={theme.palette.textColorForBgSecondary.lightWhite}
              sx={{ cursor: "pointer", fontSize: "20px", transition: ".4s", ":hover": { color: theme.palette.textColorForBgSecondary.main } }}
            >
              Contact
            </Link>
          </Stack>
        </Hidden>
        <Hidden mdDown>
          <Stack>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                py: "15px",
                transition: ".4s",
                px: "65px",
                ":hover": {
                  backgroundColor: "#FF5A00",
                },
              }}
            >
              Get Us
            </Button>
          </Stack>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Hamburger color={theme.palette.textColorForBgSecondary.lightWhite} toggled={open} toggle={setAnchorEl} />
          </IconButton>
        </Hidden>
      </Stack>
      <HeaderHambergerBody anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Container>
  );
};

export default HeaderMain;
