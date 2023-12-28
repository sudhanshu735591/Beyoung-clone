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

  const [scrollPosition, setScrollPosition] = useState(0);

  const [bottomScrollPosition, setBottomScrollPosition] = useState(0);

  const [flag, setFlag] = useState(true);

  const imageWidth = 500;

  const bottomImageWidth = 2540;

  const navigate = useNavigate()

  function checkClicked(e){
    console.log("yes clicked");
    navigate("/categorized");
    setMenViewAllData(true);

  }




  const scrollContainer = ()=>{
    console.log("scrollPosition", scrollPosition);
    setScrollPosition((prevPosition) => (prevPosition + 220) % imageWidth);
    setFlag(false);
  }


  const scrollRight = ()=>{
    setScrollPosition((prevPosition) => (prevPosition - 220) % imageWidth);
    setFlag(true);
  }


  function bottomLeftArrow(){
    console.log("click");
    setBottomScrollPosition((prevPosition) => (prevPosition + 220) % bottomImageWidth)
  }

  function bottomRightArrow(){
    setBottomScrollPosition((prevPosition) => (prevPosition - 220) % bottomImageWidth)
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
        <div className="largeImage">
          <img style={{border:"none", height:"382px"}} src={Tshirts_Categories.t_Shirts.img}/>
        </div>


        <div className="leftArrow" onClick={flag ? null : ()=>scrollRight(-29)}>
          <i class="fa-solid fa-angle-down"></i>
        </div>



        <div onClick={!flag ? null : ()=>scrollContainer(29)} className="rightArrow">
          <i class="fa-solid fa-angle-down"></i>
        </div>

        <div className="flex">
          {
            category && category.t_Shirts.list.map((val)=>{
              return(
                <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                  <div style={{transform: `translateX(-${scrollPosition}px) rotate(360deg)` }} className="flex3">
                    <img className="sideImageData" src = {val.img}/>
                    <p className="tshirtText">{val.name}</p>
                  </div>
                </Link>
              )
            })
          }
          
        </div>
    </div>

      


      <div className="displayImage">
        <div className="demand">
          <div className="tshirt1">CATEGORIES</div>
          <div className="highondemand high1">{demand}</div>
        </div>
        <div className="viewall"></div>
      </div>


       <div className="bottomBox">
        <div className="BottomLeftArrow" onClick={()=>bottomRightArrow(-29)}>
          <i class="fa-solid fa-angle-down"></i>
        </div>

        {
          BottomWear.bottom.map((val)=>{
            return(
              <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                <div className="bottomBoxWear" style={{transform: `translateX(-${bottomScrollPosition}px) rotate(360deg)`}}>
                  <img className="bottomWear" src = {val.img}/>
                    <p className="bottoWearText">{val.name}</p>
                </div>
              </Link>
            )
          })
        }






        

        <div className="BottomRightArrow" onClick={()=>bottomLeftArrow(29)}>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>

       <WomenSection gender = "WOMEN"/>

       <div>
        <img className="wardrobeImage" src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/Bhuvan-strip-banner-desktop.jpg"/>
       </div>
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