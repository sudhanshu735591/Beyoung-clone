
import { useContext, useEffect, useState } from "react"
import Button from "../components/button/button"
import "./checkout.css"
import UserContext from "../ContextApi/UserContext"
import { json, useParams } from "react-router-dom";

function CheckOut() {

    const { token } = useContext(UserContext);

    const { setCartCount } = useContext(UserContext);

    const [data, setdata] = useState("");

    const [wishlistDataIter, setWishListDataIter] = useState([]);


    let sum = 0;

    let item = 0;

    const handleSelectedItem = (e) => {
        setSelectedItem(e.target.value);
        console.log(e.target.value);
    }



    const fetchCheckOut = async () => {
        try {
            let data = await fetch(" https://academics.newtonschool.co/api/v1/ecommerce/cart", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': 'zx5u429ht9oj',
                    "Content-Type": "application/json",
                }
            });

            let res = await data.json();
            setdata(res.data.items);
            setCartCount(res.data.items.length);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCheckOut();
    }, [])


    const deleteItem = async (val) => {

        try {
            let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${val}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': 'zx5u429ht9oj',
                    "Content-Type": "application/json",
                }
            });

            let res = await data.json();
            setdata(res.data.items);


            if (localStorage.getItem("data") !== null) {
                let currentData = JSON.parse(localStorage.getItem("data"));
                let index;

                for (let i = 0; i < currentData.length; i++) {
                    if (currentData[i].product._id === val) {
                        index = i;
                    }

                    else {
                        console.log("no data");
                    }
                }

                currentData.splice(index, 1);
                localStorage.removeItem("data");
                localStorage.setItem("data", JSON.stringify(currentData));
            }
        }

        catch (error) {
            console.log(error);
        }
    }




    const wishListItem = async (val) => {

        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
            method: "PATCH",

            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                "productId": val,
            }),
        });
        let res = await data?.json();

        wishListIter()

    }


    const wishListIter = async () => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
            method: "GET",

            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
            },
        });

        let res = await data.json();
        setWishListDataIter(res.data.items);
    }

    const deleteWishList = async(id)=>{
        console.log("delete id", id);
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,{
            method: "DELETE",

            headers: {  
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
            },
        })

        let res = await data.json();

        wishListIter();
    }


    useEffect(() => {
        fetchCheckOut();
        wishListIter();
    }, []);

    return (
        <div className="checkoutSection">
            {
                data ? <div className="checkoutSection">
                    <div className="checkoutNav">
                        <div className="checkoutText">BEYOUNG.</div>
                        <div className="checkoutPayText">100% SECURE PAYMENT</div>
                    </div>

                    <div className="checks">
                        <div className="circleBox">
                            <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Cart.png" /></div>
                            <div className="checkOutText">My Cart</div>
                        </div>

                        <div className="circleBox">
                            <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Location-Outline.png" /></div>
                            <div className="checkOutText">Address</div>
                        </div>

                        <div className="circleBox">
                            <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Payment-outline.png" /></div>
                            <div className="checkOutText">Payment</div>
                        </div>
                    </div>


                    <div className="checkOut">
                        <div className="innerCheckOutBox">
                            {
                                data && data.map((val) => {
                                    return (
                                        <div className="checkoutBox">
                                            <div>
                                                <div className="innerCheckOut">
                                                    <div>
                                                        <div className="innerOptionBox">
                                                            <img style={{ height: "116px", width: "84px" }} alt="image" className="" src={val.product.displayImage} />
                                                            <select onChange={handleSelectedItem}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="productBox">
                                                        <div style={{ fontWeight: "700", fontSize: "10px" }}>
                                                            {val.product.name}
                                                        </div>

                                                        <div style={{ fontWeight: "700" }}>
                                                            {`₹ ${parseInt(val.product.price * val.quantity)}`}
                                                        </div>

                                                        <div>
                                                            <div>{val.product.color}</div>
                                                            <div>
                                                                {`Size : ${val.size}`}
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div className="wishlistContainer" style={{ display: "flex", gap: "203px" }}>
                                                    <Button text="Remove" className="wishListButton" onClick={() => deleteItem(val.product._id)} />
                                                    <div style={{ border: "1px solid #cfc4c4" }}></div>
                                                    <Button text="Wishlist" className="wishListButton" onClick={() => wishListItem(val.product._id)} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        <div className="checkOutPrice_Text">
                            <div style={{ borderBottom: "1px solid" }}>

                                <h3>PRICE DETAILS  ({item = data.reduce((acc, val) => acc + parseInt(val.quantity), 0)} items)</h3>
                            </div>


                            <div className="detailsandnumber">
                                <div className="checkOutDetailsBox">
                                    <div>Total MRP (Inc. of Taxes)</div>

                                    {
                                        sum = data.reduce((acc, val) => acc + parseInt(val.product.price * val.quantity), 0)
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
                                    <div>{sum}</div>
                                </div>
                            </div>

                            <div className="amountDetailsBox">
                                <div className="amountDetails">
                                    <div>Total amount</div>
                                    <div>{sum}</div>
                                </div>
                                <Button className="checkOutButton" text="CHECKOUT SECURELY" />
                            </div>
                        </div>
                    </div>


                    {wishlistDataIter.length>0 &&<div className="wishListBox">
                    <div className="wishListParentText">Add from wishlist</div>

                        
                        <div className="wishListDataIter">

                            {
                                wishlistDataIter && wishlistDataIter.map((val)=>{
                                    return(
                                        <div className="wishListDetails">
                                            <div className="wishListImage">
                                                <img className="wishListImage" src = {val.products.displayImage}/>
                                            </div>

                                            <div className="wishListText"> 
                                                <p>Clothes Category Data</p>
                                                <p style={{fontWeight:"600"}}>{`₹${val.products.price} (0% OFF)`}</p>
                                                <Button onClick = {()=>deleteWishList(val.products._id)} className= "wishListAddButton" text = "Delete"></Button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>}


                </div> : <p>No Data Found</p>
            }
        </div>
    )
}

export default CheckOut


