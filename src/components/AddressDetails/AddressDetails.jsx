import { useContext, useEffect, useMemo, useState } from "react";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import Button from "../button/button";

import "./AddressDetails.css";
import UserContext from "../../ContextApi/UserContext";
import CheckOutBar from "../../CheckOut/CheckOutBar/CheckOutBar";
import { json, useNavigate } from "react-router-dom";
import OrderHistoryApi from "../APIDATA/OrderHistoryApi";

function AddressDetails(){

    // const {selectChange} = useContext(UserContext);
    // const {globalPrice} = useContext(UserContext);
    const navigate = useNavigate();
    const {formData, setFormData} = useContext(UserContext);
    const {error, setError} = useContext(UserContext);

    useEffect(()=>{
        const token = localStorage.getItem("Token");
        console.log("token in adress---", token);
    },[])

   

    async function placeOrder(id, quantity){
        
        console.log("id", id, "quantity", quantity);
        try{
            let data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order",{
            method:"POST",
            headers: {
                'projectID': 'zx5u429ht9oj',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                productId : id,
                quantity : quantity,
                addressType: "HOME",
                address: {
                  street: formData.Address,
                  city: formData.City,
                  state: formData.State,
                  country: "India",
                  zipCode: formData.PinCode
                }
            })
        })

        console.log("Data", data);
        let res = await data.json();

        if(res.status==="success"){
            navigate("/payment");
            alert("success");
        }
        console.log("Adddress", res);
        }
        catch(error){
            console.log("error",error);
        }
    }



  function trackOrderDetails(){
    const storedData = localStorage.getItem("data");
    // placeOrder()
    if(storedData && Array.isArray(JSON.parse(storedData))){
        console.log(JSON.parse(storedData));
        JSON.parse(storedData).map((val)=>{
            placeOrder(val.product._id, val.quantity)
        })
    }
  }


























    

   


  

    
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
            // navigate("/payment");
            placeOrder();
            
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
                            <input className = "addressInputBox" style={{border: error.FirstName?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.FirstName} name="FirstName" type="text" placeholder="First Name*"/>
                            <input className = "addressInputBox" style={{border: error.LastName?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.LastName} name="LastName" type="text" placeholder="Last Name*"/>
                        </div>

                        <div className="emailandphone">
                            <input className = "addressInputBox" style={{border: error.Email?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Email} name="Email" type="Email" placeholder="Email*"/>
                            <div className="countryCodeBox">
                                <div className="countrybox">
                                    <div className="CountryCode"></div>
                                    <input className = "addressInputBox" style={{border: error.Phone?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Phone} name="Phone" type="number" placeholder="Phone*"/>
                                </div>
                            </div>
                        </div>

                        <div className="pincodeandvillage">
                            <div >
                                <input className = "addressInputBox" style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.PinCode} name="PinCode" type="number" placeholder="PIN CODE*"/>
                            </div>
                            <input className = "addressInputBox" style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Town} name="Town" type="text" placeholder="TOWN/VILLAGE*"/>
                        </div>
                        {error.PinCode && <div className="errorMsg" style={{ color: 'red' }}>Pincode</div>}

                        <div className="cityandstate">
                            <input className = "addressInputBox" style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.City} name="City" type="text" placeholder="City/District*"/>
                            <input className = "addressInputBox" style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.State} name="State" type="text" placeholder="State*"/>
                        </div>

                        <div className="address">
                            <input className="addressInputBox destination" style={{border: error.PinCode?"1px solid red":"2px solid #ddd"}} onChange={handleChange} value={formData.Address} name="Address" type="text" placeholder="Address(House No. Building Street Area)*"/>
                        </div>
                    </div>
                </div>

                <div className="offerSection">
                    <div className="priceDetails">
                        <div className="priceText">Price Details( {localStorage.getItem("setSelectChange")} items)</div>
                        <div className="MRPsection">
                            <div className="text_price">
                                <div className="TotalMRPText">Total MRP (Inc. of Taxes)</div>
                                <div className="Price">₹ {localStorage.getItem("sum")}</div>
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
                                <div className="Price">₹ {localStorage.getItem("sum")}</div>
                            </div>
                        </div>
                    </div>


                    <div className="totalAmount">
                        <div className="textPriceBox">
                            <div className="totalText">TOTAL AMOUNT</div>
                            <div className="priceTotal">₹ {localStorage.getItem("sum")}</div>
                        </div>

                        <div className="SavedBox">
                            <div className="totalSavedText">You Saved ₹0 on this order</div>
                        </div>

                        <div className="CheckoutBoxSecurely">
                            <Button text ="CHECKOUT SECURELY" onClick = {trackOrderDetails}  className="checkOutSecurelyButton"/>
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