import { useEffect, useState } from "react";
import "./Banner.css";


function Banner(){
    return(
            <div className="imageBanner"> 
                <img className="img" src="https://www.beyoung.in/api/catalog/homepage-28-11/main-banner/SHIRT-BANNER-DESKTOP-VIEW.jpg"/>
                <img className="img" style={{marginTop:"20px" , width:"70%"}} src="https://beyoung.in/api/catalog/homepage-5-dec/desktop/desktop-free-shipping11.png"/>
                <img className="img" style={{marginTop:"30px" , width:"70%"}} src="https://www.beyoung.in/api/catalog/homepage-5-dec/desktop/Combo-banner-view-22.jpg"/>
            </div>
    )
}

export default Banner