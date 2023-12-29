import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    
    const [user, setUser] = useState(null);

    const [myApi, setMyApi] = useState();

    const [successMessage, setSuccessMessage] = useState(false);

    const [cartCount, setCartCount] = useState(0);

    const [clothSize, setClothSize] = useState("");

    const [token, setToken] = useState("");

    const [imageDetailsSectionOption, setImageDetailsSectionOption] = useState();

    const [wishListData, setWishListData] = useState([]);

    const [menViewAllData, setMenViewAllData] = useState(false);

    const [selectItem, setSelectedItem] = useState("");

    const [wishListCartData, setWishListCardData] = useState("");

    const [bestSellerData, setBestSellerData] = useState("");


    return(
        <UserContext.Provider value={ {
            user, setUser, 
            myApi, setMyApi, 
            successMessage, setSuccessMessage, 
            cartCount, setCartCount,
            clothSize, setClothSize,
            token, setToken,
            imageDetailsSectionOption, setImageDetailsSectionOption,
            wishListData, setWishListData,
            menViewAllData, setMenViewAllData,
            selectItem, setSelectedItem,
            wishListCartData, setWishListCardData,
            bestSellerData, setBestSellerData
        } }>
            
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;