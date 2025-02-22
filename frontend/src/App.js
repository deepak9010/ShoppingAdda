import './App.css';
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import WebFont from "webfontloader";



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
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
