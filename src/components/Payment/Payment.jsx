import { useContext, useEffect, useState } from "react";
import CheckOutBar from "../../CheckOut/CheckOutBar/CheckOutBar";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import "./Payment.css";
import Paytm from "./Paytm/Paytm";
import DebitCard from "./DebitCart/DebitCart";
import Upi from "./UPI/Upi";
import WalletOffer from "./Wallets Offers/WalletsOffer";
import PriceDetails from "../../CheckOut/PriceDetails/PriceDetails";
import { json, useNavigate } from "react-router-dom";
import UserContext from "../../ContextApi/UserContext";
import Swal from "sweetalert2";


function Payment(){
    const { token } = useContext(UserContext);
    const [text, setText] = useState("");
    const {data, setdata} = useContext(UserContext);
    const {selectItem} = useContext(UserContext);
    const {setSelectChange} = useContext(UserContext);
    const {setGlobalPrice} = useContext(UserContext);
    const navigate = useNavigate();
    const {formData} = useContext(UserContext);

    const {setProductId} = useContext(UserContext);

    // function checkOutHandler(){
    //     navigate("/address");
    // }

    function onHandleClick(e){
        setText(e.target.innerText);
    }



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
            navigate("/ordersuccess");
            // alert("success");
            Swal.fire({
                title: "Thanks for shopping with us!",
                text: "Stay connected with us for more shopping!",
                icon: "success"
              });
        }
        setProductId(res?.data?._id);
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


    const fetchCheckOut = async () => {
        try {
            let data = await fetch(" https://academics.newtonschool.co/api/v1/ecommerce/cart", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': 'zx5u429ht9oj',
                    "Content-Type": "application/json",
                }
            });

            let res = await data.json();
            setdata(res.data?.items);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCheckOut();
        console.log("dtat", data);
    }, [])


    return(
        <div>
            <CheckOutNav/>
            <CheckOutBar/>

            <div className="paymentSection">
                <div className="paymentOption">
                    <div className="selectPayment">
                        <ul>
                            <li onClick={onHandleClick} className="paymentli">
                                <div className="sectiontext">
                                    <input type="radio" onChange={()=>setText("Pay With Paytm")}/>
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/paytm-icon-mobile.png"/>
                                    <p className="paywithpaytm"  >Pay with Paytm</p>
                                </div>
                            </li>

                            <li onClick={onHandleClick} className="paymentli">
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/card-cradit.png"/>
                                    <p className="paywithpaytm">Debit/Credit Card</p>
                                </div>
                            </li>



                            <li onClick={onHandleClick} className="paymentli">
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/upi.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">UPI</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>google Pay, Phone Pay, & More+</p>
                                    </div>
                                </div>
                            </li>


                            <li onClick={onHandleClick}  className="paymentli">
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/wallet.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Wallets Offers</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>Paytm, Mobikwik, & More+</p>
                                    </div>
                                </div>
                            </li>

                            <li onClick={onHandleClick}  className="paymentli">
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/payment/netbanking.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Netbanking</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>All Indian Banks</p>
                                    </div>
                                </div>
                            </li>



                            <li onClick={onHandleClick}  className="paymentli">
                                <div className="sectiontext">
                                    <input type="radio"/>
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/cash.svg"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Cash on Delivery</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>All Indian Banks</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                       {text==="Pay With Paytm" ? <Paytm/> : text==="Debit/Credit Card" ? <DebitCard/>: text==="UPI"? <Upi/> : text==="Wallets Offers"?<WalletOffer/>:<Paytm/>}
                       {/* text==="Debit/Credit Card"? */}
                    </div>



                    <div className="PaymentDeliveryBox">
                        <div className="paymentDeliveryDetails" style={{padding:"0px  30px"}}>
                            <div className="deliveryPersonDetails">Deliver To: <span className="deliveryPersonName">{` ${formData.FirstName} ${formData.LastName}`}</span></div>
                            <div className="deliveryAddress">{`${formData.City}, ${formData.Town}, ${formData.PinCode}`}</div>
                            <div className="deliveryContactDetails">Contact Number: <span className="deliveryContactnumber">{formData.Phone}</span></div>
                        </div>


                        <div className="addressSection">
                           {data && <PriceDetails data={data} selectItem = {selectItem}  setSelectChange = {setSelectChange} setGlobalPrice={setGlobalPrice} checkOutHandler={trackOrderDetails}/>}
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    )
}

export default Payment;