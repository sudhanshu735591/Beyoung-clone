import React, { useEffect, useState } from "react";
import "./womenSection.css";
import { NavLink } from "react-router-dom";
import Women_Tshirts_Categories from "../WomenData/WomenData";

function WomenSection(props) {
  let { gender } = props;


  
  return (
    <div>
      <div className="mensection">{gender}</div>
      <div className="imageSlider">

        <div className="slider">
          <div className="womenSectionFlex">
          {Women_Tshirts_Categories.t_Shirts.list &&
              Women_Tshirts_Categories.t_Shirts.list.map((val, index) => (
                <div className="card" key={index}>
                  <div>
                    {/* <NavLink to = {(`/categories?search=${JSON.stringify({"name":"jogger"})}&filter=${JSON.stringify({ subCategory: "jogger",})}`)}> */}
                    <NavLink to = {(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                      <img className="womenImage" src={val.img} alt="Image" />
                      <p className="womenTextData">{val.name}</p>
                    </NavLink>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default WomenSection;
