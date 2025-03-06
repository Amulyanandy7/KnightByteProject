import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout.jsx";
const Blog = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 📌 Handle Feedback Change
  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  // 📌 Submit Feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setMessage("⚠️ Feedback cannot be empty!");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3000/api/feedbacks",
        { feedback },
        { headers: { "Content-Type": "application/json" } }
      );

      setMessage("✅ Feedback submitted successfully!");
      setFeedback("");
    } catch (error) {
      setMessage("❌ Error submitting feedback. Please try again.");
    }
  };

  return (
    <>
    <Layout/>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("/images/stork-restaurant-pan.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "20px" }}>
            Welcome to Knight Bite!
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "40px" }}>
            Your one-stop destination for late-night cravings and indulgent delights.
          </p>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#FF5672",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/FullMenu")}
          >
            Explore Menu
          </button>
        </div>
      </div>
            {/* Menu Highlights Section */}
      <div style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Menu Highlights</h2>
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
          Explore our signature dishes that keep our customers coming back for more.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[{ img: './images/cb.jpg', name: 'Classic Cheeseburger', desc: 'A juicy, flavorful delight.' },
            { img: './images/f1.jpg', name: 'Loaded Fries', desc: 'Crispy fries with irresistible toppings.' },
            { img: './images/s1.jpg', name: 'Thick Shakes', desc: 'Perfectly creamy and indulgent.' },
            { img: './images/y1.jpg', name: 'Biriyani', desc: 'Hot, fresh, and full of flavor.' }].map((item, index) => (
              <div
                key={index}
                style={{
                  width: '250px',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }}
                />
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#555' }}>{item.desc}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>What Our Customers Say</h2>
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
          Hear from our happy customers who love our food as much as we love serving them.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[{ img: './images/c1.jpg', name: 'Aruv Gowda', feedback: 'The best late-night food I’ve ever had!' },
            { img: './images/c2.jpg', name: 'Jane Smith', feedback: 'Amazing service and delicious food!' },
            { img: './images/c3.jpg', name: 'Sapna Raj', feedback: 'I love their burgers and shakes!' }].map((testimonial, index) => (
              <div
                key={index}
                style={{
                  width: '300px',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '60%',
                    marginBottom: '15px',
                    objectFit: 'cover',
                  }}
                />
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{testimonial.name}</h3>
                <p style={{ fontSize: '14px', color: '#555' }}>"{testimonial.feedback}"</p>
              </div>
            ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div style={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>We Value Your Feedback</h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Share your thoughts with us to help us improve.
        </p>

        {message && (
          <p style={{ color: message.includes("Error") ? "red" : "green", fontSize: "16px" }}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your feedback here..."
            style={{
              width: "100%",
              height: "150px",
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            value={feedback}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={{
              padding: "10px 30px",
              fontSize: "18px",
              backgroundColor: "#FF5672",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(90deg,#C77BF4 0%,#FF5672 100%)",
          height: "50px",
          color: "#fff",
          fontSize: "18px",
        }}
      >
        <h5>Ⓒ 2024 Knight Bite Foods Pvt. Ltd. All Rights Reserved</h5>
      </div>
    </>
  );
};

export default Blog;
