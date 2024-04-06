import { useState } from "react";
import "./SignUp.css";
import ExitPage from "../ExitPage/ExitPage";


function SignUp(props){

    const {handleCrossInPayment} = props;

    const [style, setStyle] = useState("eknejnk");

    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");



    const [crossFlag, setCrossFlag] = useState(false);

    function onClickHandler(){
        console.log("hello");
        setCrossFlag(true);
    }



    function onChangeHandler(e){
        setPhoneNumber(e.target.value);
        if(e.target.value.length===10 && flag){
            setStyle("lrkfmrf");
        }
        else{
            setStyle("eknejnk");
        }
    }


    function checkBoxHandler(e){
        if(e.target.checked){
            setFlag(true);
            console.log(e.target.checked);
        }
        else{
            setFlag(false);
            console.log(e.target.checked);

        }

        if(phoneNumber.length===10 && e.target.checked && flag1){
            setStyle("lrkfmrf");
        }

        else{
            setStyle("eknejnk");
        }
    }


    function checkBoxHandler1(e){
        if(e.target.checked){
            setFlag1(true);
            console.log(e.target.checked);
        }
        else{
            setFlag1(false);
        }

        if(phoneNumber.length===10 && flag && e.target.checked){
            setStyle("lrkfmrf");
        }
        else{
            setStyle("eknejnk");
        }
    }

    return(
        <div className="eodijjhdbhedeoidj">
            {
                !crossFlag ? <>
                <div className="ekdnedn">
                <p onClick={onClickHandler} className="kedned">⨯</p>

                <img style={{height:"20px", width:"50px"}} src="https://tandym-api.s3.amazonaws.com/ee43fd9e107b46ab7ec29f2323787983f1666652225528.png" alt="" />

                <div></div>
            </div>


            <div className="lkemdemd">
                <h2>Your phone number is your digital card</h2>
                <p>We use your phone number to securely identify you only when you log in and pay.</p>
                <input onChange={onChangeHandler} className="jn4iojo" type="number" placeholder="Phone Number"/>

                <div>
                    <div>
                        <div className="eoe"> 
                            <input className="ekjnd" type="checkbox" onChange={checkBoxHandler}/>
                            <p>I consent to be contacted by, or on behalf of, Tandym via automated means for my account.</p>
                        </div>



                        <div className="eoe"> 
                            <input className="ekjnd" type="checkbox" onChange={checkBoxHandler1}/>
                            <p>I certify that I have read and agree to the Electronic Communications Disclosure, Terms & Conditions and Privacy Notice.</p>
                        </div>

                        <div>
                            <button className={style}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
                </>:<>
                <ExitPage handleCrossInPayment={handleCrossInPayment} renderText = "signup"/>
                </>
            }
        </div>
    )
}

export default SignUp;