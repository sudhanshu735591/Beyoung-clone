import React, { useEffect, useState } from "react";
import "./womenSection.css";
import { NavLink } from "react-router-dom";


function WomenSection(props) {
  let { gender } = props;
  let [womenData, setWomenData] = useState([]);

  const fetchAPI = async () => {
    let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"Women"}`;
    let resData = await fetch(apiUrl, {
      method: "GET",
      headers: {
        projectID: "zx5u429ht9oj",
      },
    });
    let res = await resData.json();
    setWomenData(res);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  
  return (
    <div>
      <div className="mensection">{gender}</div>
      <div className="imageSlider">

        <div className="slider">
          <div className="womenSectionFlex">
          {womenData.data &&
              womenData.data.map((val, index) => (
                val.displayImage && <div className="card" key={index}>
                  <div>
                    <NavLink to = {(`/categories?search=${JSON.stringify("Joggers")}&filter=${JSON.stringify("Joggers")}`)}>
                      <img className="womenImage" src={val.displayImage} alt="Image" />
                      <p>{val.name}</p>
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
