import { useState } from "react";
import CheckOutBar from "../../CheckOut/CheckOutBar/CheckOutBar";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import "./Payment.css";
import Paytm from "./Paytm/Paytm";
import DebitCard from "./DebitCart/DebitCart";
import Upi from "./UPI/Upi";


function Payment(){

    const [text, setText] = useState("");

    function onHandleClick(e){
        console.log(e.target.innerText);
        setText(e.target.innerText);
    }


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


                            <li className="paymentli">
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/wallet.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Wallets Offers</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>Paytm, Mobikwik, & More+</p>
                                    </div>
                                </div>
                            </li>

                            <li className="paymentli">
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/payment/netbanking.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Netbanking</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>All Indian Banks</p>
                                    </div>
                                </div>
                            </li>



                            <li className="paymentli">
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
                       {text==="Pay With Paytm" ? <Paytm/> : text==="Debit/Credit Card" ? <DebitCard/>: text==="UPI"? <Upi/>:<Paytm/>}
                       {/* text==="Debit/Credit Card"? */}
                    </div>
                </div>

                <div className="addressSection">

                </div>
            </div>
        </div>
    )
}

export default Payment;