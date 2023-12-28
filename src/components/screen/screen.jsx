import Banner from "../Banner/banner";
import Mensection from "../MenSection/mensection";
import Navbar from "../Navbar/navbar";
import Topbanner from "../TopBanner/topbanner";
import Trackorder from "../Trackorder/trackorder";
import "./screen.css";


function Home(){
    return(
        <div>
            <Topbanner/>
            <Trackorder/>
            <Navbar/>
            <div>
                <Banner/>
                <Mensection/>
                <div>
                    <img className="wardrobeImage" src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/Bhuvan-strip-banner-desktop.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home;