import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import "./imageDetails.css";
import Button from "../button/button";
import Footer from "../Footer/footer";
import SignUp from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";
import UserContext from "../../ContextApi/UserContext";
import Swal from "sweetalert2";

function ImageDetails() {
    const [myData, setMyData] = useState({});
    const [addCart, setAddCart] = useState(true);
    let [clickIndex, setClickIndex] = useState(null);
    let { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const {setCartCount} = useContext(UserContext);
    const {setClothSize, clothSize} = useContext(UserContext);
    const {setMyApi} = useContext(UserContext);
    const {selectChange,setSelectChange} = useContext(UserContext);
    const {setAddressData} = useContext(UserContext);
    const {setAddToCartDataLength} = useContext(UserContext);
    const [loader, setLoader] = useState(false);

    const handleClose = ()=>{
        setShowModal(false);
    }

    function sizeHandler(e, index){
        setClothSize(e.target.innerHTML);
        setClickIndex(index);
    }


    function goToCart(){
        navigate("/checkout");
    }

    const fetchApi = async () => {
        try {
            setLoader(true);
            let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`;

            let api = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    "projectID": "zx5u429ht9oj",
                }
            });

            let res = await api.json();

            setMyData(res.data);
            setMyApi(res.data);
            setAddressData(res.data);
            setLoader(false);
        }

        catch (error) {
            console.error("error is", error);
        }
    }

    useEffect(() => {
        fetchApi();
        setClothSize("");
        setAddCart(true);
        window.scrollTo(0, 0);
    }, []);

    const addToCart = async()=>{
        try{
            let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
                method:"PATCH",
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("Token")}`,
                    "projectID":"zx5u42 9ht9oj",
                    "Content-Type": "application/json",
                },

                body:JSON.stringify({
                    "quantity" : `${selectChange}`,
                    "size" : `${clothSize}`
                })
            })
    
            let res = await data?.json();

            setCartCount(res?.results);
            {res.status!=="fail" && setAddToCartDataLength(res?.data?.items?.length)};
            localStorage.setItem("cartLength", res?.data?.items?.length);
           
        }
        catch(error){
            console.log(error);
        }
    }   
    
    function addToCartHandler(){
        if(!clothSize || !selectChange){
            setAddCart(false);
        }

        if(!localStorage.getItem("Token")){    
            setShowModal(true);
        }
        
        else{
            {clothSize && selectChange && addToCart() && 
            Swal.fire({
                title: "Congratulations !",
                text: "Your data added successfully !",
                icon: "success"
              });
            }
        }
    }

    const [imageDetails, setImageDetails] = useState("");

    function handleImageData(val){
        setImageDetails(val);
    }

    const navigate = useNavigate();

    function buyNowHandler(){
        {localStorage.getItem('Token') ? navigate("/checkout") : setShowModal(true)};
    }


    return (
        <div>
            <Topbanner />
            <Trackorder />
            <Navbar />
            {
                <div className="ImageData">
                    <div className="sideImageBox">
                        {myData.images &&
                            myData.images?.map((val) => {
                                return (
                                    <img className="sideImage" src={loader?"https://www.beyoung.in/beyoung-loader.gif":val} onClick={()=>handleImageData(val)}/>
                                )
                            })
                        }
                    </div>

                    <div className="Menimage">
                        <img className="menimg" src={loader?"https://www.beyoung.in/beyoung-loader.gif":imageDetails? imageDetails:myData.displayImage}/>
                    </div>

                    <div className="brand">
                        <p className="sand">{myData.name}</p>
                        <p className="urban">Urban Shirts</p>
                        <p className="price">₹ {myData.price}</p>
                        <p className="taxes">Inclusive of All Taxes + Free Shipping</p>
                        <div className="colorBoxData">
                            <p className="color">COLOR</p>
                            <div className="black">
                                <div className="colorBox" style={{ background: myData.color }}></div>
                                <p>{myData.color}</p>
                            </div>
                        </div>

                        <div className="size">
                            <p className="sizeText">SIZE</p>
                            <div className="allSize">
                                {
                                    myData.size && myData.size.map((val, index) => {
                                        return (
                                            <div style={{border:`2px solid ${index===clickIndex?"lightBlue":"#dedada"}`}} onClick = {(e)=>sizeHandler(e, index)} className="circle">{val}</div>
                                        )
                                    })      
                                }

                            </div>
                            {!clothSize && !addCart && <p style={{color:"red", paddingRight:"160px"}}>Please select a Quantity</p>}

                        </div>

                        <div className="quantity">
                            <div style={{fontSize:"17px"}}>QTY:</div>
                            <select onChange={(e)=>setSelectChange(e.target.value)}>
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
  
                        {!selectChange && !addCart && <p style={{color:"red", paddingRight:"160px"}}>Please select a size</p>}

                        <div className="button">
                            {localStorage.getItem("data").includes(id)?
                                <Button onClick={goToCart} text="Go to Cart" className="cart" />:
                                <Button onClick = {addToCartHandler} text="Add to Cart" className="cart" />
                            }
                            <Button onClick={buyNowHandler} text="BUY NOW" className="cart buy" />
                        </div>

                        <div className="delivery">
                            <div className="text">DELIVERY OPTIONS</div>
                            <div className="pincode">
                                <div style={{fontSize:"12px"}}>Enter your Pincode to check the delivery time and free pick up options</div>
                                <input className="pincodeInputBox" type="text" placeholder="Enter Pincode" />
                                <div className="logo">
                                    <img className="logoImage" src="https://www.beyoung.in/desktop/images/product-details-2/cod.jpg" />
                                    <p>Cash On Delivery</p>
                                </div>
                                <div className="logo">
                                    <img className="logoImage" src="https://www.beyoung.in/desktop/images/product-details-2/ship.jpg" />
                                    <p>Express Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div>
                <Footer />
            </div>

            {showModal && createPortal(<SignUp showModal = {showModal} onClose = {handleClose}/>,  document.body)}
        </div>
    )
}

export default ImageDetails;
