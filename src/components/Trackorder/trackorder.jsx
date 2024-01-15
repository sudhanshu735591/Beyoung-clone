import Signup from "../Signup/signupText";

import "./trackorder.css"

function Trackorder() {
    return (
        <div className="login">
            <div className="trackOrderBox">
                <div className="TrackBox">
                    <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Vector"><path d="M15 8C15 14.5228 8 21 8 21C8 21 1 14.5228 1 8C1 3.47715 4.13401 1 8 1C11.866 1 15 3.5 15 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5Z" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g></svg>
                    <div className="text">TRACK YOUR ORDER</div>
                </div>

                <div className="login-signup">
                    <Signup />
                </div>
            </div>
        </div>
    )
}


export default Trackorder;