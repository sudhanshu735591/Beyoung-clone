import { useEffect, useState } from "react";
import "./Banner.css";


function Banner(){
    return(
            <div className="imageBanner"> 
                <img className="img" src="https://www.beyoung.in/api/catalog/homepage-3-10/banner-new/black-friday-banner-desktop-view.jpg"/>
                <img className="img" src="https://beyoung.in/api/catalog/homepage-5-dec/desktop/desktop-free-shipping11.png"/>

            </div>
    )
}

export default Banner