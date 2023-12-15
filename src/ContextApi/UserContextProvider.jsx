import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    
    const [user, setUser] = useState(null);

    const [myApi, setMyApi] = useState();

    return(
        <UserContext.Provider value={ {user, setUser, myApi, setMyApi} }>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;