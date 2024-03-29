import { useState } from "react";
import "./WalletOffer.css"

function WalletOffer(){

    const [selectedWallet , setSelectedWallet] = useState();

    const handleRadioClick = (wallet)=>{
        setSelectedWallet(wallet);

    }
    return(
        <div className="walletOfferBox">
            <div className="walletOfferTextBox">
                <div className="walletHeading">Select & Pay via your wallet</div>
                <div className="walletPaymentText">Payment will be completed on your wallet's website</div>
            </div>

            <div className="radioSectionBox">
                <div className="RadioBox">
                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Paytm")} checked={selectedWallet==="Paytm"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/mobile/images/form/paytm-wallet.png"/>
                            <div>Paytm</div>
                        </div>
                    </div>

                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Phonepay")} checked={selectedWallet==="Phonepay"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/desktop/images/form/phonepe.png"/> 
                            <div>Phonepay</div>
                        </div>
                    </div>


                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Mobikwik")} checked={selectedWallet==="Mobikwik"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/desktop/images/form/mobikwik.png"/>
                            <div>Mobikwik</div>
                        </div>
                    </div>



                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Amazonpay")} checked={selectedWallet==="Amazonpay"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/desktop/images/form/amazonpay.png"/>
                            <div>Amazonpay</div>
                        </div>
                    </div>



                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Freecharge")} checked={selectedWallet==="Freecharge"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/desktop/images/form/bajajpay.png"/>
                            <div>Freecharge</div>
                        </div>
                    </div>


                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Airtelmoney")} checked={selectedWallet==="Airtelmoney"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/desktop/images/form/airtelmoney.png"/>
                            <div>Airtelmoney</div>
                        </div>
                    </div>


                    <div className="radiowalletsection">
                        <input type="radio" onChange={()=>handleRadioClick("Jiomoney")} checked={selectedWallet==="Jiomoney"}/>
                        <div className="imagewalletSection">
                            <img src="https://www.beyoung.in/desktop/images/form/jiomoney.png"/>
                            <div>Jiomoney</div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}


export default WalletOffer;