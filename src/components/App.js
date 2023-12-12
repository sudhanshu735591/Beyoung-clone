import "../styles/App.css";
import {Grid} from '@mui/material';
import Home from "./screen/screen";
import Navbar from "./Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/categories";
import ImageDetails from "./ImageDetails/imagedetails";
import CategorizedSection from "./CategorizedData/category";



function App() {
  return( 
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/imageDetails/:id" element = {<ImageDetails/>}/>
        <Route path = "/categorized" element = {<CategorizedSection/>}/>

      </Routes>
    </div>
  );
}

export default App;
