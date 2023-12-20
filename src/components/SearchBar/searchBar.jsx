import { NavLink } from "react-router-dom";
import "./searchBar.css";
import { useEffect, useRef, useState } from "react";

function SearchBar(props){
    let {search} = props;

    const [searchData, setSearchData] = useState("");

    const inputRef = useRef(null);



    const searchApi = async()=>{
        let apiUrl = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"brand":"${searchData}"}`;
            let data = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    projectID: "zx5u429ht9oj",
                }
            });

            let res = await data.json();
            console.log("search api data ",res);
    }



    return(
        <div className="searchBox" style={{display:search?"flex":"none"}}>
            <div className="childSearch">
                <input ref={inputRef} className="searchInput" onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="Search entire store here..."/>
                
                <NavLink to={`/categorized?search=${encodeURIComponent(`{"name":"${searchData}"}`)}`}> 
                    <button onClick={()=>searchApi()} className="searchButton">Search</button>
                </NavLink>

            </div>
        </div>
    )
}

export default SearchBar;

// categorized?search={"name":"jeans"}&filter={"subCategory":"jeans"}
// categorized?search="{name:jeans}"&filter="jeans"
