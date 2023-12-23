import React, { useEffect, useState } from "react";
import "./womenSection.css";


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
                <div className="card" key={index}>
                  <img className="womenImage" src={val.displayImage} alt="Image" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenSection;
