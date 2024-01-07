import CheckOutBar from "../../CheckOut/CheckOutBar/CheckOutBar";
import CheckOutNav from "../../CheckOut/CheckOutNavBar/CheckOutNav";
import "./Payment.css";


function Payment(){
    return(
        <div>
            <CheckOutNav/>
            <CheckOutBar/>

            <div className="paymentSection">
                <div className="paymentOption">
                    <div className="selectPayment">
                        <ul>
                            <li>
                                <div className="sectiontext">
                                    <input type="radio"/>
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/paytm-icon-mobile.png"/>
                                    <p className="paywithpaytm">Pay with Paytm</p>
                                </div>
                            </li>



                            <li>
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/card-cradit.png"/>
                                    <p className="paywithpaytm">Debit/Credit Card</p>
                                </div>
                            </li>



                            <li>
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/upi.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">UPI</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>google Pay, Phone Pay, & More+</p>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/form/wallet.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Wallets Offers</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>Paytm, Mobikwik, & More+</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="sectiontext">
                                    <img className="paytmImage" src="https://www.beyoung.in/mobile/images/payment/netbanking.png"/>
                                    <div className="upisection">
                                        <p className="paywithpaytm">Netbanking</p>
                                        <p style={{fontSize:"9px" , cursor:"pointer"}}>All Indian Banks</p>
                                    </div>
                                </div>
                            </li>



                            <li>
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

                    <div></div>
                </div>

                <div className="addressSection"></div>
            </div>
        </div>
    )
}

export default Payment;