import { useContext, useEffect, useState } from "react";
import UserContext from "../../ContextApi/UserContext";
import "./BestSeller.css"
import { Link } from "react-router-dom";

function BestSeller(){

    const [myData, setMyData] = useState([]);

    const apiData = async()=>{
        let data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"best seller"}`,{
            method: 'GET',
            headers : {
              projectID: "zx5u429ht9oj",
            }
        });

        let res = await data.json();
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
                                <Link to={`/imageDetails/${val._id}`}>
                                <div><img className="bestImage" src={val.displayImage}/></div>
                                <div className="bestSellerTextBox">
                                    <div className="sellerTag">{val.sellerTag}</div>
                                    <div className="subCategory">{val.subCategory}</div>
                                    <div className="sellerprice">{`₹ ${val.price}`}</div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default BestSeller;