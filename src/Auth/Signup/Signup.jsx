import "./SignUp.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserContext from "../../ContextApi/UserContext";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper' ,
    boxShadow: 24,
};

export default function SignUpPage({ showModal, onClose }) {
    const handleClose = () => {
        onClose();
    }

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    let [error , setError] = React.useState("");

    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPasswword] = React.useState("");

    const [loginMessage, setLoginMessage] = React.useState("");

    const {setSuccessMessage} = React.useContext(UserContext);

    const {successMessage} = React.useContext(UserContext);


    const {setToken} = React.useContext(UserContext);

    let [text, setText] = React.useState("or Signup");

    const fetchApi = async()=>{
        try{
            
            let data = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
            method :"POST",

            headers:{
                "projectID": "zx5u429ht9oj",
                "Content-Type": "application/json",
            },

            body:JSON.stringify({
                "name":username,
                "password": password,
                "email" :email,
                "appType" : "ecommerce"
            })
        })

            let res = await data.json();

            if(res.message){
                setError(res.message);
            }
            else{
                setError("Data Submitted Successfully !! Login Please");
            }
        }

        catch(error){
            console.log(error);
        }
    }

    const fetchLogin = async ()=>{
        let data = await fetch(" https://academics.newtonschool.co/api/v1/user/login", {
            method:"POST",
            headers:{
                "projectID": "zx5u429ht9oj",
                "Content-Type": "application/json",
            },

            body:JSON.stringify({
                "email":loginEmail,
                "password": loginPassword,
                "appType" : "ecommerce"
            })
        })

        let res = await data.json();
        console.log("Success Message", res);
        if(res.message){
            setLoginMessage("Wrong email or password !!");
            setLoginEmail("");
            setLoginPasswword("");
        }
        else{
            // setLoginSuccess("success");
            setLoginMessage("");
            setLoginEmail("");
            setLoginMessage("")
            console.log("res.status", res.status);
            
        }

        if(res.status==="success"){
            setSuccessMessage(true);
            console.log("successMessage", successMessage);
            setToken(res.token);
        }
    }

    const handleLoginClick= (e)=>{
        e.preventDefault();
        fetchLogin();
    }


    const handleButtonClick = (e)=>{
        e.preventDefault();
        fetchApi();
        setPassword("");
        setUserName("");
        setEmail("");
    }


    const handleLoginText = (e)=>{
        setText(e.target.innerText);
        setLoginEmail("");
        setLoginPasswword("");
    } 

    const handleSignText = (e)=>{
        setText(e.target.innerText);
    } 

    return (
        <div>
            {
                !successMessage?

                <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                    
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className="signUpBox">
                            <div>
                                <img className="signUpImage" src="https://www.beyoung.in/images/login-and-signup-image.jpg" />
                            </div>
                            <div className="loginContainer">
                                
                                <div className="loginSignUp">
                                    <div onClick={handleLoginText}>Login</div>
                                    <div style={{color:"black", textDecoration:"none", cursor:"auto"}}>or</div>
                                    <div onClick={handleSignText}> Signup</div>
                                </div>

                                {
                                    text==="Signup"?
                                    <form onSubmit={handleButtonClick}>
                                        <div className="SignupPage">
                                            <input required type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                                            <input required type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            <input required type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            <button className="SignupButton">Submit</button>
                                        
                                            <p style={{color:setLoginMessage?"darkRed":"green", fontSize:"13px"}}>{error}</p>
                                        </div>
                                    </form>: <form onSubmit={handleLoginClick}>
                                        <div className="SignupPage">
                                            <input required type="email" placeholder="Enter Email" value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
                                            <input required type="password" placeholder="Enter Password" value={loginPassword} onChange={(e)=>setLoginPasswword(e.target.value)}/>
                                            <button className="SignupButton">Submit</button>
                                            {/* <p>Forget Password</p> */}
                                            <p style={{color:"green", fontSize:"15px"}}>{loginMessage}</p>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>: null
            }

          
            
        </div>
    );
}

