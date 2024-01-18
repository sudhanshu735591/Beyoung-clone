import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import Button from "../button/button";
import "./PaymentSuccess.css";
import Footer from "../Footer/footer";
import { useContext } from "react";
import UserContext from "../../ContextApi/UserContext";

function OrderSuccess(){

    const {formData} = useContext(UserContext);
    // const {data, setdata} = useContext(UserContext);
    console.log("form",formData);

    const {productId} = useContext(UserContext);
    console.log("productId",productId);




    const navigate = useNavigate();

    function handleShopping(){
        navigate("/");
    }
    return(
        
        <div>
            <Topbanner/>
            <Trackorder/>
            <Navbar/>
            <div className="top-section">
                <figure>
                    <img className="pageImagePay" src="https://www.beyoung.in/mobile/images/thankyou/THAN-YOU-PAGE.png"/>
                </figure>
                <p>Sit back & relax! Our team will call you for COD Confirmation.</p>

                <div className="desktop-wap">
                    <img className="MobileWap" src="https://www.beyoung.in/mobile/images/thankyou/whatsappicon.png" alt=""/>
                    <p>Stay connected on WhatsApp for quick order updates.</p>
                </div>
            </div>


            <div className="order-details-section">
                <p class="orderdetails-text">Order Details</p>
                <span class="details-border"></span>
                <div className="user-detail-success">
                    <div className="details-success-sec">
                        <p className="heading">
                            <span>Name:</span>
                            <span>{formData.FirstName}</span>
                        </p>

                        <p className="heading">
                            <span>Phone Number:</span>
                            <span>+91 {formData.Phone}</span>
                        </p>


                        <p className="heading">
                            <span>Email Id:</span>
                            <span>{formData.Email}</span>
                        </p>
                    </div>




                    <div className="details-success-sec">
                        <p className="heading">
                            <span>Order ID:</span>
                            <span>{productId}</span>
                        </p>

                        <p className="heading">
                            <span>Shipping Address:</span>
                            <span>{formData.Address} {formData.City} {formData.Town} {formData.PinCode}</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="Product-summury">
                <p class="summery-text">Product Summary</p>
                <span class="details-border"></span>

                <div className="summery">
                    <div className="product-success-details-main">
                        <div className="product-success-details">
                            <p className="product-all-details">
                            <span className="productnameText">Product Name:</span>
                            <span className="productdisctext">Teal Blue Oversized Full Sleeves T-shirt For Men</span>
                            </p>



                            <p className="product-all-details">
                            <span className="productnameText">Payment Method:</span>
                            <span className="productdisctext">Cash on Delivery</span>
                            </p>


                            <p className="product-all-details">
                            <span className="productnameText">Total:</span>
                            <span className="productdisctext">₹ 699 </span>

                            </p>
                        </div>
                    </div>
                </div>
                <Button text = "View More" className = "paymentSuccessViewMore"/>

            </div>

            <div className="keep-shopping">
                <p onClick={handleShopping} style={{cursor:"pointer"}} className="keepShoppingP">KEEP SHOPPING</p>
            </div>


            {/* <div className="user-rating-desktop">
                <p>How was your overall experience at Beyoung?</p>
                <span>Please take a minute to rate your experience. Your feedback will help Beyoungsters make smart choices.</span>

                <div className="rating-2">
                  
                </div>
            </div> */}

            <div>
               <a href="https://play.google.com/store/apps/details?id=com.beyoungapp"> <img src="https://www.beyoung.in/desktop/images/thankyou/sucess-app-desktop.png" /></a>
            </div>

            <Footer/>

        </div>
    )
}

export default OrderSuccess;