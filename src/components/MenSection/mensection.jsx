
import { useEffect, useState } from "react";
import "./mensection.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import GenderSection from "../GenderSection/gendersection";

function Mensection(){
    let [data, setData] = useState([]);


    const fetchApi = async()=>{
      try{
        const apiUrl = ` https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"tshirt"}`;
        let resData = await fetch(apiUrl , {
            method: 'GET',
            headers : {
              projectID: "zx5u429ht9oj",
            }
        });
        let res = await resData.json();
        setData(res.data);
      }

      catch(error){
        console.log("error is ", error);
      }
    }

    useEffect(()=>{
        fetchApi();
    },[]);


    
   
    return(
      <div>
        <GenderSection data = {data} gender = "FOR MEN" shirts = "T-SHIRTS" demand = "High On Demand"/>
        <GenderSection data = {data} gender = "FOR WOMEN" />
      </div>

    )
}


export default Mensection;