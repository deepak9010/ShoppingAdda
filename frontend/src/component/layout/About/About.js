import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import { Store, ShoppingCart, LocalShipping, Security } from "@mui/icons-material";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/deepak-singh-8a49a5216/";
  };

  return (
    <div className="aboutSection">
      <div className="aboutSectionContainer">
        <Typography component="h1" className="aboutTitle">About Us</Typography>
        
        <div className="aboutContent">
          <div className="founderSection">
            <Avatar
              className="founderAvatar"
              src="https://res.cloudinary.com/dx4ff3ams/image/upload/v1741410538/avatars/e5lqvcnfyp6biwydiey6.jpg"
              alt="Founder"
            />
            <Typography className="founderName">Deepak Singh</Typography>
            <Typography className="founderTitle">Software Developer</Typography>
            <Button 
              onClick={visitInstagram} 
              className="instagramButton"
              variant="contained"
            >
              Connect on LinkedIn
            </Button>
            <span className="founderDescription">
              Passionate about creating seamless shopping experiences and bringing quality products 
              to customers worldwide. Built with modern MERN stack technology.
            </span>
          </div>

          <div className="featuresSection">
            <Typography component="h2" className="featuresTitle">Why Choose Us</Typography>
            
            <div className="featureGrid">
              <div className="featureCard">
                <Store className="featureIcon" />
                <h3>Premium Quality</h3>
                <p>Carefully curated products from trusted brands</p>
              </div>
              
              <div className="featureCard">
                <LocalShipping className="featureIcon" />
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping to your doorstep</p>
              </div>
              
              <div className="featureCard">
                <Security className="featureIcon" />
                <h3>Secure Shopping</h3>
                <p>Your data and transactions are completely safe</p>
              </div>
              
              <div className="featureCard">
                <ShoppingCart className="featureIcon" />
                <h3>Easy Returns</h3>
                <p>Hassle-free return policy for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;