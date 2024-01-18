import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import "./category.css";
import { Link, useSearchParams } from "react-router-dom";
import UserContext from "../../ContextApi/UserContext";
import Footer from "../Footer/footer";
import SignUp from "../../Auth/Signup/Signup";
import { createPortal } from "react-dom";
import ProductComingSoon from "../ProductComingSoon/ProductComingSoon";



function CategorizedSection() {

    const [myData, setMyData] = useState([]);
    const [duplicateData, setDuplicateData] = useState([]);
    const [show, setShow] = useState(true);
    const [showSize, setShowSize] = useState(true);
    const [selectedCircle, setSelectedCircle] = useState("");
    const { menViewAllData, setMenViewAllData } = useContext(UserContext);
    const [changeSizeSelect] = useState("");
    const [isChecked, setChecked] = useState(false);
    const [highTolowChecked, setHighTolowChecked] = useState(false);
    const [sortFlag, setSortFlag] = useState(false);
    const [loader, setLoader] = useState(false);
    const { token } = useContext(UserContext);
    const { setWishListData } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const { successMessage } = useContext(UserContext);
    const [faHeart, setFaHeart] = useState("fa-regular fa-heart");
    const [sizeText, setSizeText] = useState("");
    const [categoryCloth, setCategoryCloth] = useState("");
    const [colorArr, setColorArr] = useState([]);
    const [filterData, setFilterData] = useState();
    const letters = new Set();

    function onArrowClick() {
        show ? setShow(false) : setShow(true);
    }

    function changeSizeText(e) {
        setSizeText(e.target.innerText);
        const updatedData = myData.filter((val) => {
            return val.size.includes(e.target.innerText);
        });
        setFilterData(updatedData);
    }

    function sortedArrowClick() {
        setSortFlag(!sortFlag);
    }

    function checkColor(e) {
        setSelectedCircle(e);
    }

    function lowToHigh() {
        setChecked(!isChecked);
        setHighTolowChecked(false)

    }

    function highToLow() {
        setChecked(false);

        setHighTolowChecked(!highTolowChecked)
    }

    useEffect(() => {

        if (isChecked) {
            const sortedData = [...filterData].sort((a, b) => {
                return a.price - b.price;
            })

            setFilterData(sortedData);
        }

        else {
            setFilterData(duplicateData);
        }


    }, [isChecked]);

    useEffect(() => {

        if (highTolowChecked) {
            const sortedData = [...filterData].sort((a, b) => {
                return b.price - a.price;
            });
            setFilterData(sortedData);
        }

        else {
            setFilterData(duplicateData);
        }
    }, [highTolowChecked]);


    const fetchApi = async (search, filter) => {

        try {
            setLoader(true);
            let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${search}&filter=${filter}`;

            let data = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    projectID: "zx5u429ht9oj",
                }
            });

            let res = await data.json();
            setMyData(res?.data);
            setFilterData(res?.data);
            setDuplicateData(res?.data);
            setLoader(false);
            setCategoryCloth(res.data[0].subCategory);

            res?.data.map((val) => {
                letters.add(val.color);
            });

            setColorArr(Array.from(letters));

        }

        catch (error) {
            console.log(error);
        }
    }


    const menViewAllDataFunc = async () => {
        let data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products", {
            headers: {
                projectID: "zx5u429ht9oj",
            }
        });


        let res = await data.json();
        setMyData(res?.data);
    }

    const [searchParamms] = useSearchParams();


    useEffect(() => {
        fetchApi(searchParamms.get("search"), searchParamms.get("filter"));
    }, [searchParamms]);


    useEffect(() => {

        if (menViewAllData) {
            menViewAllDataFunc();
            setMenViewAllData(false);
        }

        window.scrollTo(0, 0);

    }, [])


    async function handleHeartClick(val) {

        const data = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
            method: "PATCH",

            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'zx5u429ht9oj',
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                "productId": val._id,
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
        setWishListData(res.data?.items);
        setLoader(false);
    }

    const handleClose = () => {
        setShowModal(false);
    }


    const handleCheckHeart = (e, val) => {
        e.preventDefault();
        if (!successMessage) {
            setShowModal(true);
        }
        else {
            handleHeartClick(val);
        }
    }




    return (
        <div className="filterBox">
            <Topbanner />
            <Trackorder />
            <Navbar />

            {filterData && <div>
                <img style={{ width: "100%" }} src="https://www.beyoung.in/api/catalog/products/banner_desktop/oversize-category-banner-desktop-view_19_10_2023.jpg" />
            </div>}

            {filterData ? <div className="allDetailsCatbox">
                <div className="allDetails">
                    <div className="filter">
                        <div className="filterText">FILTER</div>
                        <div className="colorArrow">
                            <div>
                                <div>COLOR</div>
                            </div>
                            <div>
                                <img onClick={onArrowClick} className="arrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg" />

                            </div>
                        </div>

                        <div className="flexCircle">


                            {
                                letters ? colorArr.map((val) => {
                                    return (
                                        <div onClick={() => checkColor(val)} style={{ backgroundColor: val, display: show ? "block" : "none" }} className="circleData"></div>
                                    )
                                }) : <img src="https://www.beyoung.in/beyoung-loader.gif" />
                            }
                        </div>

                        <div className="sizeSection">
                            <div>SIZE</div>
                            <img onClick={() => showSize ? setShowSize(false) : setShowSize(true)} className="arrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg" />
                        </div>

                        <div onClick={changeSizeText} className="sizeDetails" style={{ display: showSize ? "block" : "none", cursor: "pointer" }}>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>

                        <div className="sizeSection">
                            <div>PRICE</div>
                            <img onClick={sortedArrowClick} className="arrow" src="https://www.beyoung.in/desktop/images/category/arrow.svg" />
                        </div>

                        <div className="sizeDetails" style={{ display: showSize ? "block" : "none", cursor: "pointer" }}>
                            <div style={{ display: sortFlag ? "none" : "block" }} className="priceSectionData">
                                <div className="PriceSection">
                                    <input onChange={lowToHigh} checked={isChecked} id="lowToHigh" type="checkbox" />
                                    <p>Price : Low to High</p>
                                </div>
                                <div className="PriceSection">
                                    <input onChange={highToLow} checked={highTolowChecked} id="highToLow" type="checkbox" />
                                    <p>Price : High to Low</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="allClothes">
                        <div className="tshirts_images">
                            <div style={{ textTransform: "uppercase" }}>{categoryCloth}</div>
                            <div className="fetchedImage">
                                {
                                    selectedCircle ? filterData && filterData.map((val) => {
                                        if (val.color === selectedCircle) {
                                            return (
                                                <div className="imageSection">
                                                    <Link to={`/imageDetails/${val._id}`}>
                                                        <img className="fetchedImageData" src={loader ? "https://www.beyoung.in/beyoung-loader.gif" : val.displayImage} />
                                                    </Link>
                                                    <i class="fa-regular fa-heart"></i>

                                                    <p className="typeText">{
                                                        val.brand.length > 10 ? `${val.brand.slice(0, 10)}....` : val.brand
                                                    }</p>

                                                    <p className="typeSolid">{val.category}</p>
                                                    <p className="price">₹ {val.price}</p>
                                                </div>
                                            )
                                        }
                                    }) :


                                    changeSizeSelect ? filterData && filterData.map((val) => {
                                        if (val.size === changeSizeSelect) {
                                            return (
                                                <div className="imageSection">
                                                    <Link to={`/imageDetails/${val._id}`}>
                                                        <img className="fetchedImageData" src={val.displayImage}/>
                                                    </Link>
                                                    <i class="fa-regular fa-heart"></i>

                                                    <p className="typeText">{
                                                        val.brand.length > 10 ? `${val.brand.slice(0, 10)}....` : val.brand
                                                    }</p>

                                                    <p className="typeSolid">{val.category}</p>
                                                    <p className="price">₹ {val.price}</p>
                                                </div>
                                            )
                                        }
                                    }) :

                                    isChecked ? filterData && filterData.map((val) => {
                                        return (
                                            <div className="imageSection">
                                                <Link to={`/imageDetails/${val._id}`}>
                                                    <img className="fetchedImageData" src={val.displayImage} />
                                                    <i class="fa-regular fa-heart"></i>
                                                </Link>
                                                <p className="typeText" style={{ textTransform: "capitalize" }}>{
                                                    val.brand.length > 10 ? `${val.brand.slice(0, 10)}....` : val.brand
                                                }</p>
                                                <p className="typeSolid">{val.category}</p>
                                                <p className="price">₹ {val.price}</p>
                                            </div>
                                        )
                                    }) :

                                    !isChecked ? filterData && filterData.map((val, index) => {
                                        return (
                                            <div className="imageSection">
                                                <Link to={`/imageDetails/${val._id}`}>
                                                    <img className="fetchedImageData" src={loader ? "https://www.beyoung.in/beyoung-loader.gif" : val.displayImage} />
                                                </Link>
                                                <i onClick={(e) => handleCheckHeart(e, val, index)} class={faHeart}></i>
                                                <p className="typeText" style={{ textTransform: "capitalize" }}>{
                                                    val.brand.length > 10 ? `${val.brand.slice(0, 10)}....` : val.brand
                                                }</p>
                                                <p className="typeSolid">{val.category}</p>
                                                <p className="price">₹ {val.price}</p>
                                            </div>
                                        )
                                    }) :


                                    filterData && filterData.map((val) => {
                                        return (
                                            <div className="imageSection">
                                                <Link to={`/imageDetails/${val._id}`}>
                                                    <img className="fetchedImageData" src={val.displayImage} />
                                                    <i class="fa-regular fa-heart"></i>
                                                </Link>
                                                <p className="typeText" style={{ textTransform: "capitalize" }}>{
                                                    val.brand.length > 10 ? `${val.brand.slice(0, 10)}....` : val.brand
                                                }</p>
                                                <p className="typeSolid">{val.category}</p>
                                                <p className="price">₹ {val.price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <img className="FootComing" src="https://static.wixstatic.com/media/414c5f_f71787696e2b45ed9c77f44cf937df5d~mv2.gif"/>}
            {filterData && <Footer />}

            {showModal && createPortal(<SignUp showModal={showModal} onClose={handleClose} />, document.body)}

        </div>
    )
}


export default CategorizedSection;















