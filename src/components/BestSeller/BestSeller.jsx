import { useContext, useEffect, useState } from "react";
import UserContext from "../../ContextApi/UserContext";

import "./BestSeller.css"



function BestSeller(){

    const {setBestSellerData} = useContext(UserContext);

    const [myData, setMyData] = useState([]);

    const apiData = async()=>{
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"best seller"}`,{
            method: 'GET',
            headers : {
              projectID: "zx5u429ht9oj",
            }
        });

        let res = await data.json();
        console.log("best seller",res.data);
        setMyData(res.data);
    }


    useEffect(()=>{
       apiData()
    },[])


    return(
        <div className="bestSellerBox">
            {
                myData.map((val)=>{
                    return(
                        <div className="bestSellerDescriptionBox">
                            <div className="dataBest">
                                <div><img className="bestImage" src={val.displayImage}/></div>
                                <div className="bestSellerTextBox">
                                    <div className="sellerTag">{val.sellerTag}</div>
                                    <div className="subCategory">{val.subCategory}</div>
                                    <div className="sellerprice">{`₹ ${val.price}`}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default BestSeller;