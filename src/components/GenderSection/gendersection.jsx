import { Link, useNavigate } from "react-router-dom";
import "./gendersection.css";
import Tshirts_Categories from "../MenTshirtCategories/menTshirtsCategories";
import { useContext, useState } from "react";
import BottomWear from "../MensBottomWear/mensBottomWear";
import WomenSection from "../WomenSection/womenSection";
import UserContext from "../../ContextApi/UserContext";

function GenderSection(props) {
  let { category, gender, shirts, demand } = props;

  const { setMenViewAllData } = useContext(UserContext);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [bottomScrollPosition, setBottomScrollPosition] = useState(0);

  const [flag, setFlag] = useState(true);

  const imageWidth = 500;

  const bottomImageWidth = 2540;

  const navigate = useNavigate();

  function checkClicked() {
    navigate("/categorized");
    setMenViewAllData(true);
  }
  


  const scrollContainer = () => {
    console.log("scrollPosition", scrollPosition);
    setScrollPosition((prevPosition) => (prevPosition + 390) % imageWidth);
    setFlag(false);
  }


  const scrollRight = () => {
    console.log("scrollPosition", scrollPosition);

    setScrollPosition((prevPosition) => (prevPosition - 390) % imageWidth);
    setFlag(true);
  }


  function bottomLeftArrow() {
    console.log("click");
    setBottomScrollPosition((prevPosition) => (prevPosition + 220) % bottomImageWidth)
  }

  function bottomRightArrow() {
    setBottomScrollPosition((prevPosition) => (prevPosition - 220) % bottomImageWidth)
  }


  return (
    <div className="parentDiv">

      <div className="mensection">{gender}</div>

      <div className="displayImage">
        <div className="demand" >
          <div className="tshirt">{shirts}</div>
          <div className="highondemand">{demand}</div>
        </div>
        <div onClick={checkClicked} className="viewall">View All</div>
      </div>

      <div className="imageData">
        <div className="leftArrow" onClick={flag ? null : () => scrollRight(-29)}>
          <i class="fa-solid fa-angle-down"></i>
        </div>

        <div onClick={!flag ? null : () => scrollContainer(29)} className="rightArrow">
          <i class="fa-solid fa-angle-down"></i>
        </div>

        <div className="genderSectionBoxDetails" style={{display:"flex"}}>
          {
            category && category.t_Shirts.list.map((val, index) => {
              return (
                <Link style={{ textDecoration: "none" }} to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                  <div className="GenderSectionImageBox" style={{ transform: `translateX(-${scrollPosition}px)`}}>
                    {
                      index === 0  && <img className="LargeImageData" src={val.img} /> 
                    }
                  </div>
                </Link>
              )
            })
          }


          <div className="genderTshirtsList">
          {
            category && category.t_Shirts.list.map((val, index)=>{
              return(
                <>
                   {
                    index>0 && <Link style={{ textDecoration: "none" }} to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                      <div className="imagedatabxx" style={{display:index>0?"block":"none", transform: `translateX(-${scrollPosition}px)`}}>
                        <img className="sideImageData" src={val.img}/>
                        {<p className="tshirtText">{val.name}</p>}
                      </div>
                    </Link>
                  }
                </>
              )
            })
          }
          </div>

        </div>

      </div>


      <div className="displayImage">
        <div className="demand" >
          <div className="tshirt1">CATEGORIES</div>
          <div className="highondemand high1">{demand}</div>
        </div>
        {/* <div className="viewall"></div> */}
      </div>


      <div className="bottomBox">
        <div className="BottomLeftArrow" onClick={() => bottomRightArrow(-29)}>
          <i class="fa-solid fa-angle-down"></i>
        </div>

        {
          BottomWear.bottom.map((val) => {
            return (
              <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                <div className="bottomBoxWear" style={{ transform: `translateX(-${bottomScrollPosition}px) rotate(360deg)` }}>
                  <img className="bottomWear" src={val.img} />
                  <div className="sideBorderBox">
                    <div className="sideBorder"></div>
                    <p className="bottoWearText">{val.name}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }


        <div className="BottomRightArrow" onClick={() => bottomLeftArrow(29)}>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>

      <WomenSection gender="WOMEN" />

    </div>
  )
}


export default GenderSection;

