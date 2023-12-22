import { useEffect, useState } from "react";
import "./womenSection.css";
import { NavLink } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WomenSection(props){
    let {gender} = props;

    let [womenData, setWoemnData] = useState([]);

    let Women = "Women";


    const fetchAPi = async ()=>{
        let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"Women"}`
        let resData = await fetch(apiUrl , {
            method: 'GET',
            headers : {
              projectID: "zx5u429ht9oj",
            }
        });
        let res = await resData.json();
        setWoemnData(res);
    }

    useEffect(()=>{
        fetchAPi();
    }, [])



    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
            
          />
        );
      }
    
      const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    

    return(
        <div>
            <div className="mensection">{gender}</div>
            <div>
               
                <div className="slider">
                <Slider {...settings}>
                    {
                         womenData.data && womenData.data.map((val)=>{
                            return(
                                <div className="card">
                                    <img className="womenImage" src={val.displayImage} alt="Image"/>
                                </div>
                            )
                         })
                    }
                </Slider>
                </div>
                
            </div>

        </div>
    )
}

export default WomenSection;