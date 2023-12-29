import { useState } from "react";
import "./footer.css";

function Footer() {

    const [flag, setFlag] = useState(false);

    const[popularFlag, setPopularFlag] = useState(false);

    function handleClick() {
        !flag ? setFlag(true) : setFlag(false);
    }

    function handlePopularClick(){
        !popularFlag?setPopularFlag(true):setPopularFlag(false);
    }
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
                            <div className="playStoreImageBox" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                <div>
                                    <a href="https://play.google.com/store/apps/details?id=com.beyoungapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob">
                                        <img className="imagePlayStore" src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png" />
                                    </a>
                                </div>

                                <div>
                                    <a href="https://apps.apple.com/in/app/beyoung/id1665513310?utm_source=website&utm_medium=Footer+ios">
                                        <img className="imagePlayStore" src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="borderBx">
                <div className="borderWhite"></div>

                <div className="arrowBox">
                    <div>WHY CHOOSE US?</div>
                    <div onClick={handleClick}>
                        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="#f8eb27"></path>
                        </svg>
                    </div>
                </div>




                {
                    flag && <div className="textBottomBox">
                        <div className="textBoxSite">
                            <div>Online Shopping Site</div>
                            <div className="descriptionBox">
                                India's Best Online Shopping Site for Fashion and Lifestyle
                                Started in 2018, Beyoung is the Best Site for online shopping in India when it comes to a vast collection of men's and women's fashion. The latest trends and styles are showcased here, yes at your favorite online fashion store. Well, if fashion is medicine, then Be Young is the chemist shop where you can do your online shopping for fashion with ease. Nothing to brag about, but we are the classic blend of 'Creativity' and 'Style'. Get The Young Out with Beyoung, our slogan says a lot about us. Our website is filled with the cool outfits that you always crave. Indeed, online shopping
                            </div>
                        </div>
                    </div>
                }


                <div className="borderWhite"></div>


                <div className="arrowBox">
                    <div>POPULAR CATEGORIES</div>
                    <div onClick={handlePopularClick}>
                        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="#f8eb27"></path>
                        </svg>
                    </div>
                </div>



               {
                popularFlag &&  
                <div className="clothingBoxContainer">
                    <div className="childClothBox">
                        <div className="textclothBox">MEN'S CLOTHING</div>
                    </div>

                    <div className="descriptionofcloth">
                        <p>Topwear: Half Sleeve T-Shirts | Full Sleeve T-Shirts | Men's Shirts | Printed T-Shirts | Plain T-Shirts | Polo T-Shirts | Plus Size T-Shirts | Combos
                            Theme Based T Shirts: Ipl T Shirts | Men's Travel T-shirts | Gym T Shirts | Quotes T Shirt | Cartoon T Shirt | Entrepreneur T-Shirts | Student T Shirts | Funky T Shirts
                            Winter Collection: Hoodies for Men | Sweatshirts for Men | Jackets for Men
                        </p>
                    </div>




                    <div  style={{marginLeft:"23px"}}>
                        <div className="textclothBox">WOMEN'S CLOTHING</div>
                    </div>

                    <div className="descriptionofcloth">
                        <p>Topwear: Women Shirts | Half Sleeve T-Shirts | Full Sleeve T-Shirts | Printed T-Shirts | Plain T-Shirts | Crop Tops | Plus Size T-Shirts | kurti
                        Theme Based T Shirts: Women's Travel T-shirts | Feminist T-shirts
                        Winter Collection: Hoodies for Women | Sweatshirts for Women | Long Coats for Women
                        </p>
                    </div>



                    <div className="childClothBox">
                        <div className="textclothBox">CUSTOMIZATION</div>
                    </div>

                    <div className="descriptionofcloth">
                        <p>Couple Boxer | Couple T shirts</p>
                    </div>



                    <div className="childClothBox">
                        <div className="textclothBox">COUPLE WEAR</div>
                    </div>

                    <div className="descriptionofcloth">
                        <p>Couple Boxer | Couple T shirts</p>
                    </div>



                    <div className="childClothBox">
                        <div className="textclothBox">BOTTOMWEAR:</div>
                    </div>

                    <div className="descriptionofcloth">
                        <p>Mens Boxer | Womens Boxer | Jeggings | Men Sweatpants | Mens Joggers | Chino Pants | Mens Jeans | Mens Pyjamas</p>
                    </div>
                </div>
               }
                <div className="borderWhite"></div>


                <div className="paymentBox">
                    <div className="childPayment">
                        <div className="paymentText">
                            <div>
                            100% SECURE PAYMENT
                            </div>
                            <div>
                                <img style={{height:"35px"}} src="https://www.beyoung.in/api/catalog/footer/Frame-payment%20-1.jpg"/>
                            </div>
                        </div>
                        <div className="friendtext">
                            <div>
                            LET'S BE FRIENDS
                            </div>

                            <div>
                                <ul className="logoList">
                                    <li>
                                        <img className="Footerlogo" src="https://www.beyoung.in/api/catalog/footer/Frame3-1.jpg"/>
                                    </li>

                                    <li>
                                        <img className="Footerlogo" src="https://www.beyoung.in/api/catalog/footer/Frame4-1.jpg"/>
                                    </li>

                                    <li>
                                        <img className="Footerlogo" src="https://www.beyoung.in/api/catalog/footer/Frame5-1.jpg"/>
                                    </li>

                                    <li>
                                        <img className="Footerlogo" src="https://www.beyoung.in/api/catalog/footer/Frame6-1.jpg"/>
                                    </li>

                                    <li>
                                        <img className="Footerlogo" src="https://www.beyoung.in/api/catalog/footer/Frame7-1.jpg"/>
                                    </li>


                                    <li>
                                        <img className="Footerlogo" src="https://www.beyoung.in/api/catalog/footer/Frame8-1.jpg"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div></div>
                </div>
            </div>

        </div>
    )
}


export default Footer;












