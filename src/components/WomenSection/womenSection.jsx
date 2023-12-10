import { useEffect, useState } from "react";
import "./womenSection.css";
import { NavLink } from "react-router-dom";

function WomenSection(props){
    let {gender} = props;

    let [womenData, setWoemnData] = useState([]);

    let Women = "Women";


    const fetchAPi = async ()=>{
        let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"Women"}`
        let resData = await fetch(apiUrl , {
            method: 'GET',
            headers : {
              projectID: "zx5u429ht9oj",
            }
        });
        let res = await resData.json();
        console.log("resssssssssssss", res);
        setWoemnData(res);
    }

    useEffect(()=>{
        fetchAPi();
    }, [])
    return(
        <div>
            <div className="mensection">{gender}</div>

            <div className="womenData">
               {
                womenData.data && womenData.data.map((val)=>{
                    return(
                        <img className="womenImage" src={val.displayImage} alt="Image"/>
                    )
                })
               }
            </div>
        </div>
    )
}

export default WomenSection;