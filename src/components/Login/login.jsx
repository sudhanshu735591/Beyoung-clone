import { createPortal } from "react-dom";
import "./login.css";
import SignUpPage from "../../Auth/Signup/Signup";
import { useState } from "react";


function Login(){

    const[showModal, setShowModal] =  useState(false);

    function handleCartClick(){
        setShowModal(true);
    }

    const handleClose = ()=>{
        setShowModal(false);
    }

   
    return(
        <div>
            <div style={{cursor:"pointer"}} onClick={handleCartClick}> LOG IN |</div>
            {showModal && createPortal(<SignUpPage showModal = {showModal} onClose = {handleClose}/>,  document.body)}
        </div>
    )
}


export default Login;