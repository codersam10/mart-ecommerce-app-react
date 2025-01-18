import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import IconContextComponent from "./utils/IconContextComponent.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IconContextComponent>
      <BrowserRouter>
        <Routes>
          <Route
            path="/mart-ecommerce-app-react/"
            element={<App />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="/mart-ecommerce-app-react/shop"
              element={<Shop />}
            />
            <Route
              path="/mart-ecommerce-app-react/cart"
              element={<Cart />}
            />
            <Route
              path="/mart-ecommerce-app-react/:productName/:id"
              element={<ProductDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </IconContextComponent>
  </StrictMode>
);
