import { useContext, useEffect, useState } from "react";
import CheckOutBar from "../../CheckOut/CheckOutBar/CheckOutBar";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import "./Payment.css";
import Paytm from "./Paytm/Paytm";
import DebitCard from "./DebitCart/DebitCart";
import Upi from "./UPI/Upi";
import WalletOffer from "./Wallets Offers/WalletsOffer";
import PriceDetails from "../../CheckOut/PriceDetails/PriceDetails";
import { useNavigate } from "react-router-dom";
import UserContext from "../../ContextApi/UserContext";


function Payment(){
    const { token } = useContext(UserContext);
    console.log("token",token);

    const [text, setText] = useState("");
    const {data, setdata} = useContext(UserContext);
    
    const {selectItem} = useContext(UserContext);
    const {setSelectChange} = useContext(UserContext);
    const {setGlobalPrice} = useContext(UserContext);
    const navigate = useNavigate();


    function checkOutHandler(){
        navigate("/address");
    }

    function onHandleClick(e){
        console.log(e.target.innerText);
        setText(e.target.innerText);
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

            console.log("mydata", data);

            let res = await data.json();
            setdata(res.data?.items);
            console.log("res.data?.items", res.data?.items);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCheckOut();
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
                            <div className="deliveryPersonDetails">Deliver To:<span className="deliveryPersonName">Shanu Ss</span></div>
                            <div className="deliveryAddress">Ballia,Bansdih Ballia, 277202</div>
                            <div className="deliveryContactDetails">Contact Number: <span className="deliveryContactnumber">7355913935</span></div>
                        </div>


                        <div className="addressSection">
                           {data &&  <PriceDetails data={data} selectItem = {selectItem}  setSelectChange = {setSelectChange} setGlobalPrice={setGlobalPrice} checkOutHandler={checkOutHandler}/>}
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    )
}

export default Payment;