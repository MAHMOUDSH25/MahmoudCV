import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //  ********************* design *********************

  let sx = {
    Tabs: {
      width: "100%",
      bgcolor: "#bdbdbd",
      borderEndEndRadius: "30px",
      borderEndStartRadius: "30px",
      boxShadow: 15,
    },
    SkillOne: {
      marginRight: "1020px",
      textAlign: "center",
    },
    SkillTwo: {
      textAlign: "center",
    },
    SkillThree: {
      marginLeft: "1020px",
      textAlign: "center",
    },
  };

  return (
    <Box sx={sx.Tabs}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Technical Skills" {...a11yProps(0)} />
          <Tab label="Education & Certificates" {...a11yProps(1)} />
          <Tab label="Key Skills & Characteristics" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Stack sx={sx.SkillOne} spacing={2}>
            <Box>
              Advanced skills in Web development in HTML, CSS, JavaScript,
              Bootstrap, Nodejs, Reactjs, Git, and Github.
            </Box>
            <Box>
              Advanced skills in Mobile development using Flutter framework and
              Google Firebase in Visual Studio IDE.
            </Box>
            <Box>Advanced skills knowledge in using SQL commands.</Box>
            <Box>
              Advanced skills at using Adobe Photoshop to design web pages and
              user interface.
            </Box>
            <Box>
              Advanced skills at using Adobe Illustrator to make logos, icons,
              and illustrations to use them in my Web development and Mobile
              Applications.
            </Box>
            <Box>Advanced knowledge in React Native.</Box>
            <Box>Advanced knowledge in programing in Python.</Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Stack sx={sx.SkillTwo} spacing={2}>
            <Box>
              University of Petra Bachelor’s degree in Software engineering 2017
              – 2021.
            </Box>
            <Box>Flutter & Dart - The Complete Guide - Udemy / 2021.</Box>
            <Box>React Native - The Practical Guide - Udemy / 2021.</Box>
            <Box>
              Complete Python Bootcamp from Zero to Hero - Udemy / 2021.
            </Box>
            <Box>
              Adobe Photoshop CC - Advanced Training Course - Udemy / 2021.
            </Box>
            <Box>
              Master The Coding Interview Data Structure & Algorithms - Udemy /
              2021.
            </Box>
            <Box>
              Adobe Illustrator CC - Essentials Training Course - Udemy / 2021.
            </Box>
            <Box>Web Development – The complete guide – Udemy / 2021.</Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Stack sx={sx.SkillThree} spacing={2}>
            <Box>Fluent in Arabic and English.</Box>
            <Box>Excellent communication skills.</Box>
            <Box>Advanced Knowledge of Windows and Microsoft Suite.</Box>
            <Box>Creative and Imaginative.</Box>
            <Box>Can work under pressure.</Box>
            <Box>
              Constant desire to develop and sharpen my skills and capabilities.
            </Box>
            <Box>Research methodology.</Box>
            <Box>Service quality.</Box>
            <Box>Willing to relocate where needed.</Box>
            <Box>Valid driving license.</Box>
          </Stack>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
