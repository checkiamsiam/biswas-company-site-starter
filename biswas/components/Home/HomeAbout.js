import { Box, Container, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import aboutImage from "../../assets/images/StockSnap_MJZPCHLERD-compressed.jpg";
import Image from "next/image";
import { useState } from "react";

const HomeAbout = () => {
  const [tabValue, setTabValue] = useState("1");
  const theme = useTheme();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Stack direction="row">
        <Box width="50%">
          <Image style={{ width: "100%", height: "100%" }} src={aboutImage} alt="coding on laptop" />
        </Box>
        <Box width="50%" padding={3}>
          <Typography color={theme.palette.secondary.main} fontWeight={600}>
            About us
          </Typography>
          <Typography fontSize={30} fontWeight={500}>
            We are here for give you the best development services by well experienced and skilled developers.
          </Typography>
          <TabContext value={tabValue}>
            <TabList onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
              <Tab value="1" sx={{ fontWeight: 600, padding: 0, marginRight: 2 }} label="Experience" />
              <Tab value="2" sx={{ fontWeight: 600, padding: 0, marginRight: 2 }} label="Why We Best" />
              <Tab value="3" sx={{ fontWeight: 600, padding: 0, marginRight: 2 }} label="Our Steps" />
            </TabList>
            <TabPanel value="1"  sx={{padding: "0px" , marginTop: 2}}>
              <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit.
              </Typography>
            </TabPanel>
            <TabPanel value="2">sdf</TabPanel>
            <TabPanel value="3">sdf</TabPanel>
          </TabContext>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeAbout;
