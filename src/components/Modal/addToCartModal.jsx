import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./addToCartModel.css";
import Button from '../button/button';
import UserContext from '../../ContextApi/UserContext';


const style = {
    position: 'absolute',
    top: ' 28%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 240,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ clickCart, onClose, setClickId }) {

    const [selectNumber, setSelectNumber] = React.useState();

    const {token} = React.useContext(UserContext);

    const [selectSize, setSelectSize] = React.useState();


    let [flag, setFlag] = React.useState(false);

    const addToCart = async ()=>{

        try{
            let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${setClickId._id}`,{
                method:"PATCH",
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("Token")}`,
                    "projectID":"zx5u42 9ht9oj",
                    "Content-Type": "application/json",
                },

                body:JSON.stringify({
                    "quantity" : `${parseInt(selectNumber)}`,
                    "size" : `${selectSize && selectSize}`,
                })
            })
    
            let res = await data?.json();

            console.log("response", selectSize, "selectNumber", selectNumber);

            {res.status!=="fail" ? localStorage.setItem("data", JSON.stringify(res.data?.items)): alert("Data already exist")};
        }

        catch(error){
            console.log(error);
        }
    }


    function onClickHandler(){
        if(!selectNumber && !selectSize){
            setFlag(true);
        }
        else{
            setFlag(false);
            addToCart();
        }
    }

    return (
        <div>
            <Modal
                open={clickCart}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='modelBox'>
                            {flag && <div style={{margin:"auto", color:"red" , fontSize:"15px"}}>Please Select All Data</div>}
                            <div className='modelDetails'>
                                {
                                    <div className='modeltextbox'>
                                        <div>
                                            <img className='modelImage' src={setClickId.displayImage} />
                                        </div>

                                        <div className='textData'>{setClickId.name}</div>
                                    </div>
                                }
                            </div>

                            <div className='textBoxDetails'>
                                <div className='dropDown' style={{fontSize:"10px"}}>Quantity
                                    <select required className='optionValue' onChange={(e)=>setSelectNumber(parseInt(e.target.value))}>
                                        <option>Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>

                                <div className='dropDown' style={{fontSize:"10px"}}>Size
                                    <select required className='optionValue' onChange={(e)=>setSelectSize(e.target.value)}>
                                        <option>Select</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>
                            </div>

                            <div className='favaddbutton'>
                                <Button onClick = {onClickHandler} className="addCartButtonStyle" text = "Add To Cart"/>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}