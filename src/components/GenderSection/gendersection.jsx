import { Link, json, useNavigate, useSearchParams } from "react-router-dom";
import "./gendersection.css";
import Tshirts_Categories from "../MenTshirtCategories/menTshirtsCategories";
import { useContext, useEffect, useRef, useState } from "react";
import BottomWear from "../MensBottomWear/mensBottomWear";
import WomenSection from "../WomenSection/womenSection";
import Slider from "react-slick";
import UserContext from "../../ContextApi/UserContext";

function GenderSection(props) {
  let {category, gender, shirts, demand } = props;

  const {setMenViewAllData} = useContext(UserContext);

  const navigate = useNavigate()

  function checkClicked(e){
    console.log("yes clicked");
    navigate("/categorized");
  }

  return (
    <div className="parentDiv">

      <div className="mensection">{gender}</div>

      <div className="displayImage">
        <div className="demand">
          <div className="tshirt">{shirts}</div>
          <div className="highondemand">{demand}</div>
        </div>
        <div onClick={checkClicked} className="viewall">View All</div>
      </div>

      <div className="imageData">
        <div className="flex"  >
          <div className="flex1">
            <Link>
              <div 
              className="nextArrow">
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <img style={{border:"none"}} src={Tshirts_Categories.t_Shirts.img}/>
            </Link>
          </div>

          
          <div className="flex2">
            {
              category && category.t_Shirts.list.map((val)=>{
                return(
                  <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                    <div className="flex3">
                      
                      <img  className="sideImageData" src = {val.img}/>
                      <p className="tshirtText">{val.name}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div> 
         <div 
       
        className="rightArrow">
          <i  class="fa-solid fa-angle-down"></i>
        </div>
      </div>


      <div className="displayImage">
        <div className="demand">
          <div className="tshirt1">BOTTOMWEAR</div>
          <div className="highondemand high1">{demand}</div>
        </div>
        <div className="viewall">View All</div>
      </div>


       <div className="bottomBox">
        {
          BottomWear.bottom.map((val)=>{
            return(
              <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                <div>
                  <img className="bottomWear" src = {val.img}/>
                  <p className="bottoWearText">{val.name}</p>
                </div>
              </Link>
            )
          })
        }
       </div>

       <WomenSection gender = "WOMEN"/>
    </div>
  )
}


export default GenderSection;




































































 {/* <div className="flex"  >
          <div className="flex1">
            <Link>
              <div 
              className="nextArrow">
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <img style={{border:"none"}} src={Tshirts_Categories.t_Shirts.img}/>
            </Link>
          </div>

          
          <div className="flex2">
            {
              category && category.t_Shirts.list.map((val)=>{
                return(
                  <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                    <div className="flex3">
                      
                      <img  className="sideImageData" src = {val.img}/>
                      <p className="tshirtText">{val.name}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div> 
         <div 
       
        className="rightArrow">
          <i  class="fa-solid fa-angle-down"></i>
        </div> */}