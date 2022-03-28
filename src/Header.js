import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { color } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import BodyTabs from './BodyTabs.js';



function Header() {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  let sx = {
    page:{
      boxShadow: 15,
    },
    Header: {
      // (Box) for the header of the page
      display: "flex",
      color: "white",
      borderEndStartRadius: "5px",
      borderEndEndRadius: "5px",
      width: "100%",
      height: 400,
      backgroundColor: "#527bff",
      
      // borderStartEndRadius:'20px'
    },
    HeaderImage: {
      borderRadius: "300px",
      width: "300px",
      height: "300px",
      marginTop: "50px",
      marginLeft: "40px",
      marginRight: "250px",
      boxShadow: 24,
    },
    HeaderText: {
      textAlign: "center",
      color: "#fcfeff",
      textTransform: "capitalize",
      fontSize: "40px",
      fontWeight: "bold",
      marginTop: "50px",
      marginLeft: "50px",
      
    },
    HeaderParegraph: {
      textAlign: "center",
      color: "#fcfeff",
      textTransform: "capitalize",
      fontSize:'20px',
      marginRight: "950px",
      marginLeft:'900px',
      margin:'100px',
      padding:'10px',
      paddingLeft:'150px',
      paddingRight:'80px',
    },
    Card: {
      paddingLeft: "20px",
      display: "flex",
      color: "white",
      borderRadius: "30px",
      width: "400px",
      
    },
    Box: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "gray",
      boxShadow: 24,
    },
  };

  return (
    <>
      <Card sx={sx.page}>
        {/******************* header *******************/}
        <Box sx={sx.Header}>
          <Box>
            <Stack spacing={2}>
              <Box sx={sx.HeaderText}>
                In this page you will see <br /> a list of my work <br />{" "}
                experience
              </Box>
              <Box sx={sx.HeaderParegraph}>
                I'm a Fresh Graduate with a Bachelor’s degree in Software
                Engineering. Eager for an opportunity to utilize my special set
                of skills, who doesn’t shy away from Challenges, experienced in
                working under Pressure, and genuinely interested in an
                opportunity to work with an organization like yours.
              </Box>
            </Stack>
          </Box>
          <Box>
            <CardMedia
              sx={sx.HeaderImage}
              component="img"
              image="http://res.cloudinary.com/dfq3j9tze/image/upload/v1648046194/qfv9lqo9vl6ya9ue2tx4.jpg"
            />
          </Box>
        </Box>
      </Card>
    </>
  );
}


export default Header;