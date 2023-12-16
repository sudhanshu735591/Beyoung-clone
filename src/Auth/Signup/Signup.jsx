import "./SignUp.css";
import { createPortal } from "react-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
                setError(res.message)
            }
            else{
                setError("Data Submitted Successfully !!");
            }
            
            console.log("error is ", res.message);
            console.log("eres is ", res);

        }

        catch(error){
            console.log(error);
        }
    }

    const handleButtonClick = (e)=>{
        e.preventDefault();
        fetchApi();
    }


    const handleLoginText = (e)=>{
        setText(e.target.innerText);
    } 

    const handleSignText = (e)=>{
        setText(e.target.innerText);
    } 

    return (
        <div>
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
                                            <input type="text" placeholder="Enter Username" onChange={(e)=>setUserName(e.target.value)}/>
                                            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                                            <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                                            <button className="SignupButton">Submit</button>
                                        
                                            <p style={{color:"green", fontSize:"13px"}}>{error}</p>
                                        </div>
                                    </form>: <form onSubmit={handleButtonClick}>
                                        <div className="SignupPage">
                                            <input type="text" placeholder="Enter Username" onChange={(e)=>setUserName(e.target.value)}/>
                                            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                                            <button className="SignupButton">Submit</button>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}