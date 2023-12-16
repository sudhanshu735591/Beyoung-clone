import "./SignUp.css";
import { createPortal } from "react-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper' ,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SignUp({ showModal, onClose }) {

    const handleClose = () => {
        onClose();
    }

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");


    const handleButtonClick = ()=>{}

    const fetchApi = async()=>{
        let data = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
            method :"POST",
            headers:{
                "projectID": "zx5u429ht9oj",
            },
            body:{
                username:username,
                password : password,
                email :email,
            }
        })

        let res = await data.json();
        console.log("signup fetch", res);
    }


    React.useEffect(()=>{
        fetchApi();
    },[])

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
                                <div>Login or SignUp</div>

                              <form onSubmit={handleButtonClick}>
                                <div className="SignupPage">
                                    <input type="text" placeholder="Enter Username" onChange={(e)=>setUserName(e.target.value)}/>
                                    <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                                    <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                                    <button className="SignupButton">Submit</button>
                                </div>
                              </form>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}