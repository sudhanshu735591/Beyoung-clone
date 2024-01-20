import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import Button from "../button/button";
import "./FavoriteItems.css";
import UserContext from "../../ContextApi/UserContext";
import BasicModal from "../Modal/addToCartModal";
import { createPortal } from "react-dom";
import SignUpPage from "../../Auth/Signup/Signup";
import Footer from "../Footer/footer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SingleOrderData from "../SingleOrderData/SingleOrderData";


function FavoriteItems() {

    const { token } = useContext(UserContext);

    const [wishData, setWishData] = useState([]);

    const [flag, setFlag] = useState(true);

    const { setSuccessMessage, successMessage } = useContext(UserContext);

    const [clickCart, setClickCart] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [clickId, setClickId] = useState("");

    const [ setSize] = useState();

    const {setWishListDataLength} = useContext(UserContext);

    const [orderData, setOrderData] = useState();

    const [getUlText, setGetUlText] = useState();

    const [singleHandlerData, setSingleHandlerData] = useState();


    window.scrollTo(0, 0);



    function Logout(){
        // setToken("");
        localStorage.removeItem("Token");
        setSuccessMessage("");
    }


    const orderList = async ()=>{
        const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order",{
            method:"GET",

            headers: {
                "projectID": "zx5u429ht9oj",
                "Authorization":`Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json",
            }
        })

        const res = await data.json();
        setOrderData(res?.data);
    }

    useEffect(()=>{
        wishListIter();
    },[])


    function orderClickHandler(e){
        setGetUlText(e.target.innerText);
        if(e.target.innerText==="Order"){
            orderList();
            setFlag(false);

        }
        else if(e.target.innerText==="Wishlist"){
            wishListIter();
            setFlag(true);
        }
    }


    

    const fetchApi = async () => {
        try {
            let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/product/${clickId._id}`;

            let api = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    "projectID": "zx5u429ht9oj",
                }
            });

            let res = await api.json();
            setSize(res.data?.size);
        }

        catch (error) {
            console.log("error is", error);
        }
    }


    const wishListIter = async () => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
            method: "GET",

            headers: {
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'zx5u429ht9oj',
            },
        });

        let res = await data.json();
        console.log("rrr", res);
        setWishData(res?.data?.items);
        
    }

    // useEffect(()=>{
    //     wishListIter();
    // },[])


    const deleteWishList = async (id) => {
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
            },
        })
        let res = await data.json();
        setWishListDataLength(res?.data?.items?.length);

        setWishData((prevWishData) => prevWishData.filter(item => item.products._id != id));
        wishListIter();
    }



    function wishListItem(val) {

        if (!localStorage.getItem("Token")) {
            setShowModal(true);
        }

        else {
            setShowModal(false);
            setClickCart(true);
            setClickId(val);
        }
        fetchApi();
    }



    function handleClose() {
        setShowModal(false);
    }


    function handleCloseModel() {
        setClickCart(false);
    }


    const fetchSingleOrderData = async (id) => {
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'zx5u429ht9oj'
            }
        });

        let res = await data.json();
        setSingleHandlerData(res?.data);
    }





    function arrowClickHandler(id){
        console.log("iddddd", id);
        fetchSingleOrderData(id);
        setGetUlText("clicked")
    }


    return (
        <div>
            <Topbanner />
            <Trackorder />
            <Navbar />

            <div className="account_navigation">
                <div>
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
                            <ul className="wishListUl" style={{cursor:"pointer"}}>
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Order"?"600":"normal"}} className="wishListtext ll">Order</li>
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Address"?"600":"normal"}} className="wishListtext ll">Address</li>
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Profile"?"600":"normal"}} className="wishListtext ll">Profile</li>
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Wishlist" || flag ?"600":"normal"}} className="wishListtext ll">Wishlist</li>
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Coupons"?"600":"normal"}} className="wishListtext ll">Coupons</li>
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Tickets"?"600":"normal"}} className="wishListtext ll">Tickets</li>
                                <div className="wishListLogOut">
                                    <Button onClick={Logout} text="LOGOUT" className="wishListLogOutButton" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    getUlText==="Wishlist" || wishData && wishData.length ? wishData.map((val) => {
                        return (
                            <div className="imageWishListCategory">
                                <div className="imageDatawishList">
                                    <div onClick={() => deleteWishList(val.products._id)} className="crossCircle"><a className="xText">x</a></div>
                                    <img className="catImage" src={val.products.displayImage} />
                                    <div className="aboutTextData">
                                        <div>
                                            <div className="tShirtTextWishList"><p style={{ fontSize: "10px" }}>Clothes Categories</p></div>
                                        </div>

                                        <div>
                                            <div style={{ fontSize: "14px" }}>₹ {val.products.price}</div>
                                            <Button onClick={() => wishListItem(val.products)} text="Add To Cart" className="favCart" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                    getUlText==="Order" && orderData ? <div className="parentorderDataBox">
                      {
                        orderData.map((val)=>{
                            return(
                                <div className="my-order">
                                    <ul style={{listStyle:"none"}}>
                                        <li className="order-data-main">
                                            <div className="order-title">
                                                <span>{val.createdAt.split("T")[0]}</span>
                                            </div>  
                                            
                                            <a className="order-box">
                                                <div className="order-id-order-check">
                                                    <span className="order-id">
                                                        Order 
                                                        <b>#{val.order._id}</b>
                                                    </span>

                                                    <img onClick={()=>arrowClickHandler(val.order._id)}  style={{height:"25px"}} src="https://www.beyoung.in/images/common/chevron-right.png"/>
                                                </div>
                                            </a>

                                            <div className="order-product-section">
                                                    <figure >
                                                        <img className="favImageFig" src={val.order.items[0].product.displayImage}/>
                                                    </figure>

                                                <div className="order-content">
                                                        <p className="order-product-name">
                                                            {val.order.items[0].product.name}
                                                        </p>

                                                    <div className="order-product-details">
                                                    <p>Color: Teal Blue</p> 
                                                    <p>Size: M </p>
                                                    </div>

                                                    <p className="order-qty">
                                                        "Qty:" 4
                                                    </p>
                                                    <section class="product-order-review"></section>
                                                </div>
                                            </div>

                                            <div className="product-status-and-help">
                                                <Button text = "Order Placed" className  = "product-status-button"/>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                      }
                    </div>  : getUlText==="clicked" &&  singleHandlerData ? 
                    <div className="order-details-box">
                        <div className="order-left-box">
                            <div className="top-title">
                                <p>Order</p>
                                <strong>#{singleHandlerData._id}</strong>
                            </div>


                            <div className="singleOrderTextBoxandImage">
                                <div className="singleOrderInnerBox">
                                    <figure>
                                        {/* singleHandlerData.items[0].product.displayImage */}
                                        <img style={{height:"145px"}} src={singleHandlerData.items[0].product.displayImage}/>
                                    </figure>


                                    <div className="single-order-details-text">
                                        <p className="product-name">{singleHandlerData.items[0].product.name}</p>
                                        <p className="order-product-details-single-product">
                                            <span>Color: {singleHandlerData.items[0].product.color}</span>
                                            <span>Size: {singleHandlerData.items[0].product.size[0]} </span>
                                        </p>

                                        {console.log("singleHandlerData.items[0].product.quantity",singleHandlerData.items[0].quantity)}
                                        <p className="product-qty">Qty: {singleHandlerData.items[0].quantity}</p>

                                        <div className="product-price-status-singleOrder">
                                            <span className="product-price">Rs. {singleHandlerData.items[0].product.price} </span>

                                            <span className="product-status">Order Placed</span>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="order-info-product-status">
                                <div className="cancelled">
                                    <div className="order-status-main">
                                        <img className="orderStatusMainImage" src="https://www.beyoung.in/images/common/deliver.png"/>
                                        <span>Order Placed</span>
                                    </div>
                                </div>

                                <div class="order-date"> <p>18-Jan 2024 10:04 PM</p> </div>
                            </div>

                            <div className="order-info-total-price-single-order">
                                <div className="total-price-order-single">
                                    <span>Total Order Price</span>
                                </div>

                                <div className="order-price-data-single-order">
                                    <span className="order-price-data-single-order-span">₹ {singleHandlerData.totalPrice} </span>
                                </div>
                            </div>

                            <div className="shipping-user-details">
                                <div class="title"> Shipping Details</div>
                                <div className="shipping-user-name">
                                    <strong className="strongName">XYZ</strong>
                                </div>
                                {/* singleHandlerData.shipmentDetails.address.state */}
                                <p style={{display:"flex"}}>{singleHandlerData.shipmentDetails.address.city}, Locality :- {singleHandlerData.shipmentDetails.address.street}, {singleHandlerData.shipmentDetails.address.zipCode}, {singleHandlerData.shipmentDetails.address.city}, {singleHandlerData.shipmentDetails.address.state}</p>
                            </div>



                            <div className="payment-method-single-order">
                                <span className="payment-method-span">Payment Method</span>
                                <span className="payment-method-span2">
                                    <img className="payment-image" src="https://www.beyoung.in/images/common/wallet.png"/>
                                    COD
                                </span>
                            </div>




                            <div className="contact-number-details-single-order">
                                <span className="contact-number-details-single-order-span1">Contact Number</span>
                                <span className="showPhoneNumber">Phone: +91 9876543210</span>
                                <span className="showGmailId">Gmail: xyz@gmail.com</span>
                            </div>

                        </div>
                    </div>    
                   :  
                    <div>
                        <img className="NoDataImage" src="https://www.beyoung.in/images/common/EMPTY-WISHLIST-PAGE.jpg" />
                    </div>
                }

                {showModal && createPortal(<SignUpPage showModal={showModal} onClose={handleClose} />, document.body)}

                {!showModal && setClickCart && createPortal(<BasicModal clickCart={clickCart} onClose={handleCloseModel} setClickId={clickId}/>, document.body)}

            </div>

            <Footer />
        </div>
    )
}

export default FavoriteItems;


















