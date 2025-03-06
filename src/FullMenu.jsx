import React, { useState } from "react";

const FullMenu = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [total, setTotal] = useState(0);
  const [addons, setAddons] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addonOptions = [
    { name: "Extra Cheese", price: 1 },
    { name: "Ketchup", price: 0.5 },
    { name: "Mayo", price: 0.5 },
    { name: "Spicy Sauce", price: 0.75 },
  ];

  const categories = [
    {
      title: "Burgers",
      image: "./images/b1.jpg",
      items: [
        { name: "Cheeseburger", price: 400 },
        { name: "Veggie Burger", price: 320 },
        { name: "Chicken Burger", price: 480 },
        { name: "Double Patty Burger", price: 640 },
      ],
    },
    {
      title: "Fries/Starters",
      image: "./images/fries.jpg",
      items: [
        { name: "Classic Fries", price: 240 },
        { name: "Cheesy Fries", price: 320 },
        { name: "Loaded Nachos", price: 400 },
        { name: "Chicken Wings", price: 560 },
      ],
    },
    {
      title: "Main Course",
      image: "./images/main.jpg",
      items: [
        { name: "Grilled Chicken", price: 800 },
        { name: "Paneer Butter Masala", price: 720 },
        { name: "Biryani", price: 640 },
        { name: "Pasta", price: 560 },
      ],
    },
    {
      title: "Drinks",
      image: "./images/coke.jpg",
      items: [
        { name: "Coke", price: 160 },
        { name: "Pepsi", price: 160 },
        { name: "Lemonade", price: 240 },
        { name: "Iced Tea", price: 240 },
      ],
    },
    {
      title: "Wraps",
      image: "./images/wraps.jpg",
      items: [
        { name: "Chicken Wrap", price: 480 },
        { name: "Paneer Wrap", price: 400 },
        { name: "Veggie Wrap", price: 320 },
        { name: "Cheese Wrap", price: 360 },
      ],
    },
    {
      title: "Desserts",
      image: "./images/desserts.jpg",
      items: [
        { name: "Ice Cream", price: 240 },
        { name: "Brownie", price: 320 },
        { name: "Chocolate Cake", price: 360 },
        { name: "Fruit Salad", price: 400 },
      ],
    },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const addToWishlist = (item) => {
    if (!wishlist.find((wishlistItem) => wishlistItem.name === item.name)) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }
  };

  const addFromWishlistToCart = (item) => {
    addToCart(item);
    setWishlist((prevWishlist) =>
      prevWishlist.filter((wishlistItem) => wishlistItem.name !== item.name)
    );
  };

  const toggleAddon = (addon) => {
    if (addons.find((a) => a.name === addon.name)) {
      setAddons((prevAddons) => prevAddons.filter((a) => a.name !== addon.name));
      setTotal((prevTotal) => prevTotal - addon.price);
    } else {
      setAddons((prevAddons) => [...prevAddons, addon]);
      setTotal((prevTotal) => prevTotal + addon.price);
    }
  };

  const confirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 3000);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      {orderConfirmed && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h2 style={{ fontSize: "24px", color: "#FF5672" }}>Order Confirmed!</h2>
        </div>
      )}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Order Summary Section */}
        <div
          style={{
            flex: "0 0 250px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "20px", marginBottom: "15px", textAlign: "center" }}>
            Your Order
          </h2>
          <h3 style={{ fontSize: "18px", color: "#FF5672" }}>Cart</h3>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {cart.map((item, index) => (
              <li key={index} style={{ fontSize: "14px", marginBottom: "8px" }}>
                {item.name} - ₹{item.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <h3 style={{ fontSize: "18px", color: "#C77BF4", marginTop: "15px" }}>Add-ons</h3>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {addonOptions.map((addon, index) => (
              <li key={index} style={{ fontSize: "14px", marginBottom: "8px" }}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => toggleAddon(addon)}
                    checked={!!addons.find((a) => a.name === addon.name)}
                    style={{ marginRight: "8px" }}
                  />
                  {addon.name} - ₹{addon.price.toFixed(2)}
                </label>
              </li>
            ))}
          </ul>

          <h3 style={{ fontSize: "18px", color: "#C77BF4", marginTop: "15px" }}>Wishlist</h3>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {wishlist.map((item, index) => (
              <li key={index} style={{ fontSize: "14px", marginBottom: "8px" }}>
                {item.name} - ₹{item.price.toFixed(2)}
                <button
                  onClick={() => addFromWishlistToCart(item)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#FF5672",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>

          <h3 style={{ fontSize: "22px", marginTop: "20px", color: "#333" }}>
            Total: ₹{total.toFixed(2)}
          </h3>

          <button
            onClick={confirmOrder}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#FF5672",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Place Order
          </button>
        </div>

        {/* Menu Items Section */}
        <div
          style={{
            flex: "1",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 9px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.3,
                  zIndex: 1,
                }}
              ></div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <h2 style={{ fontSize: "20px", color: "#FF5672" }}>{category.title}</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "14px",
                        marginBottom: "8px",
                        color: "#555",
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {item.name} - ₹{item.price.toFixed(2)}
                      <div style={{ marginTop: "5px" }}>
                        <button
                          onClick={() => addToCart(item)}
                          style={{
                            marginRight: "5px",
                            padding: "5px 10px",
                            backgroundColor: "#FF5672",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => addToWishlist(item)}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#C77BF4",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Add to Wishlist
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
