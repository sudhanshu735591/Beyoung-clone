import { useContext, useEffect, useState } from "react";
import SignUpPage from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";
import UserContext from "../../ContextApi/UserContext";

function Signup(){

    const[showModal, setShowModal] = useState(false);

    const {setSuccessMessage,successMessage} = useContext(UserContext);
    const {token, setToken} = useContext(UserContext);


    function checkToken(){
        if(localStorage.getItem("Token")){
            setToken(localStorage.getItem("Token"));
        }
    }

    useEffect(()=>{
        checkToken();
    },[]);

    function handleCartClick(){
        setShowModal(true);
    }

    function Logout(){
        setToken(localStorage.removeItem("Token"));
        setSuccessMessage("");
    }

    const handleClose = ()=>{
        setShowModal(false);
    }

    return(
        <div>
            {!localStorage.getItem("Token") && !token ? <div style={{cursor:"pointer", fontSize:"14px" , fontWeight:"400"}} onClick={handleCartClick}> LOGIN | SIGN UP </div>:<div style={{cursor:"pointer" , fontWeight:"400"}}  className="logout"><span>MY ACCOUNT | </span><span onClick={Logout}>LOGOUT</span></div>}
            {showModal && createPortal(<SignUpPage showModal = {showModal} onClose = {handleClose}/>,  document.body)}
        </div>
    )
}

export default Signup;