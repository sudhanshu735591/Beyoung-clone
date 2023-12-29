import { useContext, useState } from "react";
import SignUpPage from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";
import UserContext from "../../ContextApi/UserContext";

function Signup(){

    const[showModal, setShowModal] = useState(false);

    const {setSuccessMessage,successMessage} = useContext(UserContext);
    const {token, setToken} = useContext(UserContext);

    function handleCartClick(){
        setShowModal(true);
    }

    function Logout(){
        setToken("");
        setSuccessMessage("");
    }

    const handleClose = ()=>{
        setShowModal(false);
    }


    return(
        <div>
            {!successMessage && !token ? <div style={{cursor:"pointer", fontSize:"10px"}} onClick={handleCartClick}> LOGIN | SIGN UP </div>:<div style={{cursor:"pointer"}} onClick={Logout} className="logout">LOGOUT</div>}
            {showModal && createPortal(<SignUpPage showModal = {showModal} onClose = {handleClose}/>,  document.body)}
        </div>
    )
}

export default Signup;