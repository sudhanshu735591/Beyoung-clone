import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import UserContextProvider from "./ContextApi/UserContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <UserContextProvider>
        <App />
    </UserContextProvider>
    </BrowserRouter>
);
