import "../styles/App.css";
import {Grid} from '@mui/material';
import Home from "./screen/screen";
import Navbar from "./Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/categories";
import ImageDetails from "./ImageDetails/imagedetails";
import CategorizedSection from "./CategorizedData/category";
import CheckOut from "../CheckOut/checkOut";



function App() {
  return( 
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/imageDetails/:id" element = {<ImageDetails/>}/>
        <Route path = "/categorized" element = {<CategorizedSection/>}/>
        <Route path = "/checkout" element = {<CheckOut/>}/>

      </Routes>
    </div>
  );
}

export default App;
