import React, { useState } from 'react';
import Layout from './Layout';
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    burger: {
      image: '/images/background1.jpg',
      title: 'Burger',
      items: ['Cheeseburger', 'Veggie Burger', 'Chicken Burger', 'Double Patty Burger'],
    },
    fries: {
      image: '/images/fries.jpg',
      title: 'Fries/Starters',
      items: ['Classic Fries', 'Cheesy Fries', 'Loaded Nachos', 'Chicken Wings'],
    },
    mainCourse: {
      image: '/images/main.jpg',
      title: 'Main Course',
      items: ['Grilled Chicken', 'Paneer Butter Masala', 'Biryani', 'Pasta'],
    },
    drinks: {
      image: '/images/coke.jpg',
      title: 'Drinks',
      items: ['Coke', 'Pepsi', 'Lemonade', 'Iced Tea'],
    },
    wraps: {
      image: '/images/wraps.jpg',
      title: 'Wraps',
      items: ['Chicken Wrap', 'Paneer Wrap', 'Veggie Wrap', 'Cheese Wrap'],
    },
    desserts: {
      image: '/images/desserts.jpg',
      title: 'Desserts',
      items: ['Ice Cream', 'Brownie', 'Chocolate Cake', 'Fruit Salad'],
    },
  };

  const openModal = (category) => {
    setSelectedCategory(categories[category]);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <>
    <Layout/>
      {/* Banner Section */}
      <div style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
        <img
          src='/images/menu.jpg'
          alt='Menu Banner'
          style={{ width: '100%', height: '780px', objectFit: 'cover' }}
        />

        {/* Icons Section */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {/* First Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '180px' }}>
            {/* Burger Icon */}
            <div
              onClick={() => openModal('burger')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src='/images/burger-icon.png'
                alt='Burger Icon'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <span style={{ fontSize: '30px', color: 'white' }}>Burger</span>
            </div>

            {/* Fries Icon */}
            <div
              onClick={() => openModal('fries')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src='/images/starters-icon.png'
                alt='Fries Icon'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <span style={{ fontSize: '30px', color: 'white' }}>Fries</span>
            </div>

            {/* Main Course Icon */}
            <div
              onClick={() => openModal('mainCourse')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src='/images/main-course-icon.png'
                alt='Main Course Icon'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <span style={{ fontSize: '30px', color: 'white' }}>Main Course</span>
            </div>
          </div>

          {/* Second Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '180px' }}>
            {/* Drinks Icon */}
            <div
              onClick={() => openModal('drinks')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src='/images/drinks-icon.png'
                alt='Drinks Icon'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <span style={{ fontSize: '30px', color: 'white' }}>Drinks</span>
            </div>

            {/* Wraps Icon */}
            <div
              onClick={() => openModal('wraps')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src='/images/wrap-icon.png'
                alt='Wraps Icon'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <span style={{ fontSize: '30px', color: 'white' }}>Wraps</span>
            </div>

            {/* Desserts Icon */}
            <div
              onClick={() => openModal('desserts')}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src='/images/desserts-icon.png'
                alt='Desserts Icon'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <span style={{ fontSize: '30px', color: 'white' }}>Desserts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selectedCategory && (
        <div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
            onClick={closeModal}
          ></div>
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '400px',
              borderRadius: '10px',
              zIndex: 1000,
              backgroundImage: `url(${selectedCategory.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center',
                width: '80%',
              }}
            >
              <h2 style={{ marginBottom: '10px', fontSize: '24px' }}>
                {selectedCategory.title}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {selectedCategory.items.map((item, index) => (
                  <li key={index} style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(90deg,#C77BF4 0%,#FF5672 100%)',
          boxShadow: '-5px -5px 19px rgba(0,0,0,.23)',
          height: '50px',
          width: '100%',
          color: '#fff',
          fontSize: '18px',
        }}
      >
        <h5>Ⓒ Copyright 2024. Knight Bite Foods Pvt. Ltd. All Rights Reserved</h5>
      </div>
    </>
  );
};

export default Menu;
