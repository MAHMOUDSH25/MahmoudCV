import * as React from "react";
import Header from './Header.js';
import BodyTabs from './BodyTabs.js';
import FormRow from './FormRow.js'
import { Typography } from "@mui/material";
import "./imageHover.css";

function Layout() {
    let sx = {
        text:{
            fontSize:'40px',
            textAlign: "center",
            fontWeight:'bold',
            
        }
    }

    return (
    <>
    <div style={{ backgroundColor:'#fff' }}>
    <Header></Header>
    <div style={{ paddingTop: "60px" }} />
    
    
    <div className="Text">
        Skills and Knowledge 
    </div>
    <hr width='300px' />


    <div style={{ paddingTop: "40px" }} />
    <BodyTabs></BodyTabs>
    <div style={{ paddingTop: "70px" }} />
    
    
    <div className="Text">
        Work Experience
    </div>
    <hr width='300px'/>
    
    
    <div style={{ paddingTop: "40px" }} />
    <FormRow></FormRow>
    <div style={{ paddingTop: "60px" }} />
    
    
    </div>
    </>
    )
}

export default Layout;