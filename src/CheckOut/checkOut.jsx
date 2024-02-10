import { useContext, useEffect, useState } from "react"
import Button from "../components/button/button"
import "./checkout.css"
import UserContext from "../ContextApi/UserContext";
import CheckOutNav from "./CheckOutNavBar/CheckOutNav";
import { useNavigate } from "react-router-dom";
import CheckOutBar from "./CheckOutBar/CheckOutBar";
import PriceDetails from "./PriceDetails/PriceDetails";

function CheckOut() {
 
    const {data, setdata} = useContext(UserContext);
    const {wishlistDataIter, setWishListDataIter} = useContext(UserContext);
    const {setWishListData} = useContext(UserContext);
    const {selectItem} = useContext(UserContext);
    const {setSelectChange} = useContext(UserContext);
    const {setGlobalPrice} = useContext(UserContext);
    const [loader, setLoader] = useState(false);
    const {setAddToCartDataLength} = useContext(UserContext);
    const {setWishListDataLength} = useContext(UserContext);
    const {wishListFlag} = useContext(UserContext);

    let sum = 0;

    let item = 0;

    const handleSelectedItem = (e, val) => {
        const newQuantity = parseInt(e.target.value);
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
                    'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    'projectID': 'zx5u429ht9oj',
                    "Content-Type": "application/json",
                }
            });

            let res = await data.json();
            setdata(res.data?.items);
            localStorage.setItem("data", JSON.stringify(res.data?.items))
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
                    'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                    'projectID': 'zx5u429ht9oj',
                    "Content-Type": "application/json",
                }
            });

            let res = await data.json();
            setAddToCartDataLength(res?.data?.items?.length);
            setdata(res.data.items);
            localStorage.setItem("data", JSON.stringify(res.data?.items));
            localStorage.setItem("cartLength", res?.data?.items?.length);
        }

        catch (error) {
            console.log(error);
        }
    }

    const wishListItem = async (val) => {

        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
            method: "PATCH",

            headers: {
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
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
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'zx5u429ht9oj',
            },
        });

        let res = await data.json();
        setWishListDataLength(res?.data?.items?.length);
        res && localStorage.setItem("wishListLength", res?.data?.items?.length)
        setWishListDataIter(res.data?.items);
        console.log("wishListFlag", wishListFlag);
        {wishListFlag && setWishListDataIter("")}

        setWishListData(res.data?.items);
        setLoader(false);
    }


    const deleteWishList = async(id)=>{
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,{
            method: "DELETE",
            headers: {  
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'zx5u429ht9oj',
            },
        })

        let res = await data.json();
        setWishListDataLength(res?.data?.items?.length);
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
                                                    <div style={{ fontWeight: "700", fontSize: "15px" }}>
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

                    <PriceDetails data={data} selectItem = {selectItem}  setSelectChange = {setSelectChange} setGlobalPrice={setGlobalPrice} checkOutHandler={checkOutHandler}/>
                </div>

                {wishlistDataIter.length>0 && <div className="wishListBox">
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






