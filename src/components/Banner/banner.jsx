import "./Banner.css";
import { NavLink } from "react-router-dom";


function Banner(){

    return(
            <div className="imageBanner"> 
                <NavLink to = {(`/categorized?search={"name":"shirt"}&filter={"subCategory":"shirt"}`)}>
                    <img className="img" src="https://www.beyoung.in/api/catalog/homepage-28-11/main-banner/SHIRT-BANNER-DESKTOP-VIEW.jpg"/>
                </NavLink>
                <img className="img" style={{marginTop:"20px" , width:"85%"}} src="https://beyoung.in/api/catalog/homepage-5-dec/desktop/desktop-free-shipping11.png"/>
                <NavLink to = {(`/categorized?search={"name":"kurta"}&filter={"subCategory":"kurta"}`)}>
                    <img className="img" style={{marginTop:"30px" , width:"70%"}} src="https://www.beyoung.in/api/catalog/homepage-5-dec/desktop/Combo-banner-view-22.jpg"/>
                </NavLink>
            </div>
    )
}

export default Banner