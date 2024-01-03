

function CheckOutNav() {
    return (
        <div>
            <div className="checkoutNav">
                <div className="checkoutText">BEYOUNG.</div>
                <div className="checkoutPayText">100% SECURE PAYMENT</div>
            </div>

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
        </div>
    )
}

export default CheckOutNav;