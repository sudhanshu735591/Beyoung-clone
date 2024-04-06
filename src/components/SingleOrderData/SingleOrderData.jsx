import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../button/button";
import UserContext from "../../ContextApi/UserContext";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import Navbar from "../Navbar/navbar";


function SingleOrderData() {

    const [getUlText, setGetUlText] = useState();
    const { setSuccessMessage } = useContext(UserContext);


    const { id } = useParams();
    console.log("id", id);

    const fetchSingleOrderData = async () => {
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'Your_ProjectId'
            }
        });

        let res = await data.json();
        console.log("singleorderdata", res);
    }

    useEffect(() => {
        fetchSingleOrderData();
    }, [id]);

    function orderClickHandler(e) {
        setGetUlText(e.target.innerText);
        console.log("e.target.innerText", e.target.innerText);
        if (e.target.innerText === "Order") {
            orderList();
        }
        else if (e.target.innerText === "Wishlist") {
            console.log("yes");
            wishListIter();
        }
    }

    function Logout() {
        // setToken("");
        localStorage.removeItem("Token");
        setSuccessMessage("");
    }


    return (
        <div>
            <Topbanner/>
            <Trackorder/>
            <Navbar/>
            <div className="my-account-profile">
                <div className="nameLogo">
                    <div style={{ marginBottom: "20px" }}>ss</div>
                </div>
                <div className="nameSection">
                    <div>SUDHANSHU SHEKHAR</div>
                </div>
                <div className="favoriteYoungster">#Beyoungster</div>
            </div>

            <div className="liContentWishList">
                <div className="liContent">
                    <ul className="wishListUl" style={{ cursor: "pointer" }}>
                        <li onClick={orderClickHandler} style={{ fontWeight: getUlText === "Order" ? "600" : "normal" }} className="wishListtext ll">Order</li>
                        <li onClick={orderClickHandler} style={{ fontWeight: getUlText === "Address" ? "600" : "normal" }} className="wishListtext ll">Address</li>
                        <li onClick={orderClickHandler} style={{ fontWeight: getUlText === "Profile" ? "600" : "normal" }} className="wishListtext ll">Profile</li>
                        <li onClick={orderClickHandler} style={{ fontWeight: getUlText === "Wishlist" ? "600" : "normal" }} className="wishListtext ll">Wishlist</li>
                        <li onClick={orderClickHandler} style={{ fontWeight: getUlText === "Coupons" ? "600" : "normal" }} className="wishListtext ll">Coupons</li>
                        <li onClick={orderClickHandler} style={{ fontWeight: getUlText === "Tickets" ? "600" : "normal" }} className="wishListtext ll">Tickets</li>
                        <div className="wishListLogOut">
                            <Button onClick={Logout} text="LOGOUT" className="wishListLogOutButton" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SingleOrderData;