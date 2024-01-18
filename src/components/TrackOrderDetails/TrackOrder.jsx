import { useEffect, useState } from "react";
import "./TrackOrder.css";

function TrackOrderDetails(){

    const [data, setData] = useState();

    const fetchData = async()=>{
        let data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order",{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("Token")}`,
                'projectID': 'zx5u429ht9oj',
                "Content-Type": "application/json",
            },
        });

        const res = await data.json();

        setData(res?.data);

        console.log("TrackOrder", res.data);
    }


    useEffect(()=>{
        fetchData();
    },[])




    return(
        <div className="trackBox">
            {
                data && data.map((val, index)=>{
                    console.log("val.order.items[0].displayImage",val.order.items[0].product.displayImage);
                    return(
                        <div key = {index}>
                            <img className="orderImage" src = {val.order.items[0].product.displayImage}/>
                            <p className="textOrderDetails">Total Price --> {val.order.totalPrice}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default TrackOrderDetails;
