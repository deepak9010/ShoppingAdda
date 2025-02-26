import './App.css';
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./component/Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";
import WebFont from "webfontloader";

import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
         <ToastContainer position="top-right" autoClose={3000} />
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
         <Route exact path="/products" element={<Products />} />
       <Route path="/products/:keyword" element={<Products />} />

        <Route exact path="/search" element={<Search />} />

         {/* <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
