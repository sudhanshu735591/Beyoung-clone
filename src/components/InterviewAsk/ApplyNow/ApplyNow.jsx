
import { useState } from "react";
import "./ApplyNow.css";
import ExitPage from "../ExitPage/ExitPage";

function ApplyNow(props){
    const {handleCrossInPayment} = props;
    const [checkNumber, setCheckNumber] = useState();

    const [myClass, setMyClass] = useState("ekjnen");

    const [flag, setFlag] = useState(false);


    function onChangeHandler(e){
        setCheckNumber(e.target.value);

        if(e.target.value.length===10){
            setMyClass("ekjjf")
        }
        else{
            setMyClass("ekjnen")
        }
    }

    function handleCross(){
        setFlag(true);
    }

    return(
        <div className="ekdne3jdn">
             {!flag ? <>
                <div className="top">
                    <p onClick={handleCross} className="kedned">⨯</p>
                    <img style={{height:"20px", width:"50px"}} src="https://tandym-api.s3.amazonaws.com/ee43fd9e107b46ab7ec29f2323787983f1666652225528.png" alt="" />

                    <div>
                        
                    </div>
                </div>

                <div className="edkekd">
                    <h1>Your phone number is your digital card</h1>
                    <p>We use your phone number to securely identify you only when you log in and pay.</p>
                    <input onChange={onChangeHandler} className="kjnrjnf" type="number" placeholder="Mobile Phone Number" />
                </div>



                <div className="ekjenk">
                    <div className="ekjnejn">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class=" w-5 flex self-center mt-0 " width="24" height="24"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
                        </div>

                        <div>Get a decision with no hard credit pull</div>

                    </div>





                    <div className="ekjnejn">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class=" w-5 flex self-center mt-0 " width="24" height="24"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path></svg>
                        </div>

                        <div>Fast & digital - no more plastic cards</div>
                    </div>





                    <div className="ekjnkenf">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class=" w-5 flex self-center mt-0 " width="24" height="24"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div>$80 on your first order of $800 or more</div>
                    </div>
                </div>




                <div>
                    <button className={myClass}>Get a Decision now</button>
                </div>

            </>:<> 
            <ExitPage handleCrossInPayment={handleCrossInPayment}/>
            </>}
        </div>
    )
}


export default ApplyNow;