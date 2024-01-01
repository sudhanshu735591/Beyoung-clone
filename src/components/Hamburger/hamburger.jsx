import { useState } from "react";
import "./hamburger.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import BasicModalHamburger from "../HamBurgerModel/HamburgerModel";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


function Hamburger(props){

    const [flag , setFlag] = useState(false);
    function handleClick(){
        setFlag(!flag);
    }
    
    return(
        <div className="hamburgerBox">


            {<div className="listhamburger">

                <div className="hamlistdata">
                    <BasicModalHamburger/>
                </div>
            </div>}

            <div className="hamburgerchildbox">
                <div className="hamburgerNav">
                    <h2>BEYOUNG.</h2>
                </div>

            </div>
        </div>
    )
}

export default Hamburger;