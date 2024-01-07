import { useContext, useMemo, useState } from "react";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import Button from "../button/button";

import "./AddressDetails.css";
import UserContext from "../../ContextApi/UserContext";
import CheckOutBar from "../../CheckOut/CheckOutBar/CheckOutBar";
import { useNavigate } from "react-router-dom";

function AddressDetails(){

    const {selectChange} = useContext(UserContext);
    const {globalPrice} = useContext(UserContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        FirstName : "",
        LastName : "",
        Email:"",
        Phone:"",
        PinCode:"",
        Town :"",
        City:"",
        State:"",
        Address:"",
    })

    const [error, setError] = useState({
        FirstName : "",
        LastName : "",
        Email:"",
        Phone:"",
        PinCode:"",
        Town :"",
        City:"",
        State:"",
        Address:"",
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
    
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }))

        setError((prevError)=>({
            ...prevError,
            [name]:"",
        }))
    }


    const handleSubmit = (e)=>{
        e.preventDefault();

        const newError = {};
        Object.entries(formData).forEach(([key, value])=>{
            if(value.trim()===""){
                newError[key] = `${key} is required`;
            }
        })

        if(Object.keys(newError).length>0){
            setError(newError);
        }
        
        else{
            navigate("/payment");
        }
    }


    return(
        <>
        <CheckOutNav/>
        <CheckOutBar/>
        
        <div className="AddressDetailsBox">
            <div className="addressandofferBox">
                <form onSubmit={handleSubmit} style={{display:"flex"}}>
                <div className="addressBox">
                    <div className="addresstext">Delivery Address</div>

                    <div className="formDetails">
                        <div className="nameandlastname">
                            <input style={{border: error.FirstName?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.FirstName} name="FirstName" type="text" placeholder="First Name*"/>
                            <input style={{border: error.LastName?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.LastName} name="LastName" type="text" placeholder="Last Name*"/>
                        </div>

                        <div className="emailandphone">
                            <input style={{border: error.Email?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Email} name="Email" type="Email" placeholder="Email*"/>
                            <div className="countryCodeBox">
                                <div className="countrybox">
                                    <div className="CountryCode"></div>
                                    <input style={{border: error.Phone?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Phone} name="Phone" type="number" placeholder="Phone*"/>
                                </div>
                            </div>
                        </div>

                        <div className="pincodeandvillage">
                            <div >
                                <input style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.PinCode} name="PinCode" type="number" placeholder="PIN CODE*"/>
                            </div>
                            <input style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Town} name="Town" type="text" placeholder="TOWN/VILLAGE*"/>
                        </div>
                        {error.PinCode && <div className="errorMsg" style={{ color: 'red' }}>Pincode</div>}

                        <div className="cityandstate">
                            <input style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.City} name="City" type="text" placeholder="City/District*"/>
                            <input style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.State} name="State" type="text" placeholder="State*"/>
                        </div>

                        <div className="address">
                            <input style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} className="addressInput" value={formData.Address} name="Address" type="text" placeholder="Address(House No. Building Street Area)*"/>
                        </div>
                    </div>
                </div>





                <div className="offerSection">
                    <div className="priceDetails">
                        <div className="priceText">Price Details( {selectChange} items)</div>
                        <div className="MRPsection">
                            <div className="text_price">
                                <div className="TotalMRPText">Total MRP (Inc. of Taxes)</div>
                                <div className="Price">₹ {globalPrice}</div>
                            </div>

                            <div className="beyoungDiscount">
                                <div className="TotalMRPText">Beyoung Discount</div>
                                <div className="Price">- ₹0</div>
                            </div>

                            <div className="shipingSection">
                                <div className="shipingText">Shipping</div>
                                <div className="Price">Free</div>
                            </div>

                            <div className="cartTotalSection">
                                <div className="cartTotal">Cart Total</div>
                                <div className="Price">₹ {globalPrice}</div>
                            </div>
                        </div>
                    </div>


                    <div className="totalAmount">
                        <div className="textPriceBox">
                            <div className="totalText">TOTAL AMOUNT</div>
                            <div className="priceTotal">₹ {globalPrice}</div>
                        </div>

                        <div className="SavedBox">
                            <div className="totalSavedText">You Saved ₹0 on this order</div>
                        </div>

                        <div className="CheckoutBoxSecurely">
                            <Button text ="CHECKOUT SECURELY" className="checkOutSecurelyButton"/>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </>

    )
}

export default AddressDetails;