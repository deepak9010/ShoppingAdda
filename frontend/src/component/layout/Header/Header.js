// import React from 'react'
// import { ReactNavbar } from "overlay-navbar";


// const Header = () => {
//   return  <ReactNavbar />
// }

// export default Header

import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Link } from "react-router-dom";

import {
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import { ShoppingCart, Search, User } from "lucide-react"; // Import icons

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand>
          <Link to="/" className="text-decoration-none text-dark">Navbar</Link>
        </CNavbarBrand>
        {/* Toggler */}
        <CNavbarToggler onClick={() => setVisible(!visible)} />

        {/* Collapsible Navbar */}
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
          <CNavItem>
              <Link to="/" className="nav-link">Home</Link>
            </CNavItem>
            <CNavItem>
              <Link to="/product" className="nav-link">Products</Link> 
            </CNavItem>
            <CNavItem>
              <Link to="/about" className="nav-link">Contact</Link> 
            </CNavItem>
            <CNavItem>
              <Link to="/contact" className="nav-link">About</Link>
            </CNavItem>
        
          </CNavbarNav>

          {/* Right Side - Search, Profile, Cart Icons */}
          <CNavbarNav className="ms-auto d-flex align-items-center gap-3">
            {/* Search Bar */}
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                <Search size={20} />
              </CButton>
            </CForm>

               {/* Cart Icon */}
               <CNavItem>
              <CNavLink href="/cart">
                <ShoppingCart size={24} />
              </CNavLink>
            </CNavItem>


            {/* Profile Icon */}
            <CNavItem>
              <CNavLink href="/profile">
                <User size={24} />
              </CNavLink>
            </CNavItem>

         
          </CNavbarNav>

        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Header;
