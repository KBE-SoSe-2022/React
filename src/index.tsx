import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./routes/basket";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-o3uywknd.us.auth0.com"
      clientId="jMcE03GafH48BCWZrX2u4KtEotmeALuL"
      redirectUri={window.location.origin}
    >
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </React.StrictMode>
    </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
