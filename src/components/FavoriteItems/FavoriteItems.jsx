import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import Button from "../button/button";
import "./FavoriteItems.css";
import UserContext from "../../ContextApi/UserContext";

function FavoriteItems(){


    const [wishData, setWishData] = useState([]);
    const { token } = useContext(UserContext);


    // const {wishListCartData, setWishListCardData} = useContext(UserContext);


    // function onClickHandler(val){
    //     setWishListCardData(val);
    //     console.log("val data is", val);
    // }

    useEffect(()=>{
        if(localStorage.getItem("WishListData")!=undefined){
            setWishData(JSON.parse(localStorage.getItem("WishListData")));
        }

        else{
            console.log("No data");
        }
    },[])


    

    return(
        <div>
            <Topbanner/>
            <Trackorder/>
            <Navbar/>

            <div className="account_navigation">
                <div>
                    <div className="my-account-profile">
                        <div className="nameLogo">
                            <div style={{marginBottom:"20px"}}>ss</div>
                        </div>
                        <div className="nameSection">
                            <div>SUDHANSHU SHEKHAR</div>
                        </div>
                        <div className="favoriteYoungster">#Beyoungster</div>
                    </div>

                    <div className="liContentWishList">
                        <div className="liContent"> 
                            <ul className="wishListUl">
                                <li className="wishListtext ll">Order</li>
                                <li className="wishListtext ll">Address</li>
                                <li className="wishListtext ll">Profile</li>
                                <li className="wishListtext ll">Wishlist</li>
                                <li className="wishListtext ll">Coupons</li>
                                <li className="wishListtext ll">Tickets</li>
                                <div className="wishListLogOut">
                                    <Button text = "LOGOUT" className = "wishListLogOutButton"/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

               {
                wishData.length && wishData.map((val)=>{
                    console.log("vallll", val);
                    return(
                        <div className="imageWishListCategory">
                            <div className="imageDatawishList">
                                <div className="crossCircle"><a className="xText">x</a></div>
                                <img className="catImage" src={val.products.displayImage}/>
                                <div className="aboutTextData">
                                    <div>
                                        <div className="tShirtTextWishList"><p style={{fontSize:"10px"}}>Clothes Categories</p></div>
                                    </div>
        
                                        <div>
                                        <div style={{fontSize:"14px"}}>₹ {val.products.price}</div>
                                        <Button onClick = {()=>wishListItem(val.products._id)} text = "Add To Cart" className = "favCart"/>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    )
                })
               }

                
            </div>
        </div>
    )
}

export default FavoriteItems;