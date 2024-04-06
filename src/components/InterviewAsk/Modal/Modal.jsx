import { useState } from "react";
import "./Modal.css";
import PayementModal from "../PayementModal/PaymentModal";


function Modal(props){
    let {img, hTag, handleCross} = props;

    const [state, setState] = useState(false);


    function PaymentPage(){
        setState(true)
    }

   
    return(
        <div className="ednedje">
            {!state ? <>
                <div className="modalContent">
                <div className="top">
                    <p onClick={()=>handleCross()} className="kedned">⨯</p>
                    <img style={{height:"20px", width:"50px"}} src={img} alt="" />

                    <div>
                        
                    </div>
                </div>


                <div>
                    <h1>{hTag}</h1>
                </div>


                <div className="edjejd">
                    <p>IIR Pay Total</p>
                    <p>$26.86</p>
                </div>


                <div className="edjejd">
                    <p>5 points per $ on every order</p>
                    <p>134 pts</p>
                </div>


                <div className="ejnedj" onClick={PaymentPage}>
                    <h2>Learn More & Apply</h2>
                </div>
            </div></>:<>{<PayementModal handleCrossInPayment={handleCross}/>}</>}
        </div>
    )
}

export default Modal;


