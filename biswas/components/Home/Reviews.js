import { Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import style from "../../styles/home.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Reviews = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      className={style.setBgInReview}
      sx={{
        my: { md: 10, xs: 0 },
        py: { md: 10, xs: 5 },
      }}
    >
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize="15px">
        Honest Reviews
      </Typography>
      <Typography textAlign="center" color={theme.palette.textColorForBgSecondary.main} fontWeight="700" fontSize={{ md: "40px", xs: "25px" }}>
        See What Our Clients Says
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
        <IconButton>
          <Stack
            alignItems="center"
            justifyContent="center"
            padding={1}
            borderRadius="50%"
            border={`1px solid ${theme.palette.textColorForBgSecondary.main}`}
            sx={{
              transition: ".3s ease-in-out",
              ":hover": {
                border: `1px solid ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            <KeyboardDoubleArrowLeftIcon sx={{ color: theme.palette.textColorForBgSecondary.main, fontSize: "30px" }} />
          </Stack>
        </IconButton>
        <div>slider Main</div>
        <IconButton>
          <Stack
            alignItems="center"
            justifyContent="center"
            padding={1}
            borderRadius="50%"
            border={`1px solid ${theme.palette.textColorForBgSecondary.main}`}
            sx={{
              transition: ".3s ease-in-out",
              ":hover": {
                border: `1px solid ${theme.palette.secondary.main}`,
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            <KeyboardDoubleArrowRightIcon sx={{ color: theme.palette.textColorForBgSecondary.main, fontSize: "30px" }} />
          </Stack>
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Reviews;
