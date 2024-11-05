

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, selectedSize, profile } = location.state || {};
  const [address, setAddress] = useState("Sri Krishna College of Engineering and Technology, 641008");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  if (!product) {
    return <div>No product found!</div>;
  }

  const handleAddressChange = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const saveAddress = () => {
    if (newAddress) {
      setAddress(newAddress);
      setNewAddress("");
      setIsEditingAddress(false);
      alert("Address saved.");
    }
  };

  const handlePlaceOrder = () => {
    // Get the existing orders from local storage, or initialize an empty array
    const existingOrders = JSON.parse(localStorage.getItem("previousOrders")) || [];

    // Create a new order object with the current order details
    const newOrder = {
      product,
      quantity,
      selectedSize,
      address,
      selectedDate,
      orderId: `ORD-${Date.now()}`, // Generate a unique order ID
      date: new Date().toISOString().split("T")[0], // Save the current date
      status: "Pending", // Default status when order is placed
      price: 1169, // Assume a fixed price
    };

    // Add the new order to the existing orders
    const updatedOrders = [...existingOrders, newOrder];

    // Save the updated orders array back to local storage
    localStorage.setItem("previousOrders", JSON.stringify(updatedOrders));

    // Navigate to the payment page
    navigate('/payment', { state: { product, quantity, selectedSize, address, selectedDate } });
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center", fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: "60%", display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "20px", flex: "1" }}>
          <img
            src={product.src.medium}
            alt={product.alt}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ flex: "1" }}>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>Bag</h2>
          </div>

          <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #e12b6e", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <h3 style={{ fontSize: '20px' }}>Deliver to:</h3>
            {profile && (
              <div>
                <p>{profile.name}</p>
                <p>{profile.phone}</p>
                <p>{profile.email}</p>
              </div>
            )}
            <p>{address}</p>
            {!isEditingAddress ? (
              <button
                onClick={handleAddressChange}
                style={{
                  background: "#e12b6e",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Change Address
              </button>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Enter new address"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #e12b6e",
                  }}
                />
                <button
                  onClick={saveAddress}
                  style={{
                    background: "#e12b6e",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    border: "none",
                    marginRight: "10px",
                    cursor: "pointer"
                  }}
                >
                  Save Changes
                </button>
                <button
                  onClick={handleAddressChange}
                  style={{
                    background: "#f0f0f0",
                    color: "black",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    border: "1px solid #e12b6e",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #e12b6e", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <h4 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Delivery Date:</h4>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #e12b6e",
              }}
            />
            {selectedDate && (
              <p style={{ marginTop: "10px", fontSize: "16px" }}>Selected Date: {selectedDate}</p>
            )}
          </div>

          <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #e12b6e", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <h4 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>{product.photographer}'s Product</h4>
            <p>Size: {selectedSize}</p>
            <p>Qty: {quantity}</p>
            <p>Price: ₹1169</p>
          </div>
          <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #e12b6e", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <h4 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Price Details</h4>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}>
              <p>Total MRP:</p>
              <p>₹2599</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}>
              <p>Discount:</p>
              <p style={{ color: "red" }}>-₹1430</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}>
              <p>Coupon Discount:</p>
              <p style={{ color: "red" }}>-₹0</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}>
              <p>Platform Fee:</p>
              <p>₹0</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}>
              <p>Shipping Fee:</p>
              <p>Free</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0', fontWeight: 'bold' }}>
              <p>Total:</p>
              <p>₹1169</p>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            style={{
              backgroundColor: "#e12b6e",
              padding: "15px",
              color: "white",
              borderRadius: "5px",
              width: "100%",
              fontSize: "18px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Place Order
          </button>

          <button
            onClick={() => navigate("/previous-orders")}
            style={{
              marginTop: "20px",
              backgroundColor: "#e12b6e",
              padding: "10px",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer"
            }}
          >
            View Previous Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
