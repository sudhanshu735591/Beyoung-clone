import { useContext, useEffect, useState } from "react";
import SignUpPage from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";
import UserContext from "../../ContextApi/UserContext";

function Signup(){

    const[showModal, setShowModal] = useState(false);

    const {setSuccessMessage,successMessage} = useContext(UserContext);
    const {token, setToken} = useContext(UserContext);
    console.log("token", token);


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
        // setToken("");

        setToken(localStorage.removeItem("Token"));
        // console.log("local remove token is",{token});

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