

function CheckOutBar(){
    return(
        <div className="checks">
            <div className="circleBox">
                <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Cart.png" /></div>
                <div className="checkOutText">My Cart</div>
            </div>

            <div className="circleBox">
                <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Location-Outline.png" /></div>
                <div className="checkOutText">Address</div>
            </div>

            <div className="circleBox">
                <div className="checkoutCircle"><img style={{ height: "20px", width: "20px" }} src="https://www.beyoung.in/mobile/images/home/new/Payment-outline.png" /></div>
                <div className="checkOutText">Payment</div>
            </div>
        </div>
    )
}


export default CheckOutBar;