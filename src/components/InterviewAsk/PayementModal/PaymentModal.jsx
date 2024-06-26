import { useState } from "react";
import "./PaymentModal.css";
import ApplyNow from "../ApplyNow/ApplyNow";
import SignUp from "../SignUp/SignUp";

function PayementModal(props){
    const {handleCrossInPayment} = props;
    const [state, setState] = useState(false);

    const [signUp, setSignUp] = useState(false);

    function applyNow(){
        setState(true);
        
    }

    function signUpHandler(){
        setState(true);

        setSignUp(true);
    }




    return(
        <div className="eodijeoidj">
            {
                !state ? <>
                <div className="toppp">
                    <div onClick={()=>handleCrossInPayment()} className="kedned">⨯</div>

                    <div>
                        <img style={{height:"20px", width:"50px"}} src="https://tandym-api.s3.amazonaws.com/ee43fd9e107b46ab7ec29f2323787983f1666652225528.png" alt="" />
                    </div>

                    <div>
                        
                    </div>
                </div>

                <div>
                    <h1 className="eejff">A digital credit or debit card with best-in-class rewards</h1>
                </div>


                <div className="ekjnekfn">
                    <div className="edkjnejd">
                        <svg height="20px" viewBox="0 0 18 19" fill="#1C1E1E" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex flex-col mt-0 self-center"><path d="M11.4062 0C8.07145 0 5.36194 2.70951 5.36194 6.04428C5.36194 7.27588 5.74089 8.43168 6.38511 9.39801C6.59353 9.36011 6.80196 9.32222 7.01038 9.32222H7.10512L8.07144 9.34117C7.2188 8.48852 6.70722 7.31377 6.70722 6.02534C6.70722 3.44846 8.8104 1.34528 11.4062 1.34528C14.002 1.34528 16.0863 3.44846 16.0863 6.04428C16.0863 7.33272 15.5747 8.50747 14.7221 9.36012L15.0442 9.26538C15.2147 9.20853 15.4042 9.17064 15.5936 9.17064C15.8779 9.17064 16.1621 9.24643 16.4273 9.37906C17.0716 8.43168 17.4505 7.27588 17.4505 6.04428C17.4505 2.70951 14.7221 0 11.4062 0Z"></path><path d="M14.3242 5.51377C14.5894 5.26745 14.4379 4.83166 14.0968 4.79376L12.5999 4.62323C12.5052 4.60429 12.4294 4.56639 12.3915 4.47165L11.7662 3.10743C11.6147 2.78532 11.1599 2.78532 11.0083 3.10743L10.3831 4.47165C10.3452 4.54744 10.2694 4.60429 10.1746 4.62323L8.69673 4.79376C8.33673 4.83166 8.2041 5.26745 8.46936 5.51377L9.56832 6.51799C9.62517 6.57484 9.66306 6.66958 9.64411 6.74537L9.34095 8.20433C9.26516 8.56434 9.64411 8.8296 9.96622 8.65907L11.2736 7.92012C11.3494 7.88222 11.4441 7.88222 11.5199 7.92012L12.8273 8.65907C13.1305 8.8296 13.5094 8.56434 13.4526 8.20433L13.1494 6.74537C13.1305 6.65063 13.1684 6.57484 13.2252 6.49905L14.3242 5.51377Z"></path><path d="M0.625045 15.2907C0.492411 15.4612 0.530307 15.7076 0.700835 15.8402L3.52403 17.9244C3.69456 18.0571 3.94087 18.0192 4.05456 17.8486L5.17247 16.3328L1.7619 13.7749L0.625045 15.2907Z"></path><path d="M15.3473 10.1559L12.7894 10.9707C12.7894 11.0275 12.7894 11.0844 12.7894 11.1412C12.7515 11.8801 12.2399 12.5054 11.5199 12.6759L11.3494 12.7138C10.402 12.9223 9.45461 13.0549 8.48828 13.0928L7.71143 13.1307C7.44617 13.1496 7.23774 12.9412 7.2188 12.6949C7.19985 12.4296 7.40827 12.2212 7.65459 12.2023L8.43144 12.1644C9.34093 12.1265 10.2315 12.0128 11.122 11.8044L11.2925 11.7665C11.5957 11.6907 11.8231 11.4254 11.842 11.1222C11.842 10.9328 11.7852 10.7622 11.6525 10.6107C11.5199 10.478 11.3494 10.4022 11.1599 10.3833L7.04827 10.2696C6.59352 10.2507 6.15773 10.4022 5.77878 10.6675L2.444 13.1496L5.96825 15.7644L9.41672 16.0676C10.023 16.1244 10.6104 15.9349 11.0841 15.5749L16.1052 11.577C16.2947 11.4254 16.3894 11.217 16.4084 10.9896C16.4273 10.7622 16.3515 10.5349 16.181 10.3643C15.9536 10.137 15.6315 10.0612 15.3473 10.1559Z"></path></svg>
                    </div>


                    <p style={{marginTop:"-10px"}}>Earn 5 points per $ on every order</p>
                </div>



                <div className="ekjnekfn">
                    <div className="edkjnejd">
                        <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 flex flex-col mt-0 self-center"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    </div>


                    <p style={{marginTop:"-10px"}}>Connect your bank for secure repayment</p>
                </div>



                <div className="ekjnekfn">
                    <div className="edkjnejd">
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="#1C1E1E" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex flex-col mt-0 self-center"><path d="M10.9742 5.51431C10.9742 4.99082 10.5416 4.56172 10.0139 4.56172H8.62115V3.48898C8.56059 2.09871 7.41004 0.991638 5.99996 0.991638C4.58988 0.991638 3.43067 2.09871 3.37877 3.48898V4.56172H1.88218C1.35448 4.56172 0.92194 4.99082 0.92194 5.51431L0.549957 13.1093C0.549957 14.1563 1.40638 15.0059 2.46178 15.0059H9.53813C10.5935 15.0059 11.45 14.1563 11.45 13.1093L10.9742 5.51431ZM4.49472 3.58338V3.54047C4.52932 2.74235 5.18678 2.11587 5.99996 2.11587C6.81313 2.11587 7.47059 2.74235 7.49654 3.54047V3.58338V4.5703H4.49472V3.58338ZM8.38757 9.58215L6.26813 11.7877C6.12107 11.9422 5.8875 11.9422 5.74043 11.7877L3.62099 9.58215C3.07599 9.01574 3.07599 8.09747 3.62099 7.53107C4.16599 6.96466 5.04837 6.96466 5.59337 7.53107L5.99996 7.96016L6.40655 7.53107C6.95155 6.96466 7.83392 6.96466 8.37892 7.53107C8.92393 8.09747 8.92393 9.01574 8.37892 9.58215H8.38757Z"></path></svg>
                    </div>


                    <p style={{marginTop:"-10px"}}>Support Import Image Racing</p>
                </div>



                <div className="ekjnekfn">
                    <div className="edkjnejd">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="#1C1E1E" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex flex-col mt-0 self-center"><path d="M11.4062 0C8.07145 0 5.36194 2.70951 5.36194 6.04428C5.36194 7.27588 5.74089 8.43168 6.38511 9.39801C6.59353 9.36011 6.80196 9.32222 7.01038 9.32222H7.10512L8.07144 9.34117C7.2188 8.48852 6.70722 7.31377 6.70722 6.02534C6.70722 3.44846 8.8104 1.34528 11.4062 1.34528C14.002 1.34528 16.0863 3.44846 16.0863 6.04428C16.0863 7.33272 15.5747 8.50747 14.7221 9.36012L15.0442 9.26538C15.2147 9.20853 15.4042 9.17064 15.5936 9.17064C15.8779 9.17064 16.1621 9.24643 16.4273 9.37906C17.0716 8.43168 17.4505 7.27588 17.4505 6.04428C17.4505 2.70951 14.7221 0 11.4062 0Z"></path><path d="M14.3242 5.51377C14.5894 5.26745 14.4379 4.83166 14.0968 4.79376L12.5999 4.62323C12.5052 4.60429 12.4294 4.56639 12.3915 4.47165L11.7662 3.10743C11.6147 2.78532 11.1599 2.78532 11.0083 3.10743L10.3831 4.47165C10.3452 4.54744 10.2694 4.60429 10.1746 4.62323L8.69673 4.79376C8.33673 4.83166 8.2041 5.26745 8.46936 5.51377L9.56832 6.51799C9.62517 6.57484 9.66306 6.66958 9.64411 6.74537L9.34095 8.20433C9.26516 8.56434 9.64411 8.8296 9.96622 8.65907L11.2736 7.92012C11.3494 7.88222 11.4441 7.88222 11.5199 7.92012L12.8273 8.65907C13.1305 8.8296 13.5094 8.56434 13.4526 8.20433L13.1494 6.74537C13.1305 6.65063 13.1684 6.57484 13.2252 6.49905L14.3242 5.51377Z"></path><path d="M0.625045 15.2907C0.492411 15.4612 0.530307 15.7076 0.700835 15.8402L3.52403 17.9244C3.69456 18.0571 3.94087 18.0192 4.05456 17.8486L5.17247 16.3328L1.7619 13.7749L0.625045 15.2907Z"></path><path d="M15.3473 10.1559L12.7894 10.9707C12.7894 11.0275 12.7894 11.0844 12.7894 11.1412C12.7515 11.8801 12.2399 12.5054 11.5199 12.6759L11.3494 12.7138C10.402 12.9223 9.45461 13.0549 8.48828 13.0928L7.71143 13.1307C7.44617 13.1496 7.23774 12.9412 7.2188 12.6949C7.19985 12.4296 7.40827 12.2212 7.65459 12.2023L8.43144 12.1644C9.34093 12.1265 10.2315 12.0128 11.122 11.8044L11.2925 11.7665C11.5957 11.6907 11.8231 11.4254 11.842 11.1222C11.842 10.9328 11.7852 10.7622 11.6525 10.6107C11.5199 10.478 11.3494 10.4022 11.1599 10.3833L7.04827 10.2696C6.59352 10.2507 6.15773 10.4022 5.77878 10.6675L2.444 13.1496L5.96825 15.7644L9.41672 16.0676C10.023 16.1244 10.6104 15.9349 11.0841 15.5749L16.1052 11.577C16.2947 11.4254 16.3894 11.217 16.4084 10.9896C16.4273 10.7622 16.3515 10.5349 16.181 10.3643C15.9536 10.137 15.6315 10.0612 15.3473 10.1559Z"></path></svg>

                    </div>


                    <p style={{marginTop:"-10px"}}>Get a decision with no hard credit pull</p>
                </div>


            <div className="edjned">
                <div className="edkjenjdk">
                    <div className="edkjendke">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-brand-evergreen"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                        </div>


                        <div className="edkekd">Credit</div>
                    </div>


                    <p>Pay over Time. Credit lines upto $5000, subject to approval.</p>

                    <button onClick={applyNow} className="edkekdedkjed">Apply Now</button>
                </div>


                <div className="edkjenjdk">
                    <div className="edkjendke">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-brand-evergreen"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                        </div>


                        <div className="edkekd">Debit</div>
                    </div>


                    <p>Connect your bank and pay all at once up to $10,000.</p>

                    <button onClick={signUpHandler} className="edkekdedkjed">Sign up</button>
                </div>


            
            </div>


            <div className="edkje">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-brand-evergreen"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>

                <div>$80 on your first order of $800 or more</div>
                </div>
                </>:
                    (
                        <>
                            {signUp ? (
                                <SignUp handleCrossInPayment={handleCrossInPayment}/>
                            ) : (
                                <ApplyNow handleCrossInPayment={handleCrossInPayment} />
                            )}
                        </>
                    )
            }
        </div>
    )
}

export default PayementModal;