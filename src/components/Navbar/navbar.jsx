import { useContext, useState } from "react";
import "./navbar.css";
import MenData from "../MenData/mendata";
import { NavLink,  json,  useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import UserContext from "../../ContextApi/UserContext";
import { createPortal } from "react-dom";
import SignUpPage from "../../Auth/Signup/Signup";
import WomenDataObj from "../WomenDataObj/WomenDataObj";
import Hamburger from "../Hamburger/hamburger";

function Navbar(){

    let [search, setSearch] = useState(false);

    const {successMessage} = useContext(UserContext);

    const {token} = useContext(UserContext);


    function onHandleClick(){
      setSearch(search?false:true);
    }


    function handleLogoClick(){
        navigate("/");
    }


    const[showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleScroll = () => {
        try {
            const mydataElement = document.getElementById('listData');
    
            if (mydataElement) {
                if (window.scrollY >= 30.20000076293945) {
                    mydataElement.style.top = '33px';
                } else {
                    mydataElement.style.top = '76px';
                }
            }
        } 
        
        catch (error) {
            console.log(error);
        }
    }
    
    window.addEventListener('scroll', handleScroll);



    function handleCartClick(){
        
        if(!successMessage){
            setShowModal(true);
        }

        else{
            setShowModal(false);
            navigate("/checkout")
        }
    }

    const handleClose = ()=>{
        setShowModal(false);
    }

    function handleWishList(){
        if(!successMessage){
            setShowModal(true);
        }

        else{
            setShowModal(false);
            navigate("/wishlist")
        }
    }
 
    return(
        <div className="section_tag">
            <Hamburger/>

            <div className="list">
                <span style={{cursor:"pointer"}} onClick={handleLogoClick} className="sections">BEYOUNG.</span>
                <ul>
                    <li className="men">MEN
                        {
                            <div className="listData" id="listData">
                                {
                                    Object.keys(MenData).map((key)=>{
                                        return(
                                            <div>
                                                <h4>{key}</h4>
                                                {
                                                    MenData[key].list.map((val)=>{
                                                        return(
                                                            <ul>
                                                                <li className="weardata">
                                                                    <NavLink to = {(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                                                                        {val.name}
                                                                   </NavLink>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </li>
                    <li className="men">WOMEN
                        {
                            <div className="listData" id="listData">
                                {
                                    Object.keys(WomenDataObj).map((key)=>{
                                        return(
                                            <div>
                                                <h4>{key}</h4>
                                                {
                                                    WomenDataObj[key].list.map((val)=>{
                                                        return(
                                                            <ul>
                                                                <li className="weardata">
                                                                    <NavLink to = {(`/categorized?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                                                                        {val.name}
                                                                   </NavLink>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </li>

                    <li>COMBOS</li>
                    <li>BB K FAVORITES</li>
                    <li>WINTER WEARS</li>
                    <li>NEW ARRIVALS</li>
                </ul>
            </div>
            

            <div className="cartSearch">
                <i style={{cursor:"pointer"}} onClick={onHandleClick} class="fa-solid fa-magnifying-glass"></i>
                <SearchBar search = {search} />

                <div className="addToWishList">
                    {
                        <div className="addtonumWishList" style={{background:!successMessage || !JSON.parse(localStorage.getItem("WishListData")) || JSON.parse(localStorage.getItem("WishListData")).length===0 ? "transparent":"yellow"}}>
                            {/* style={{background: !successMessage ? "transparent": !JSON.parse(localStorage.getItem("WishListData")).length>0 ? "transparent":"yellow"}} */}
                            {
                                localStorage.getItem("WishListData")!=null && token && JSON.parse(localStorage.getItem("WishListData")).length>0 ? JSON.parse(localStorage.getItem("WishListData")).length: null
                            } 
                        </div>
                    }
                </div>
                
                <svg onClick={handleWishList} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 8.06253C22 15.0874 12.0004 21 12.0004 21C12.0004 21 2 15 2 8.07677C2 5.25003 4.22222 3.00003 7 3.00003C9.77778 3.00003 12 6.37503 12 6.37503C12 6.37503 14.2222 3.00003 17 3.00003C19.7778 3.00003 22 5.25003 22 8.06253Z" stroke="black" stroke-width="1.5" stroke-linecap="round"></path></svg>

                <div className="addToCart">
                    {/* style={{background:!successMessage ? "transparent": !JSON.parse(localStorage.getItem("data")).length>0? "transparent":"yellow"}} */}
                    {<div className="addToNumber" style={{background:!successMessage || !JSON.parse(localStorage.getItem("data"))? "transparent":"yellow"}} >{
                        localStorage.getItem("data")!==null && token && JSON.parse(localStorage.getItem("data")).length>0 ? JSON.parse(localStorage.getItem("data")).length: <div></div>
                    }
                </div>}

                    <svg style={{cursor:"pointer"}} onClick={handleCartClick} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L5.5 3L6 5M6 5L8 13M6 5H21L19 13H8M8 13H7.5C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16H19M19 20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20ZM9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round"></path></svg>
                </div>
            </div>

            {showModal && createPortal(<SignUpPage showModal = {showModal} onClose = {handleClose}/>,  document.body)}
        </div>
    )
}

export default Navbar;