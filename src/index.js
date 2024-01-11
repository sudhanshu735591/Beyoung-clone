import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import UserContextProvider from "./ContextApi/UserContextProvider";
import { Offline, Online } from "react-detect-offline";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Online>
    <BrowserRouter>
    <UserContextProvider>
        <App />
    </UserContextProvider>
    </BrowserRouter>
    </Online>

    <Offline>
        <div className="offline">
            <h1>Please make sure your system is connected to the internet !!!</h1>
        </div>
    </Offline>
    </>
);
