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

function FavoriteItems() {

    const { token } = useContext(UserContext);

    const [wishData, setWishData] = useState([]);

    const { successMessage } = useContext(UserContext);

    const [clickCart, setClickCart] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [clickId, setClickId] = useState("");

    const [size, setSize] = useState();

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

        {res?.data && localStorage.setItem("WishListData", JSON.stringify(res.data?.items))};
    }


    const deleteWishList = async (id) => {
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
            },
        })

        setWishData((prevWishData) => prevWishData.filter(item => item.products._id != id));
        wishListIter();
    }



    function wishListItem(val) {

        if (!successMessage) {
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


    useEffect(() => {

        if (localStorage.getItem("WishListData") != undefined) {
            setWishData(JSON.parse(localStorage.getItem("WishListData")));
        }

        else {
            console.log("No data");
        }

    }, [])


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
                            <ul className="wishListUl">
                                <li className="wishListtext ll">Order</li>
                                <li className="wishListtext ll">Address</li>
                                <li className="wishListtext ll">Profile</li>
                                <li className="wishListtext ll">Wishlist</li>
                                <li className="wishListtext ll">Coupons</li>
                                <li className="wishListtext ll">Tickets</li>
                                <div className="wishListLogOut">
                                    <Button text="LOGOUT" className="wishListLogOutButton" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    wishData && wishData.length ? wishData.map((val) => {
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
                        <div>
                            <img className="NoDataImage" src="https://www.beyoung.in/images/common/EMPTY-WISHLIST-PAGE.jpg" />
                        </div>
                }

                {showModal && createPortal(<SignUpPage showModal={showModal} onClose={handleClose} />, document.body)}

                {!showModal && setClickCart && createPortal(<BasicModal clickCart={clickCart} onClose={handleCloseModel} setClickId={clickId} size={size} />, document.body)}

            </div>

            <Footer />
        </div>
    )
}

export default FavoriteItems;