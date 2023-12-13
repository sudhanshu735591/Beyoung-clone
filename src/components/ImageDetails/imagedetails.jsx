import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import "./imageDetails.css";
import Button from "../button/button";
import Footer from "../Footer/footer";


function ImageDetails() {
    const [myData, setMyData] = useState({});
    const [addCart, setAddCart] = useState(true);
    const [myColor, setMyColor] = useState("black")

    let { id } = useParams();

    let [size , setSize] = useState("");

    function sizeHandler(e){
        setSize(e.target.innerHTML);
        setMyColor("lightBlue")
    }

    function addToCartHandler(){
        {!size && setAddCart(false)};
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
            console.log("response is", res.data);
            setMyData(res.data);
        }

        catch (error) {
            console.log("error is", error);
        }
    }

    const [searchParamms] = useSearchParams();


    useEffect(() => {
        fetchApi();
    }, []);


    return (
        <div>
            <Topbanner />
            <Trackorder />
            <Navbar />

            {
                <div className="ImageData">
                    <div className="sideImageBox">
                        {myData.images &&
                            myData.images.map((val) => {
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
                                    myData.size && myData.size.map((val) => {
                                        return (
                                            <div style={{border:`2px solid ${myColor}`}} onClick = {(e)=>sizeHandler(e)} className="circle">{val}</div>
                                        )
                                    })
                                }

                            </div>
                            {!size && !addCart && <p>Please select a size</p>}
                        </div>

                        <div className="quantity">
                            <div>QTY:</div>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

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
        </div>
    )
}

export default ImageDetails;
