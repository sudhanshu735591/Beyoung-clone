// import "./checkout.css"

import Button from "../../components/button/button";


function PriceDetails(props){

    let sum = 0;
    let item = 0;
    const {data, selectItem, setSelectChange,setGlobalPrice,checkOutHandler} = props;
       
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
            <Button className="checkOutButton" text="CHECKOUT SECURELY" />
        </div>
    </div>

    )
}

export default PriceDetails;