import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Layout from "./Layout";

import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

const About = () => {
  // State to control chatbot visibility
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <>
      {/* Banner Section */}
      <Layout/>
      <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <img
          src="./images/banner.webp"
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            maxHeight: "80vh",
          }}
        />
        <h1
          style={{
            fontFamily: "nicotine",
            fontSize: "clamp(24px, 3.8vw, 48px)",
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            letterSpacing: "2px",
            padding: "0 20px",
          }}
        >
          KNIGHT BITE IS A<br />
          CLOUD KITCHEN DELIVERING<br />
          FOOD TO THE NOCTURNALS<br />
          WITH A FOCUS ON FOOD,<br />
          TECHNOLOGY, AND LOGISTICS.
        </h1>
      </div>

      {/* Food Strip Section */}
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", alignItems: "center" }}>
        <img
          src="./images/food-strip.webp"
          alt="Food Strip"
          style={{ flex: "1", maxWidth: "400px", margin: "0 auto" }}
        />
        <p
          style={{
            flex: "2",
            fontSize: "18px",
            color: "#424242",
            fontFamily: "Nunito",
            textAlign: "justify",
            padding: "20px",
          }}
        >
          Knight Bite started with the idea to serve all the hungry nocturnals
          who find it difficult to order late-night munchies. We brought together
          late-night eaters and helped them order delicious meals conveniently
          through the Knight Bite App and call.
        </p>
      </div>

      {/* Success Story Section */}
      <div style={{ display: "flex", flexWrap: "wrap-reverse", padding: "20px", alignItems: "center" }}>
        <p
          style={{
            flex: "2",
            fontSize: "18px",
            color: "#424242",
            fontFamily: "Nunito",
            textAlign: "justify",
            padding: "20px",
          }}
        >
          Knight Bite is a unique concept that successfully adapted to the
          emerging market. Our Biters (customers) loved the KB app, which made
          the ordering process seamless. Within two weeks of its release, the app
          trended as a top food app and was downloaded by over 5,000 users across
          Mangalore and Manipal.
        </p>
        <img
          src="./images/app-menu.webp"
          alt="App Menu"
          style={{
            flex: "1",
            maxWidth: "400px",
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Vision Section */}
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", alignItems: "center" }}>
        <img
          src="./images/burger.webp"
          alt="Burger"
          style={{
            flex: "1",
            maxWidth: "400px",
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <p
          style={{
            flex: "2",
            fontSize: "18px",
            color: "#424242",
            fontFamily: "Nunito",
            textAlign: "justify",
            padding: "20px",
          }}
        >
          Moving forward, our mission is to spread smiles across more cities
          in India and around the world. We aim to serve our customers better
          and expand our footprint with the same passion and commitment.
        </p>
      </div>

      {/* Locations Section */}
      <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Locations</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          {["Bengaluru", "Mangalore", "Mysuru", "Hyderabad", "Hubli", "Manipal"].map((location) => (
            <div
              key={location}
              style={{
                padding: "10px 20px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                width: "200px",
              }}
            >
              {location} <br />
              <span style={{ fontWeight: "normal", fontSize: "14px" }}>Hours: 7:00 pm - 4:00 am</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Follow Us</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
          {[{
              href: "https://www.instagram.com/knight_bite/",
              src: "./images/instagram.jpg",
              alt: "Instagram"
            }, {
              href: "https://m.facebook.com/knightbiteIndia/",
              src: "./images/facebook.jpg",
              alt: "Facebook"
            }, {
              href: "https://lu.linkedin.com/company/knightbite",
              src: "./images/linkedin.jpg",
              alt: "LinkedIn"
            }, {
              href: "https://www.youtube.com/channel/UCbUM8v6bBtX8mcVFazJ9IQw",
              src: "./images/youtube.jpg",
              alt: "YouTube"
            }
          ].map(({ href, src, alt }) => (
            <a href={href} key={alt} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={alt}
                style={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Chatbot Toggle Icon */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
        onClick={toggleChatbot}
      >
        <img
          src="./images/download.png" // Replace with your own chat icon image
          alt="Chatbot"
          style={{ width: "40px", height: "40px" }}
        />
      </div>

      {/* Chatbot Section */}
      {isChatbotVisible && (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}

      {/* Footer Section */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          background: "linear-gradient(90deg, #C77BF4 0%, #FF5672 100%)",
          color: "white",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Ⓒ Copyright 2024. Knight Bite Foods Pvt. Ltd. All Rights Reserved
      </footer>
    </>
  );
};

export default About;
