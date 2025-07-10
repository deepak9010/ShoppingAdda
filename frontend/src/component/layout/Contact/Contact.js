import React from "react";
import { 
  FiMail, 
  FiLinkedin, 
  FiTwitter, 
  FiGithub, 
  FiPhone,
  FiArrowRight
} from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const contactLinks = [
    {
      id: 1,
      name: "Email",
      url: "mailto:deepak23072019@gmail.com",
      text: "deepak23072019@gmail.com",
      icon: <FiMail size={24} />,
      color: "#EA4335"
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepak-singh-8a49a5216/",
      text: "Connect on LinkedIn",
      icon: <FiLinkedin size={24} />,
      color: "#0077B5"
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://x.com/DeepakSing24293",
      text: "@DeepakSing24293",
      icon: <FiTwitter size={24} />,
      color: "#1DA1F2"
    },
    {
      id: 4,
      name: "GitHub",
      url: "https://github.com/deepak9010",
      text: "GitHub Profile",
      icon: <FiGithub size={24} />,
      color: "#333"
    },
    {
      id: 5,
      name: "Phone",
      url: "tel:+1234567890",
      text: "+1 (234) 567-890",
      icon: <FiPhone size={24} />,
      color: "#25D366"
    }
  ];

  return (
    <div className="contactContainer">
      <div className="contactCard">
        <div className="contactHeader">
          <h1 className="contactTitle">Get In Touch</h1>
          <p className="contactSubtitle">Let's connect and build something amazing together!</p>
        </div>
        
        <div className="contactLinksContainer">
          <div className="contactLinksRow">
            <a 
              className="contactLink" 
              href={contactLinks[0].url}
              target="_self"
              rel="noopener noreferrer"
              style={{ '--link-color': contactLinks[0].color }}
            >
              <div className="linkIcon" style={{ color: contactLinks[0].color }}>
                {contactLinks[0].icon}
              </div>
              <div className="linkContent">
                <span className="linkName">{contactLinks[0].name}</span>
                <span className="linkText">{contactLinks[0].text}</span>
              </div>
              <div className="linkArrow">
                <FiArrowRight size={20} />
              </div>
            </a>
            
            <a 
              className="contactLink" 
              href={contactLinks[1].url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--link-color': contactLinks[1].color }}
            >
              <div className="linkIcon" style={{ color: contactLinks[1].color }}>
                {contactLinks[1].icon}
              </div>
              <div className="linkContent">
                <span className="linkName">{contactLinks[1].name}</span>
                <span className="linkText">{contactLinks[1].text}</span>
              </div>
              <div className="linkArrow">
                <FiArrowRight size={20} />
              </div>
            </a>
          </div>
          
          <div className="contactLinksRow">
            <a 
              className="contactLink" 
              href={contactLinks[2].url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--link-color': contactLinks[2].color }}
            >
              <div className="linkIcon" style={{ color: contactLinks[2].color }}>
                {contactLinks[2].icon}
              </div>
              <div className="linkContent">
                <span className="linkName">{contactLinks[2].name}</span>
                <span className="linkText">{contactLinks[2].text}</span>
              </div>
              <div className="linkArrow">
                <FiArrowRight size={20} />
              </div>
            </a>
            
            <a 
              className="contactLink" 
              href={contactLinks[3].url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--link-color': contactLinks[3].color }}
            >
              <div className="linkIcon" style={{ color: contactLinks[3].color }}>
                {contactLinks[3].icon}
              </div>
              <div className="linkContent">
                <span className="linkName">{contactLinks[3].name}</span>
                <span className="linkText">{contactLinks[3].text}</span>
              </div>
              <div className="linkArrow">
                <FiArrowRight size={20} />
              </div>
            </a>
          </div>
          
          <div className="contactLinksRow single">
            <a 
              className="contactLink" 
              href={contactLinks[4].url}
              target="_self"
              rel="noopener noreferrer"
              style={{ '--link-color': contactLinks[4].color }}
            >
              <div className="linkIcon" style={{ color: contactLinks[4].color }}>
                {contactLinks[4].icon}
              </div>
              <div className="linkContent">
                <span className="linkName">{contactLinks[4].name}</span>
                <span className="linkText">{contactLinks[4].text}</span>
              </div>
              <div className="linkArrow">
                <FiArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;