import "./footer.css";

function Footer() {
    return (
        <div className="footerDetails">
            <div className="detailsBox">

                
            <div className="helpSection">
                <div className="helpSection">NEED HELP</div>
                <div>
                    <div className="need_help">
                        <div>Contact Us</div>
                        <div>Track Order</div>
                        <div>Returns & Refunds</div>
                        <div>FAQ's</div>
                        <div>Career</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="Company">COMPANY</div>
                <div>
                    <div className="need_help about" >
                        <div>About Us</div>
                        <div>Beyoung Blog</div>
                        <div>Beyoungistan</div>
                        <div>Collaboration</div> 
                        <div>Media</div> 
                    </div>
                </div>
            </div>

          

            <div>
                <div className="helpSection">MORE INFO</div>
                <div>
                <div className="need_help about " >
                    <div>Term and Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Shipping Policy</div>
                    <div>Sitemap</div> 
                </div>
                </div>
            </div>

              

            <div>
                <div className="location helpSection">LOCATION</div>
                <div className="need_help about" >
                    <div>support@beyoung.in</div>
                    <div>Eklingpura Chouraha, Ahmedabad Main Road</div>
                    <div>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</div>

                    <div className="playStoreBox">
                        <div className="playStoreText">DOWNLOAD THE APP</div>
                        <div className="playStoreImageBox" style={{display:"flex" , gap:"10px"}}>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.beyoungapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob">
                                <img className="imagePlayStore" src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png"/>
                                </a>
                            </div>

                            <div>
                                <a href="https://apps.apple.com/in/app/beyoung/id1665513310?utm_source=website&utm_medium=Footer+ios">
                                    <img className="imagePlayStore" src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Footer;












