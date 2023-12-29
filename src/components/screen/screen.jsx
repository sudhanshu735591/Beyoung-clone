import Banner from "../Banner/banner";
import BestSeller from "../BestSeller/BestSeller";
import Footer from "../Footer/footer";
import GenderBanner from "../GenderBanner/genderBanner";
import Login from "../Login/login";
import Mensection from "../MenSection/mensection";
import Navbar from "../Navbar/navbar";
import Signup from "../Signup/signupText";
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
            </div>

            <div>
                <img className="wardrobeImage" src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/Bhuvan-strip-banner-desktop.jpg"/>
            </div>



            <div className="displayImage">
                <div className="demand" style={{alignItems : "start", paddingLeft:"85px"}}>
                    <div className="tshirt1">BESTSELLER</div>
                </div>
                <div className="viewall"></div>
            </div>

            <BestSeller/>
            <Footer/>
        </div>
    )
}

export default Home;