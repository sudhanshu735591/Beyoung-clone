import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import "./imageDetails.css";
import Button from "../button/button";
import Footer from "../Footer/footer";
import SignUp from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";
import UserContext from "../../ContextApi/UserContext";

function ImageDetails() {
    const [myData, setMyData] = useState({});
    const [addCart, setAddCart] = useState(true);
    let [clickIndex, setClickIndex] = useState(null);
    let { id } = useParams();

    const [showModal, setShowModal] = useState(false);
    const {successMessage} = useContext(UserContext);
    const {setCartCount} = useContext(UserContext);
    const {setClothSize, clothSize} = useContext(UserContext);
    const {setMyApi} = useContext(UserContext);

    const [selectChange, setSelectChange] = useState();

    // const {selectItem,setSelectedItem} = useContext(UserContext);

    // useEffect(()=>{
    //     setSelectChange(selectItem);
    //     console.log("selectedItemsss", selectItem);
    // },[])


    const handleClose = ()=>{
        setShowModal(false);
    }

    function sizeHandler(e, index){
        setClothSize(e.target.innerHTML);
        setClickIndex(index);
    }

    const fetchApi = async () => {
        try {
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
        }

        catch (error) {
            console.log("error is", error);
        }
    }

    useEffect(() => {
        fetchApi();
        setClothSize("");
        setAddCart(true);
        
    }, []);

    const {token} = useContext(UserContext);

    const addToCart = async()=>{
        try{
            let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
                method:"PATCH",
                headers:{
                    "Authorization":`Bearer ${token}`,
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
            {res.status!=="fail" ? localStorage.setItem("data", JSON.stringify(res.data?.items)): alert("Data already exist")};
        }
        catch(error){
            console.log(error);
        }
    }   
    
    function addToCartHandler(){
        if(!clothSize || !selectChange){
            setAddCart(false);
        }

        if(!successMessage){    
            setShowModal(true);
        }
        
        else{
           {clothSize && selectChange && addToCart() && alert("Data added Successfully")}
        }
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
                                    <img className="sideImage" src={val} />
                                )
                            })
                        }
                    </div>
                    <div className="Menimage">
                        <img className="menimg" src={myData.displayImage} />
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
                                            <div style={{border:`2px solid ${index===clickIndex?"lightBlue":"black"}`}} onClick = {(e)=>sizeHandler(e, index)} className="circle">{val}</div>
                                            
                                        )
                                    })      
                                }

                            </div>
                            {!clothSize && !addCart && <p style={{color:"red"}}>Please select a size</p>}

                        </div>

                        <div className="quantity">
                            <div>QTY:</div>
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

                        {!selectChange && !addCart && <p style={{color:"red"}}>Please select a size</p>}













                        <div className="button">
                            <Button onClick = {addToCartHandler} text="Add to Cart" className="cart" />
                            <Button text="BUY NOW" className="cart buy" />
                        </div>













                        <div className="delivery">
                            <div className="text">DELIVERY OPTIONS</div>
                            <div className="pincode">
                                <div>Enter your Pincode to check the delivery time and free pick up options</div>
                                <input type="text" placeholder="Enter Pincode" />
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

            <div className="product_details">
                <div>Product Details</div>
                <div className="boxDeatails">

                    <div className="product_highlights">
                        <div className="highlights">Product Highlights</div>
                        <div className="febric">
                            <div className="febText">Fabric</div>
                            <div>Loop Knit Cotton</div>
                        </div>

                        <div className="febric">
                            <div className="febText">Neck Type</div>
                            <div>Mock-neck</div>
                        </div>

                        <div className="febric">
                            <div className="febText">Pattern</div>
                            <div>Solid</div>
                        </div>

                        <div className="febric">
                            <div className="febText">Shoulder</div>
                            <div>Drop Shoulder</div>
                        </div>

                        <div className="febric">
                            <div className="febText">Fit</div>
                            <div>Oversized Fit</div>
                        </div>

                        <div className="febric">
                            <div className="febText">Style</div>
                            <div>Everyday Wear</div>
                        </div>
                    </div>


                    <div className="product_description">
                        <p className="product_text">Product Description</p>
                        <div className="loopKnit">
                            LoopKnit Cotton is made using the finest quality yarns that make the t-shirt ultra-soft and durable. The knitting technique helps you stay cool when it?s warm and warm when it?s cool. It?s a tear-resistant flexible fabric that stretches along with you and thus making it Smart clothing for Every season.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>

            {showModal && createPortal(<SignUp showModal = {showModal} onClose = {handleClose}/>,  document.body)}
        </div>
    )
}

export default ImageDetails;
