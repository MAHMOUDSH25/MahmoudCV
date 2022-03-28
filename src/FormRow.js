import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import "./imageHover.css";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  let sx = {
    imageSection: {
      marginLeft: "10000px",
    },
    ///////////// First Work exp
    image: {
      width: "300px",
      height: "600px",
      borderRadius: "20px",
      marginTop: "50px",
    },
    LeftOne: {
      paddingLeft: "40%",
    },
    Item: {
      fontSize: "15.2px",
      fontWeight: "bold",
      color: "black",
      boxShadow: 4,
    },
    ItemDesc: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "black",
      boxShadow: 24,
    },
    /////////// second Work exp
    RightOne:{
      paddingRight: "235px",
    },
    ImageTwo:{
      marginTop: "40px",
      paddingLeft: "260px",
    },
    ImageThree:{
      marginTop: "15px",
      paddingLeft: "260px",
    },
    ////////////////// Last one
    LastOne:{
      marginTop:"70px",
      paddingLeft: "40%",
    }
  };

  return (
    <>
      <React.Fragment>
        <Grid item xs={6}>
          <Box sx={sx.LeftOne}>
            <Item sx={sx.ItemDesc}>
            Capture Beauty. <br/>(My Idea).
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
             Description: The idea of this website is to ease the connection between photographers and customers and to help beginner photographers.                 
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Coordinated and managed team members tasks and activities.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Creatively Designed the Website interface and inner dynamics.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Developed the flow of events about how the Website will function.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Implemented the Back-End of the Website. 
            </Item>
            {/* <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Designed the Interface of the application.
            </Item> */}
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Tested the Website functional and non-functional
              requirements.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Fixed the bugs and issues in the Website.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Maintained the Website for future updates.
            </Item>
            <div style={{ paddingTop: "10px" }} />
          </Box>
        </Grid>
        <Grid sx={sx.image} item xs={6}>
          <img
            className="MainWebImage"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648202035/ffya9mmwin5vp20djtyl.png"
          />
          <br/>
          <img
            className="BottomWebImage"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648201947/iwjsx5sltmnkijeb6lon.png"
          />
        </Grid>
      </React.Fragment>


{/* https://res.cloudinary.com/dfq3j9tze/image/upload/v1648201860/axmshfekabutvack1azx.png   card */} 
{/* https://res.cloudinary.com/dfq3j9tze/image/upload/v1648201947/iwjsx5sltmnkijeb6lon.png   cbhp*/}
{/* https://res.cloudinary.com/dfq3j9tze/image/upload/v1648202035/ffya9mmwin5vp20djtyl.png   CBMS */}




      <React.Fragment>
        <Grid  item xs={5}>
        <Box sx={sx.ImageTwo}>
          <img
            className="appImage"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648113726/kdjsrxhvr6bq7wbmhacz.jpg"
          />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={sx.RightOne}>
            <Item sx={sx.ItemDesc}>
            PocketDoc. <br/>(Graduation project).
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
             Description: The idea of this application is to ease the communication between the patient and his/her doctor and to decrease the need for going to the doctor's clinic.                  
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Coordinated and managed team members tasks and activities.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Creatively Designed the application interface and inner dynamics.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Made the scenarios about how the application will function.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>Designed flow charts for sequence events & logo of the application..</Item>
            {/* <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>Designed the </Item> */}
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Implemented the application for the patient's side & the chat screen between the patient and the doctor.
            </Item>
            {/* <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Implemented the chat screen between the patient and the doctor.
            </Item> */}
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Tested the application's functional and non-functional
              requirements.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Fixed the bugs and issues in the application.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Maintained the application for future updates.
            </Item>
            <div style={{ paddingTop: "10px" }} />
          </Box>
        </Grid>
        
      </React.Fragment>






      <React.Fragment>
        <Grid item xs={6}>
          <Box sx={sx.LastOne}>
            <Item sx={sx.ItemDesc}>
            Photographer. <br/>(Freelance).
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
             Description: I started Photography as a hobby and it helped me to have an ideas of a Website and an Aplication.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Sharpening my skills in photoshop for designing web pages.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Enhancing my illustration skills to make icons and logos for my applications.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Editing photos using adobe photoshop, lightroom and illustrator.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>Training beginner photographers.</Item>
            {/* <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>Designed the </Item> */}
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Retouch model portraits.
            </Item>
            {/* <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
              Implemented the chat screen between the patient and the doctor.
            </Item> */}
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Video editing using Adobe Premiere.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Analyzing videos and reediting them.
            </Item>
            <div style={{ paddingTop: "10px" }} />
            <Item sx={sx.Item}>
            Fixing sounds in videos and adding effects.
            </Item>
            <div style={{ paddingTop: "10px" }} />
          </Box>
        </Grid>
        <Grid sx={sx.ImageThree} item xs={6}>
        <img
            className="pattern"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648479644/spltyzqwjambxzmw6fqq.jpg"
          />
          <br/>
          <img
            className="rollercoster"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648479207/zulpjqg7xzdg1aglos9r.jpg"
          />
          <img
            className="expo"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648479579/hge0bvwdtlfqljf5ya2l.jpg"
          />
          <br/>
          <img
            className="mercedes"
            src="https://res.cloudinary.com/dfq3j9tze/image/upload/v1648479606/zgf1nflkcqnw068qwb69.jpg"
          />
          
        </Grid>
      </React.Fragment>



    </>
  );
}

export default function NestedGrid() {
    let sx={
        imageSection:{
            marginLeft: "40px",
        }
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={9}>
        <Grid sx={sx.imageSection} container item spacing={10}>
          <FormRow  />
        </Grid>
      </Grid>
    </Box>
  );
}
