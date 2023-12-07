import Login from "../Login/login";
import Signup from "../Signup/signup";

function Trackorder(){
    return(
    <div className="login">
        <div className="text">TRACK YOUR ORDER</div>
        <div className="login-signup">  
            <Login/>
            <Signup/>
        </div>
    </div>
    )
}


export default Trackorder;