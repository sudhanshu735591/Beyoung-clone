// import "./checkout.css"

import { useContext } from "react";
import Button from "../../components/button/button";
import UserContext from "../../ContextApi/UserContext";





function PriceDetails(props){

    let sum = 0;
    let item = 0;
    const {data, selectItem, setSelectChange,setGlobalPrice,checkOutHandler} = props;
    // const { setWishListDataIter} = useContext(UserContext);
    // const {setWishListFlag} = useContext(UserContext);

    const {setdata} = useContext(UserContext)
    

    const removeWishListData = async()=>{
        const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart",{
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'zx5u429ht9oj',
            }
        })
    
        const res = await data.json();
        console.log("response", res);
        localStorage.setItem("cartLength",res?.data?.items?.length)
        setdata("");
    }

       
    return(
        <div className="checkOutPrice_Text">
        <div style={{ borderBottom: "1px solid", display:"flex", fontSize:"12px", padding:"10px 0px" }}>
            <h3>PRICE DETAILS  ({item = data.reduce((acc, val) => acc + parseInt(val.quantity), 0)} items)</h3>
            {setSelectChange(item)}
            {localStorage.setItem("setSelectChange", item)}
        </div>

        <div className="detailsandnumber">
            <div className="checkOutDetailsBox">
                <div>Total MRP (Inc. of Taxes)</div>

                {
                    !selectItem ?  sum = data.reduce((acc, val) => acc + parseInt(val.product.price * val.quantity), 0):
                    sum = data.reduce((acc, val) => acc + parseInt(val.product.price * selectItem),0)

                }
                {localStorage.setItem("sum", sum)}
                
                {
                    setGlobalPrice(sum)
                }

            </div>
        </div>

        <div className="detailsandnumber">
            <div className="checkOutDetailsBox">
                <div>Beyoung Discount</div>
                <div>0</div>
            </div>
        </div>

        <div className="detailsandnumber">
            <div className="checkOutDetailsBox">
                <div>Shipping</div>
                <div>Free</div>
            </div>
        </div>

        <div className="detailsandnumber">
            <div className="checkOutDetailsBox">
                <div>Cart Total</div>
                <div>₹{sum}</div>
            </div>
        </div>

        <div className="amountDetailsBox">
            <div className="amountDetails">
                <div>Total amount</div>
                <div>₹{sum}</div>
            </div>
            <Button onClick={checkOutHandler} className="checkOutButton" text="CHECKOUT SECURELY" />
            <Button className="checkOutButton" onClick = {removeWishListData} text = "Clear Cart"/>
        </div>
    </div>

    )
}

export default PriceDetails;