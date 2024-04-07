import { useState } from "react";
import "./Interview.css";

import Swal from "sweetalert2";
import Modal from "./Modal/Modal";

function InterviewAsk(){

    const [timer, setTimer] = useState(false);


    function loader(){
        Swal.fire({
            imageUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzhsNGppemg4cXNwenhqdXBidTJlOXloYXBqN3B1MjRxZ2d6czNwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif',
            imageWidth: 400,  // Image width
            imageHeight: 500,  // Image height
            showConfirmButton: false,  // Hide the confirm button
            allowOutsideClick: false,  

          
          });
        setTimeout(() => {
            Swal.close();
            setTimer(true);
        }, 2000);


    }


    function handleCross(){
        setTimer(false);
    }


    return(
        <div className="efirofro">
            {timer && <Modal img = "https://tandym-api.s3.amazonaws.com/ee43fd9e107b46ab7ec29f2323787983f1666652225528.png" hTag = "Earn 5 points per $ on every order with our digital card" handleCross = {handleCross}/>} 
            <div className="rfijrifj">
                <img className="wmkoode" src="https://www.importimageracing.com/cdn/shop/files/Subaru-OEM-Thermostat-WRX-2002-2014-STI-2004-2020-21200AA072_2048x2048.webp?v=1711491394"/>
            </div>

            <div className="eiueie">
                <div className="ekjnejkn">Subaru OEM Thermostat WRX 2002-2014 / STI 2004-2020 | 21200AA072</div>

                <div className="eded">
                    <div className="edoieod">
                        <p>SKU: sub21200AA072</p>
                        <p>Availability: 19 In Stock Learn more</p>
                        <p>Type: Cooling Thermostats</p>
                    </div>
                </div>


                <div className="jednedn">
                    <h1 className="edkmekd">$32.75</h1>

                    <h1>$26.86</h1>

                    <h1 className="wdkn3">INSTANT DISCOUNT</h1>


                </div>

                <p style={{display:"flex"}}>Regular Price: $32.75 - Instant discount: $5.89 = $26.86</p>

                <img className="diedi" src="https://cdn.shopify.com/s/files/1/1398/9853/files/oemsubaru.png?v=1680197174" alt="image" />

                <p className="djend">Pay in 4 interest-free installments for orders over $50.00 </p>

                <p className="djend">Subtotal: $26.86</p>

                <div  onClick={loader} className="eidend">
                    <img style={{height:"20px", width:"50px"}} src="https://tandym-api.s3.amazonaws.com/ee43fd9e107b46ab7ec29f2323787983f1666652225528.png" alt="" />
                    <p className="djend">Save 80 on your first purchase of $800 or more paid with our digital card</p>
                </div>


            </div>

          
        </div>
    )
}

export default InterviewAsk;