
import "./Upi.css";
function Upi(){
    return(
        <div className="upiBox">
            <div className="upiHeadline">Select & Pay Using UPI</div>
            <div className="PaymentText">Payment will be completed on your UPI App.</div>
            <input className="UpiInput" type="text" placeholder="Enter Your UPI ID"/>
            <div className="upiText">
                <div>100% Secured By </div>
                <img src="https://www.beyoung.in/desktop/images/form/paytm1.png"/>
            </div>
        </div>
    )
}

export default Upi;