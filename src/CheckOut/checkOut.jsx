import { useContext, useEffect, useState } from "react"
import Button from "../components/button/button"
import "./checkout.css"
import UserContext from "../ContextApi/UserContext";
import CheckOutNav from "./CheckOutNavBar/CheckOutNav";
import { useNavigate } from "react-router-dom";
import CheckOutBar from "./CheckOutBar/CheckOutBar";

function CheckOut() {

    const { token } = useContext(UserContext);

    const { setCartCount } = useContext(UserContext);

    const [data, setdata] = useState(0);

    // const [wishlistDataIter, setWishListDataIter] = useState([]);

    const {wishlistDataIter, setWishListDataIter} = useContext(UserContext);

    const {setWishListData} = useContext(UserContext);

    const {selectItem, setSelectedItem} = useContext(UserContext);

    const {selectChange,setSelectChange} = useContext(UserContext);

    const {globalPrice, setGlobalPrice} = useContext(UserContext);

    const [loader, setLoader] = useState(false);

    const {setAddToCartDataLength} = useContext(UserContext);


    let sum = 0;

    let item = 0;

    const handleSelectedItem = (e, val) => {
        const newQuantity = parseInt(e.target.value);
        // setSelectChange(e.target.value);

        setdata((prevData)=>{
            const newData = prevData.map((item)=>{
                if(item.product._id===val._id){
                    return{
                        ...item,
                        quantity :newQuantity,
                    }
                }
                return item;
            });

            return newData;
        })

    
    };

  
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

            setdata(res.data?.items);
            // console.log("data current is", res.data?.items);
            setAddToCartDataLength(res?.data?.items?.length);
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
            setAddToCartDataLength(res?.data?.items?.length);
            setdata(res.data.items);

            // if (localStorage.getItem("data") !== null) {
            //     let currentData = JSON.parse(localStorage.getItem("data"));
            //     let index;

            //     for (let i = 0; i < currentData.length; i++) {
            //         if (currentData[i].product._id === val) {
            //             index = i;
            //         }
            //     }

            //     currentData.splice(index, 1);
            //     localStorage.removeItem("data");
            //     localStorage.setItem("data", JSON.stringify(currentData));
            // }
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
        setLoader(true);
        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
            method: "GET",

            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
            },
        });

        let res = await data.json();


        setWishListDataIter(res.data?.items);
        setWishListData(res.data?.items);
        {res?.data && localStorage.setItem("WishListData", JSON.stringify(res.data?.items))};
        setLoader(false);
    }


    const deleteWishList = async(id)=>{
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


    const navigate = useNavigate();


    function checkOutHandler(){
        navigate("/address");
    }

    useEffect(() => {
        fetchCheckOut();
        wishListIter();
    }, []);

    return (
        <div className="checkoutSection">
           {loader?<img src="https://www.beyoung.in/beyoung-loader.gif"/>:
           
           
            data && data.length>0 ? <div className="checkoutSection">
                <CheckOutNav/>
                <CheckOutBar/>
                <div className="checkOut">
                    <div className="innerCheckOutBox">
                        {
                            data && data.map((val) => {
                                return (
                                    <div className="checkoutBox">
                                        <div className="childCheckOutBox">
                                            <div className="innerCheckOut">
                                                <div>
                                                    <div className="innerOptionBox">
                                                        <img style={{ height: "116px", width: "84px" }} alt="image" className="" src={val.product.displayImage} />
                                                        <select onChange={(e)=>handleSelectedItem(e, val.product)}>
                                                            <option>Select</option>
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

                                            <div className="wishlistContainer">
                                                <Button text="Remove" className="wishListButton" onClick={() => deleteItem(val.product._id)} />
                                                <div style={{ border: "1px solid #cfc4c4", position:"relative", right:"31%" }}></div>
                                                <Button text="Wishlist" className="wishListButton" onClick={() => wishListItem(val.product._id)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="checkOutPrice_Text">
                        <div style={{ borderBottom: "1px solid", display:"flex", fontSize:"12px", padding:"10px 0px" }}>
                            <h3>PRICE DETAILS  ({item = data.reduce((acc, val) => acc + parseInt(val.quantity), 0)} items)</h3>
                            {setSelectChange(item)}
                        </div>

                        <div className="detailsandnumber">
                            <div className="checkOutDetailsBox">
                                <div>Total MRP (Inc. of Taxes)</div>

                                {
                                    !selectItem ?  sum = data.reduce((acc, val) => acc + parseInt(val.product.price * val.quantity), 0):
                                    sum = data.reduce((acc, val) => acc + parseInt(val.product.price * selectItem),0)

                                }
                                
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


            </div> :<div>
                <CheckOutNav/>

                <img src="https://www.beyoung.in/desktop/images/checkout/EMPTY%20CARTORDER%20PAGE..png"/>
            </div>
           }
        </div>
    )
}

export default CheckOut;






