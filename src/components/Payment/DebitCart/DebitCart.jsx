
import "./DebitCart.css";

function DebitCard(){
    return (
        <div className="debitCardBox">
            <div className="debitCardChildBox">
                <div className="debitcardheading">Enter Your Debit/Credit Card Details</div>
                <div className="debitCardText">We do not store your card details.</div>
            </div>

            <div className="debitCardInput">
                <input className="debitCardNum" type="number" placeholder="Card Number"/>
            </div>

            <div className="inputcardname">
                <input className="debitCardNum" type="text" placeholder="Name On The Card"/>
            </div>

            <div className="validity">
                <div className="validityText">VALID THROUGH (MM/YY)</div>
                <div className="cardmmyy">
                    <input className="debitInputmm" type="text" placeholder="MM"/>
                    <input className="debitInputText" type="text" placeholder="YY"/>
                    <input className="cvv" type="number" placeholder="CVV"/>
                </div>
            </div>

            <div className="debitCardSecured">
                <div className="textper">100% SECURED BY</div>
                <img style={{height:"15px"}} src="https://www.beyoung.in/desktop/images/form/razor.png"/>
            </div>
        </div>
    )
}

export default DebitCard;