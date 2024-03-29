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

    const [selectChange, setSelectChange] = useState();

    const [addressData, setAddressData] = useState();

    const [globalPrice, setGlobalPrice] = useState();

    const [wishlistDataIter, setWishListDataIter] = useState([]);

    const [addToCartDataLength, setAddToCartDataLength] = useState();

    const [ wishListDataLength, setWishListDataLength] = useState();

    const [data, setdata] = useState();

    const [productId, setProductId] = useState();

    const [wishListFlag, setWishListFlag] = useState(false);



    const [formData, setFormData] = useState({
        FirstName : "",
        LastName : "",
        Email:"",
        Phone:"",
        PinCode:"",
        Town :"",
        City:"",
        State:"",
        Address:"",
    })

    const [error, setError] = useState({
        FirstName : "",
        LastName : "",
        Email:"",
        Phone:"",
        PinCode:"",
        Town :"",
        City:"",
        State:"",
        Address:"",
    });






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
            selectChange, setSelectChange,
            addressData, setAddressData,
            globalPrice, setGlobalPrice,
            wishlistDataIter, setWishListDataIter,
            addToCartDataLength, setAddToCartDataLength,
            wishListDataLength, setWishListDataLength,
            data, setdata,
            formData, setFormData,
            error, setError,
            productId, setProductId,
            wishListFlag, setWishListFlag,
        } }>
            
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;