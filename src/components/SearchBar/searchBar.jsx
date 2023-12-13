import { NavLink } from "react-router-dom";
import "./searchBar.css";

function SearchBar(props){
    let {search} = props;

    function debounceSearch(){
        
    }

    return(
        <div className="searchBox" style={{display:search?"flex":"none"}}>
            <div className="childSearch">
            {/* <NavLink to = {(`/categories?search=${JSON.stringify("jeans")}&filter=${JSON.stringify("jeans")}`)}>
            </NavLink> */}
                <input className="searchInput" type="text" placeholder="Search entire store here..."/>
                <button className="searchButton">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;