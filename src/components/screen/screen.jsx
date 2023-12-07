import Banner from "../Banner/banner";
import Login from "../Login/login";
import Mensection from "../MenSection/mensection";
import Navbar from "../Navbar/navbar";
import Signup from "../Signup/signup";
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
        </div>
    )
}

export default Home;