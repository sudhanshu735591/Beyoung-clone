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
import { Link } from "react-router-dom";


function FavoriteItems() {

    const { setToken, token } = useContext(UserContext);

    const [wishData, setWishData] = useState([]);

    const { setSuccessMessage, successMessage } = useContext(UserContext);

    const [clickCart, setClickCart] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [clickId, setClickId] = useState("");

    const [size, setSize] = useState();

    const {setWishListDataLength} = useContext(UserContext);

    const [orderData, setOrderData] = useState();

    const [getUlText, setGetUlText] = useState("Order");

    function Logout(){
        setToken("");
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
        console.log("order", res?.data);
        setOrderData(res?.data);
    }


    function orderClickHandler(e){
        setGetUlText(e.target.innerText);
        console.log("e.target.innerText",e.target.innerText);
        if(e.target.innerText==="Order"){
            orderList();
        }
        else if(e.target.innerText==="Wishlist"){
            console.log("yes");
            wishListIter();
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
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
            },
        });

        let res = await data.json();
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
                                <li onClick={orderClickHandler} style={{fontWeight:getUlText==="Wishlist"?"600":"normal"}} className="wishListtext ll">Wishlist</li>
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
                    getUlText==="Wishlist" && wishData && wishData.length ? wishData.map((val) => {
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
                            console.log("val---->", val);
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

                                                    <Link to="">
                                                        <img style={{height:"25px"}} src="https://www.beyoung.in/images/common/chevron-right.png"/>
                                                    </Link>
                                                </div>
                                            </a>

                                            <div className="order-product-section">
                                                <Link to="">
                                                    <figure >
                                                        <img className="favImageFig" src={val.order.items[0].product.displayImage}/>
                                                    </figure>
                                                </Link>

                                                <div className="order-content">
                                                    <Link to ="">
                                                        <p className="order-product-name">
                                                            {val.order.items[0].product.name}
                                                        </p>
                                                    </Link>

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


















