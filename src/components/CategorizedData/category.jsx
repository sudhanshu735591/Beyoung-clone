import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import "./category.css";
import { Link, useSearchParams } from "react-router-dom";
import UserContext from "../../ContextApi/UserContext";

function CategorizedSection(){

    const [myData, setMyData] = useState([]);

    let [show, setShow] = useState(true);
    let [showSize, setShowSize] = useState(true);

    let [selectedCircle, setSelectedCircle] = useState("");


    function onArrowClick(){
        show?setShow(false):setShow(true);
    }


    function checkColor(e){
        setSelectedCircle(e);
        console.log(e,"collrr");    
    }

    const fetchApi = async (search, filter) => {
        
        try {
            let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${search}&filter=${filter}`;
            let data = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    projectID: "zx5u429ht9oj",
                }
            });
  
            let res = await data.json();
            setMyData(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }
  




    const menViewAllDataFunc = async ()=>{
        let data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",{
            headers:{
                projectID: "zx5u429ht9oj",
            }
        });

        console.log("mean", data);  

        let res = await data.json();
        setMyData(res?.data);
        console.log("meanValue", res);
    }

    const [searchParamms] = useSearchParams();

    

    
    
    useEffect(() => {
        fetchApi(searchParamms.get("search"), searchParamms.get("filter"));
    }, [searchParamms]);


    useEffect(()=>{
        menViewAllDataFunc();
    },[])
  
    
    return(
        <div className="filterBox">
            <Topbanner />
            <Trackorder />
            <Navbar />

            {myData ? <div className="allDetails">
                <div className="filter">
                    <div>FILTER</div>
                    <div className="colorArrow">
                        <div>
                            <div>COLOR</div>
                        </div>
                        <img onClick={onArrowClick} className="arrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/>
                    </div>

                    <div className="flexCircle">
                        {myData && myData.map((val)=>{
                            return(
                                <div onClick={()=>checkColor(val.color)} style={{backgroundColor:val.color, display:show?"block":"none"}} className="circleData"></div>
                            )
                        })}                      
                    </div>

                    <div className="sizeSection">
                        <div>SIZE</div>
                        <img onClick={()=>showSize?setShowSize(false):setShowSize(true)} className="arrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg"/>
                    </div>

                    <div className="sizeDetails" style={{display:showSize?"block":"none"}}>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                        <p>4XL</p>
                        <p>5XL</p>
                    </div>
                </div>

                <div className="allClothes">
                    <div className="tshirts_images">
                        <div>TSHIRTS</div>
                        <div className="fetchedImage">
                            {
                                selectedCircle? myData && myData.map((val)=>{
                                    if(val.color===selectedCircle){
                                        return(
                                        <div className="imageSection">
                                            <Link to={`/imageDetails/${val._id}`}>
                                                <img className="fetchedImageData" src= {val.displayImage}/>
                                            </Link>
                                            <i class="fa-regular fa-heart"></i>

                                            <p className="typeText">{val.brand}</p>
                                            <p className="typeSolid">{val.category}</p>
                                            <p className="price">₹ {val.price}</p>
                                        </div>
                                    )
                                    }
                                }): 
                                myData && myData.map((val)=>{
                                    return(
                                        <div className="imageSection">
                                            <Link to={`/imageDetails/${val._id}`}>
                                                <img className="fetchedImageData" src= {val.displayImage}/>
                                                <i class="fa-regular fa-heart"></i>
                                            </Link>
                                            <p className="typeText">{val.brand}</p>
                                            <p className="typeSolid">{val.category}</p>
                                            <p className="price">₹ {val.price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
           </div>:<img style={{margin:"auto"}} src="data:image/png;base64,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"/>}
        </div>
    )
}

export default CategorizedSection;

