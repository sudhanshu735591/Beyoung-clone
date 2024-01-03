import { useContext } from "react";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import Button from "../button/button";

import "./AddressDetails.css";
import UserContext from "../../ContextApi/UserContext";

function AddressDetails(){
    // const {selectItem, setSelectedItem} = useContext(UserContext);
    const {selectChange,setSelectChange} = useContext(UserContext);

    const {addressData, setAddressData} = useContext(UserContext);

    console.log("addressData", addressData);

    return(
        <>
        <CheckOutNav/>
        
        <div className="AddressDetailsBox">
            <div className="addressandofferBox">
                <div className="addressBox">
                    <div className="addresstext">Delivery Address</div>

                    <div className="formDetails">
                       <div className="nameandlastname">
                            <input type="text" placeholder="First Name*"/>
                            <input type="text" placeholder="Last Name*"/>
                       </div>

                       <div className="emailandphone">
                            <input type="Email" placeholder="Email*"/>
                            <div className="countryCodeBox">
                                <div className="countrybox">
                                    <div className="CountryCode"></div>
                                    <input type="number" placeholder="Phone*"/>
                                </div>
                            </div>
                       </div>


                        <div className="pincodeandvillage">
                            <input type="number" placeholder="PIN CODE*"/>
                            <input type="text" placeholder="TOWN/VILLAGE*"/>
                        </div>

                        <div className="cityandstate">
                            <input type="text" placeholder="City/District*"/>
                            <input type="text" placeholder="State*"/>
                        </div>

                        <div className="address">
                            <input className="addressInput" type="text" placeholder="Address(House No. Building Street Area)*"/>
                        </div>
                    </div>
                </div>





                <div className="offerSection">
                    <div className="priceDetails">
                        <div className="priceText">Price Details( {selectChange} items)</div>
                        <div className="MRPsection">
                            <div className="text_price">
                                <div className="TotalMRPText">Total MRP (Inc. of Taxes)</div>
                                <div className="Price">₹8750</div>
                            </div>

                            <div className="beyoungDiscount">
                                <div className="TotalMRPText">Beyoung Discount</div>
                                <div className="Price">- ₹5255</div>
                            </div>

                            <div className="shipingSection">
                                <div className="shipingText">Shipping</div>
                                <div className="Price">Free</div>
                            </div>

                            <div className="cartTotalSection">
                                <div className="cartTotal">Cart Total</div>
                                <div className="Price">₹3495</div>
                            </div>
                        </div>
                    </div>


                    <div className="totalAmount">
                        <div className="textPriceBox">
                            <div className="totalText">TOTAL AMOUNT</div>
                            <div className="priceTotal">₹3495</div>
                        </div>

                        <div className="SavedBox">
                            <div className="totalSavedText">You Saved ₹5255 on this order</div>
                        </div>

                        <div className="CheckoutBoxSecurely">
                            <Button text ="CHECKOUT SECURELY" className="checkOutSecurelyButton"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default AddressDetails;