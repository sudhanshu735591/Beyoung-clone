import "../styles/App.css";
import Home from "./screen/screen";
import { Route, Routes } from "react-router-dom";
import ImageDetails from "./ImageDetails/imagedetails";
import CategorizedSection from "./CategorizedData/category";
import CheckOut from "../CheckOut/checkOut";
import FavoriteItems from "./FavoriteItems/FavoriteItems";
import AddressDetails from "./AddressDetails/AddressDetails";
import Payment from "./Payment/Payment";
import { useContext } from "react";
import UserContext from "../ContextApi/UserContext";
import TrackOrderDetails from "./TrackOrderDetails/TrackOrder";
import OrderHistoryApi from "./APIDATA/OrderHistoryApi";



function App() {
const {token} = useContext(UserContext);

  return( 
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/imageDetails/:id" element = {<ImageDetails/>}/>
        <Route path = "/categorized" element = {<CategorizedSection/>}/>
        <Route path="/checkout" element = {<CheckOut/>}/>
        <Route path="/wishlist" element= {<FavoriteItems/>}/>
        <Route path="/address" element= {<AddressDetails/>}/>
        <Route path="/payment" element= {<Payment/>}/>
        <Route path="/TrackOrder" element= {<TrackOrderDetails/>}/>
        {/* <Route path = "OrderHistoryApi" element = {<OrderHistoryApi/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
