import { useEffect, useState } from "react";
import "./TrackOrder.css";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import Navbar from "../Navbar/navbar";
import Button from "../button/button";
import Footer from "../Footer/footer";

function TrackOrderDetails() {

    return (
        <>
            <Topbanner />
            <Trackorder />
            <Navbar />
            <div className="trackBox">
                <img style={{ width: "100%" }} src="https://www.beyoung.in/api/cache/catalog/1-bb/trackinng-order-page-desktop-view11_1920x250.jpg" />

                <div className="detailsoftrackbox">
                    <div className="shipment">Track your Order or Shipment</div>
                    <div className="trackingIdBox">
                        <div className="SearchBy">
                            <div>Enter your Tracking ID or Order ID to track the status of your order. You can find the Tracking ID and Order ID in the Email/SMS confirming that your order has been shipped.</div>
                            <div className="parentSearchByText">
                                <div className="childsearchbytext">
                                    <div className="SearchByText">Search By :</div>
                                    <div className="radioBoxandtext">
                                        <div className="childradioBoxandtext">
                                            <input type="radio" />
                                            <p>Tracking ID</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="trackinputBox">
                                    <div className="trackinputBoxText">Enter Details</div>
                                    <div className="inputDetailsTrackBox">
                                        <input className="inputBoxtrack" type="text" placeholder="Enter Track Id"/>
                                        <Button text = "Submit" className = "buttonInTrackOrder"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ThanksText">
                        <div className="childThanksText"><span><img className="redHeart" src="https://www.beyoung.in/desktop/images/customer-shipment-track/heart-svgrepo-com.svg"/></span> Thank you for shopping at Beyoung, keep loving! <span><img className="redHeart" src="https://www.beyoung.in/desktop/images/customer-shipment-track/heart-svgrepo-com.svg"/></span>  </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}


export default TrackOrderDetails;



































// const [data, setData] = useState();

// const fetchData = async()=>{
//     let data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order",{
//         method:"GET",
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem("Token")}`,
//             'projectID': 'zx5u429ht9oj',
//             "Content-Type": "application/json",
//         },
//     });

//     const res = await data.json();

//     setData(res?.data);

//     console.log("TrackOrder", res.data);
// }


// useEffect(()=>{
//     fetchData();
// },[])