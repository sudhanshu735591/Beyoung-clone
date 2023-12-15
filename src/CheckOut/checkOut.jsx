
import { useContext } from "react"
import Button from "../components/button/button"
import "./checkout.css"
import UserContext from "../ContextApi/UserContext"

function CheckOut() {
    const {myApi} = useContext(UserContext);



    return (
        <div className="checkoutSection">
            <div className="checkoutNav">
                <div className="checkoutText">BEYOUNG.</div>
                <div className="checkoutPayText">100% SECURE PAYMENT</div>
            </div>

            <div className="checks">
                <div className="circleBox">
                    <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Cart.png" /></div>
                    <div className="checkOutText">My Cart</div>
                </div>

                <div className="circleBox">
                    <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Location-Outline.png" /></div>
                    <div className="checkOutText">Address</div>
                </div>

                <div className="circleBox">
                    <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Payment-outline.png"/></div>
                    <div className="checkOutText">Payment</div>
                </div>
            </div>


            <div className="checkOut">
                <div className="checkOutDetailsSection">
                    <div className="sectionImageBox">
                        <div>
                            <img style={{height:"150px", width:"100px"}} alt="image" src={myApi && myApi.images[0]}/>
                        </div>

                        {/* Quantity section */}
                        <div className="sectionTag">
                            <select className="checkOutSection">
                                <option>Qty: 1</option>
                                <option>Qty: 2</option>
                                <option>Qty: 3</option>
                                <option>Qty: 4</option>
                                <option>Qty: 5</option>
                                <option>Qty: 6</option>
                                <option>Qty: 7</option>
                                <option>Qty: 8</option>
                                <option>Qty: 9</option>
                                <option>Qty: 10</option>
                            </select>
                        </div>
                    </div>


                    {/* Light Grey Oversized Full Sleeves T-shirt For Men section */}
                    {myApi && <div className="checkOutTextDetails">
                        <h5>{myApi.name}</h5>
                        <p>Oversized T-Shirts</p>
                        <h4>₹ {myApi.price}</h4>
                        <div className="checkOutColor">
                            <h5>Color : {myApi.color}</h5>
                            <p>Size : M</p>
                        </div>
                    </div>}
                </div>



                {/* for Offer and benifit section */}
                <div className="checkOutPrice_Text">
                    <div style={{borderBottom:"1px solid"}}>
                        <h3>PRICE DETAILS (1 items)</h3>
                    </div>

                    {/* MRP section */}
                    <div className="detailsandnumber">
                        <div className="DetailsSec">
                            <p>Total MRP (Inc. of Taxes)</p>
                        </div>

                        <div className="priceNum">
                            <div>
                            <p>₹ {myApi && myApi.price}</p>
                           
                            </div>
                        </div>
                    </div>


                    <div style={{display:"flex",gap: "207px"}}>
                        <div>
                            Total Amount
                        </div>
                        <div>
                            {myApi && myApi.price}
                        </div>
                    </div>

                    <div>
                        <Button className="checkOutButton" text="CHECKOUT SECURELY"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut

