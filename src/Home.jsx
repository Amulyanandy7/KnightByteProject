import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [reservation, setReservation] = useState({ name: '', date: '', time: '', guests: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!email || !phone) {
      setMessage('Please enter both email and phone number');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/submit', {
        email,
        phone,
      });
      setMessage('Data saved successfully!');
      setEmail('');
      setPhone('');
    } catch (error) {
      setMessage('Error saving data');
    }
  };
  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/reserve', reservation);
      alert('Table reserved successfully!');
      setReservation({ name: '', date: '', time: '', guests: '' });
    } catch (error) {
      alert('Error reserving table');
    }
  };

  return (
    <>
    <Layout/>
      <img src="./images/background1.jpg" style={{ width: '100%' }} alt="Background" />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '70px', fontFamily: 'nicotine' }}>DELICIOUSNESS, ONE CLICK AWAY!</h2>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#FF5672',
            color: 'white',
            border: 'none',
            borderRadius: '9px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/FullMenu')} // Add navigation to FullMenu
        >
          Order On Web
        </button>

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <img
            src="./images/google.jpg"
            alt="Google Play"
            style={{ width: '20%', height: '10%', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() =>
              (window.location.href =
                'https://play.google.com/store/apps/details?id=com.axndxsoftwarehub.knightbite&hl=en')
            }
          />
          <img
            src="./images/ios.jpg"
            alt="App Store"
            style={{ width: '20%', height: '10%', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() =>
              (window.location.href =
                'https://apps.apple.com/in/app/knight-bite-order-food-online/id1387840512')
            }
          />
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>Features</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {['night.jpg', 'clock_1.jpg', 'food_1.jpg', 'bulk.jpg', 'order (1).jpg'].map((img, index) => (
          <img key={index} src={`./images/${img}`} style={{ width: '180px', height: 'auto' }} alt={`Feature ${index + 1}`} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {[ 
          'Late Night Delivery<br />Till 4 AM',
          'Order On App Or<br />Call 080-4710607',
          'Delivery Within<br />40 Mins',
          'Food For Every<br />Kind Of Hunger',
          'Place Bulk Orders<br />Through App',
        ].map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>

      <div>
        <img src="./images/banner-1.webp" style={{ width: '100%' }} alt="Banner 1" />
        <div
          style={{
            position: 'absolute',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            top: '1800px',
            paddingLeft: '30%',
            paddingBottom: '30px',
          }}
        >
          <h2 style={{ fontSize: '80px', fontWeight: 'bold', fontFamily: 'nicotine' }}>
            Enjoy Food, Enjoy Life
          </h2>
        </div>
      </div>

      <div>
        <img src="./images/banner-2.webp" style={{ width: '100%' }} alt="Banner 2" />
        <div
          style={{
            position: 'absolute',
            color: 'white',
            fontFamily: 'nicotine',
            top: '2500px',
            paddingLeft: '18%',
            paddingBottom: '30px',
          }}
        >
          <h2
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              fontFamily: 'nicotine',
              textAlign: 'center',
            }}
          >
            Burger, Fries and Shakes<br />And Many More
          </h2>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '60px', textAlign: 'center' }}>Connect With Us</h3>
        <br />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '20px',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ flex: '1', maxWidth: '300px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Contact Us</p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img
              src="./images/mail_icon-_1_.jpg"
              alt="Email"
              style={{ width: '50px', height: '40px', marginRight: '10px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>info@knight-bite.com</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="./images/phone_icon.jpg"
              alt="Phone"
              style={{ width: '50px', height: 'auto', marginRight: '10px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>+91 8047106107</p>
          </div>
        </div>

        <div style={{ flex: '1', maxWidth: '300px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Quick Links</p>
          {['Order Policies', 'Privacy Policies', 'Careers', 'Franchise'].map((link, index) => (
            <a
              key={index}
              href="https://knight-bite.com/policies/" style={{ textDecoration: 'none', color: '#DE3163', display: 'block', marginBottom: '8px' }}>
              {link}
            </a>
          ))}
        </div>
        <div style={{ flex: '1', maxWidth: '300px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Table Reservation</p>
          <form onSubmit={handleReservationSubmit}>
            <input
              type="text"
              value={reservation.name}
              onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
              placeholder="Enter your name"
              style={{ width: '90%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
            />
            <input
              type="date"
              value={reservation.date}
              onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
              style={{ width: '90%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
            />
            <input
              type="time"
              value={reservation.time}
              onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
              style={{ width: '90%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
            />
            <input
              type="number"
              value={reservation.guests}
              onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
              placeholder="Number of guests"
              style={{ width: '90%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px' }}
            />
            <button
              type="submit"
              style={{ width: '90%', padding: '10px', fontSize: '16px', backgroundColor: '#FF5672', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Reserve Table
            </button>
          </form>
        </div>
        <div style={{ flex: '1', maxWidth: '400px', textAlign: 'center' }}>
          <h4 style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '15px' }}>
            Enter your email address and phone number below to be the first to know everything about us, where we’ll be next, and how you can come along! Join us on our adventure.
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '90%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              style={{
                width: '90%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '15px',
              }}
            />
            <button
              type="submit"
              style={{
                width: '90%',
                padding: '10px',
                fontSize: '16px',
                backgroundColor: '#FF5672',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1', maxWidth: '300px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Head Office</h2>
          <p style={{ fontSize: '16px' }}>
            1st Floor, No 20-1-7/10, Regal Square Azizuddin Road,<br />
            Bunder Mangalore, Bunder, Mangaluru,<br />
            Dakshina Kannada, Karnataka, 575001
          </p>
        </div>

        <div style={{ flex: '1', maxWidth: '300px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Locations</h2>
          <p style={{ fontSize: '16px' }}>Bengaluru, Mysore, Hyderabad, Hubli, Manipal, Udupi</p>
        </div>

        <div
          style={{
            flex: '2',
            maxWidth: '350px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {[ 
            { href: 'https://www.instagram.com/knight_bite/', img: 'instagram.jpg', alt: 'Instagram' },
            { href: 'https://m.facebook.com/knightbiteIndia/', img: 'facebook.jpg', alt: 'Facebook' },
            { href: 'https://lu.linkedin.com/company/knightbite', img: 'linkedin.jpg', alt: 'LinkedIn' },
            { href: 'https://www.youtube.com/channel/UCbUM8v6bBtX8mcVFazJ9IQw', img: 'youtube.jpg', alt: 'YouTube' }
          ].map((social, index) => (
            <a key={index} href={social.href} style={{ width: '100px' }}>
              <img src={`./images/${social.img}`} alt={social.alt} style={{ width: '90%', height: 'auto' }} />
            </a>
          ))}
        </div>
      </div>

      <div style={{ marginLeft: '40%' }}>
        {['down.png', 'down2.png'].map((img, index) => (
          <img
            key={index}
            src={`./images/${img}`}
            style={index === 0 ? { paddingRight: '60px' } : {}}
            alt={`Download ${index + 1}`}
          />
        ))}
      </div>

      <div>
        <img src="./images/down4.png" width="100%" style={{ paddingTop: '50px' }} alt="Footer" />
      </div>
    </>
  );
};

export default Home;
