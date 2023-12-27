import { useState } from "react";
import SignUpPage from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";

function Signup(){

    const[showModal, setShowModal] = useState(false);

    function handleCartClick(){
        setShowModal(true);
    }

    const handleClose = ()=>{
        setShowModal(false);
    }
    return(
        <div>
            <div style={{cursor:"pointer"}} onClick={handleCartClick}> LOGIN | SIGN UP </div>
            {showModal && createPortal(<SignUpPage showModal = {showModal} onClose = {handleClose}/>,  document.body)}

        </div>
    )
}

export default Signup;