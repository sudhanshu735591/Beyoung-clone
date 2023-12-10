import { Link, json, useSearchParams } from "react-router-dom";
import "./gendersection.css";
import Tshirts_Categories from "../MenTshirtCategories/menTshirtsCategories";
import { useEffect, useState } from "react";
import BottomWear from "../MensBottomWear/mensBottomWear";
import WomenSection from "../WomenSection/womenSection";

function GenderSection(props) {
  let {category, gender, shirts, demand } = props;

  return (
    <div className="parentDiv">

      <div className="mensection">{gender}</div>

      <div className="displayImage">
        <div className="demand">
          <div className="tshirt">{shirts}</div>
          <div className="highondemand">{demand}</div>
        </div>
        <div className="viewall">View All</div>
      </div>

      <div className="imageData">
        <div>
          <Link>
            <img style={{border:"none"}} src={Tshirts_Categories.t_Shirts.img}/>
          </Link>
        </div>
        <div className="imageCategories">
          {
            category && category.t_Shirts.list.map((val)=>{
              return(
                <Link to={(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                  <div>
                    <img  className="sideImageData" src = {val.img}/>
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
          <div className="tshirt1">BOTTOMWEAR</div>
          <div className="highondemand">{demand}</div>
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



