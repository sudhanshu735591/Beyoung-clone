import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenData from "../MenData/mendata";
import WomenDataObj from "../WomenDataObj/WomenDataObj";


import "./HamburgerModel.css";
import { Link, NavLink } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '450px',
    left: '230px',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModalHamburger() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const[topwearFlag, setTopWearFlag] = React.useState(false);

  const [bottomWearFlag, setBottomWearFlag] = React.useState(false);

  const [themeFlag, setThemeFlag] = React.useState(false);

  const [flag, setFlag] = React.useState(true);

  function themeArrowClick(){
    setThemeFlag(!themeFlag)
  }

  function bottomWearArrowClick(){
    setBottomWearFlag(!bottomWearFlag);
  }

  function topWearArrowClick(){
    setTopWearFlag(!topwearFlag);
  }

  function handleWomenText(){
    setFlag(false);
  }


  function handleMenText(){
    setFlag(true)
  }

  return (
    <div>
      <Button onClick={handleOpen}>
      <i class="fa-solid fa-bars"></i>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='hamModelNav'>
                <div className='hammodelList'>
                    <div className='hamModelMen'>BEYOUNG.</div>
                </div>


                <div className='hamModelWomen'>
                    <div className='modelMen'>
                        <div onClick={handleMenText} className='menTextHamburger'>MEN</div>
                        <div onClick={handleWomenText} className='womenTextHamburger'>WOMEN</div>
                    </div>

                    {flag && <div className='categoryData'>
                        <div className='categoryList'>
                        {
                            Object.keys(MenData).map((key)=>{
                                return(
                                    <div>
                                        <h4>{key}</h4>
                                        {
                                            MenData[key].list.map((val)=>{
                                                return(
                                                    <ul>
                                                        <li className="weardata">
                                                            <NavLink to = {(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                                                                {val.name}
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>



                        <div className='categoryList'>
                            <div className='childCategoryList'>
                                <div className='wearData'>BOTTOMWEAR</div>
                                <div className='arrowContainer'><img onClick={bottomWearArrowClick} className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/></div>
                            </div>

                            <div style={{display:bottomWearFlag?"block":"none"}} className='ulcontainerdata'>
                                <ul className='ulChildContainer'>
                                    <li className='lidata'>Joggers</li>
                                    <li className='lidata'>Chino paints</li>
                                    <li className='lidata'>Boxers</li>
                                    <li className='lidata'>Shorts</li>
                                    <li className='lidata'>Jeans</li>
                                </ul>
                            </div>
                        </div>


                        <div className='categoryList'>
                            <div className='childCategoryList'>
                                <div className='wearData'>THEME</div>
                                <div className='arrowContainer'><img onClick={themeArrowClick} className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/></div>
                            </div>

                            <div style={{display:themeFlag?"block":"none"}} className='ulcontainerdata'>
                                <ul className='ulChildContainer'>
                                    <li className='lidata'>Travel</li>
                                    <li className='lidata'>Jym</li>
                                    <li className='lidata'>Cartoon</li>
                                    <li className='lidata'>Shorts</li>
                                    <li className='lidata'>Music</li>
                                </ul>
                            </div>
                        </div>
                    </div>}
                </div>


                 {!flag && <div className='hamModelWomen'>
                    <div className='categoryData'>
                        <div className='categoryList'>
                            <div className='childCategoryList'>
                                <div className='wearData'>TOPWEARWomen</div>
                                <div className='arrowContainer'><img onClick={topWearArrowClick} className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/></div>
                            </div>

                            <div style={{display: topwearFlag?"block":"none"}} className='ulcontainerdata'>
                                <ul className='ulChildContainer'>
                                    <li className='lidata'>Printed T-shirts</li>
                                    <li className='lidata'>Oversize T-Shirts</li>
                                    <li className='lidata'>Plain T-shirts</li>
                                    <li className='lidata'>Polo T-Shirts</li>
                                </ul>
                            </div>
                        </div>



                        <div className='categoryList'>
                            <div className='childCategoryList'>
                                <div className='wearData'>BOTTOMWEAR</div>
                                <div className='arrowContainer'><img onClick={bottomWearArrowClick} className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/></div>
                            </div>

                            <div style={{display:bottomWearFlag?"block":"none"}} className='ulcontainerdata'>
                                <ul className='ulChildContainer'>
                                    <li className='lidata'>Joggers</li>
                                    <li className='lidata'>Chino paints</li>
                                    <li className='lidata'>Boxers</li>
                                    <li className='lidata'>Shorts</li>
                                    <li className='lidata'>Jeans</li>
                                </ul>
                            </div>
                        </div>


                        <div className='categoryList'>
                            <div className='childCategoryList'>
                                <div className='wearData'>THEME</div>
                                <div className='arrowContainer'><img onClick={themeArrowClick} className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/></div>
                            </div>

                            <div style={{display:themeFlag?"block":"none"}} className='ulcontainerdata'>
                                <ul className='ulChildContainer'>
                                    <li className='lidata'>Travel</li>
                                    <li className='lidata'>Jym</li>
                                    <li className='lidata'>Cartoon</li>
                                    <li className='lidata'>Shorts</li>
                                    <li className='lidata'>Music</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}



                <div className='crossButton'></div>

            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}




// <ul className='hamburgerul'>
// <li className='lihamburger'>TOPWEAR
//     <img className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/>
// </li>




// <li className='lihamburger'>BOTTEMWEAR
//     <img className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/>
// </li>

// <li className='lihamburger'>COMBOS
//     <img className="hamburgerArrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/>
// </li>
// </ul>