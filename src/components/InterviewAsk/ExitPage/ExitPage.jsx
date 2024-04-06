import { useState } from "react";
import "./ExitPage.css";
import ApplyNow from "../ApplyNow/ApplyNow";
import SignUp from "../SignUp/SignUp";


function ExitPage(props){

    const {handleCrossInPayment, renderText} = props;

    const [flag, setFlag] = useState(true);


    function handleContinue(){
        setFlag(false);
    }


    return(
        <div>
            {flag ? <>
                <div className="top">
                <div></div>
                <img style={{height:"20px", width:"50px"}} src="https://tandym-api.s3.amazonaws.com/ee43fd9e107b46ab7ec29f2323787983f1666652225528.png" alt="" />

                <div>
                    
                </div>
            </div>



            <div className="ekjnekdn">
                <h2>Are you sure want to exit?</h2>
                <p>Your progress will be lost.</p>
            </div>


            <div className="ejejn">
                <button onClick={()=>handleCrossInPayment()} className="edkjeodoed">Yes, exit</button>
            </div>



            <div onClick={handleContinue} className="eoiojdoi3ej">
                <h3 className="eidjeodj">No, continue</h3>
            </div></>:
            (
                <>
                {
                    renderText==="signup"?(
                        <SignUp handleCrossInPayment={handleCrossInPayment}/>
                    ):(
                        <><ApplyNow handleCrossInPayment={handleCrossInPayment}/></>
                    )
                }
                </>
            )
            }


        </div>
    )
}


export default ExitPage;