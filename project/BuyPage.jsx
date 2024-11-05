
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const BuyPage = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     phone: "+91 12345 67890",
//     email: "johndoe@example.com",
//   });

//   const navigate = useNavigate();
//   const location = useLocation();
//   const product = location.state?.product;  // Safely access the product

//   if (!product) {
//     navigate("/");  // If no product, navigate to the homepage or show an error message
//     return null;
//   }

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
//   const handleSizeSelect = (size) => setSelectedSize(size);

//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const saveProfile = () => {
//     alert("Profile details saved.");
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1.5fr 1fr 1fr",
//           gap: "20px",
//           maxWidth: "1200px",
//           width: "100%",
//         }}
//       >
//         <div style={{ gridColumn: "1 / 2", display: "flex", flexDirection: "column", gap: "5px" }}>
//           <img
//             src={product.src.large}
//             alt={product.alt}
//             style={{
//               width: "100%",
//               height: "auto",
//               objectFit: "cover",
//               borderRadius: "10px",
//               border: "1px solid lightgray",
//               marginBottom: "5px",
//             }}
//           />
//         </div>

//         <div style={{ gridColumn: "2 / 4", textAlign: "left", padding: "10px", maxWidth: "500px" }}>
//           <h2 style={{ fontWeight: "bold" }}>CULT</h2>
//           <p style={{ color: "#555", fontSize: "18px" }}>Seamless Fabulous Cloth</p>

//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" }}>
//             <p style={{ fontSize: "24px", color: "#e12b6e", fontWeight: "bold" }}>
//               ₹1169 <span style={{ textDecoration: "line-through", marginLeft: "10px", color: "gray" }}>₹2599</span>
//               <span style={{ color: "#2e8b57", marginLeft: "10px" }}>(55% OFF)</span>
//             </p>
//           </div>

//           <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #e12b6e", borderRadius: "5px" }}>
//             <h4>Select Size</h4>
//             <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
//               {["XS", "S", "M", "L", "XL"].map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => handleSizeSelect(size)}
//                   style={{
//                     padding: "10px",
//                     backgroundColor: selectedSize === size ? "#e12b6e" : "#f0f0f0",
//                     color: selectedSize === size ? "white" : "black",
//                     border: "1px solid #e12b6e",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #e12b6e", borderRadius: "5px" }}>
//             <h4>Quantity</h4>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <button
//                 onClick={handleDecrease}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #e12b6e",
//                   backgroundColor: "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 -
//               </button>
//               <span style={{ fontSize: "18px", fontWeight: "bold" }}>{quantity}</span>
//               <button
//                 onClick={handleIncrease}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "5px",
//                   border: "1px solid #e12b6e",
//                   backgroundColor: "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div style={{ padding: "10px", border: "1px solid #e12b6e", borderRadius: "5px", marginBottom: "20px" }}>
//             <h4>Profile Details</h4>
//             <label><strong>Name: </strong></label>
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleProfileChange}
//               style={{ marginBottom: "10px", width: "100%", padding: "5px", borderRadius: "5px", border: "1px solid lightgray" }}
//             />
//             <label><strong>Phone: </strong></label>
//             <input
//               type="text"
//               name="phone"
//               value={profile.phone}
//               onChange={handleProfileChange}
//               style={{ marginBottom: "10px", width: "100%", padding: "5px", borderRadius: "5px", border: "1px solid lightgray" }}
//             />
//             <label><strong>Email: </strong></label>
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleProfileChange}
//               style={{ marginBottom: "10px", width: "100%", padding: "5px", borderRadius: "5px", border: "1px solid lightgray" }}
//             />
//             <button
//               onClick={saveProfile}
//               style={{
//                 padding: "10px",
//                 width: "100%",
//                 backgroundColor: "#e12b6e",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//                 marginTop: "10px"
//               }}
//             >
//               Save
//             </button>
//           </div>

//           <button
//             onClick={() => {
//               if (!selectedSize) {
//                 alert("Please select a size");
//               } else {
//                 navigate("/order", {
//                   state: { product, quantity, selectedSize, profile },
//                 });
//               }
//             }}
//             style={{
//               padding: "15px",
//               width: "100%",
//               backgroundColor: "#e12b6e",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontSize: "18px",
//             }}
//           >
//             Add to Bag
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyPage;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [profile, setProfile] = useState({
    name: "John Doe",
    phone: "+91 12345 67890",
    email: "johndoe@example.com",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    navigate("/"); 
    return null;
  }

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  const handleSizeSelect = (size) => setSelectedSize(size);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    if (!profile.name || !profile.phone || !profile.email) {
      alert("Please fill out all profile details.");
      return;
    }
    alert("Profile details saved.");
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size");
    } else {
      navigate("/order", {
        state: { product, quantity, selectedSize, profile },
      });
    }
  };

  return (
    <div className="buy-page">
      <div className="content-container">
        <img
          src={product.src.large}
          alt={product.alt}
          className="product-image"
        />
        <div className="product-details">
          <h2>CULT</h2>
          <p>Seamless Fabulous Cloth</p>
          <div className="price">
            <p>
              ₹1169 <span className="original-price">₹2599</span>
              <span className="discount">(55% OFF)</span>
            </p>
          </div>

          <div className="size-selector">
            <h4>Select Size</h4>
            <div className="size-buttons">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`size-button ${selectedSize === size ? "selected" : ""}`}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h4>Quantity</h4>
            <div className="quantity-controls">
              <button onClick={handleDecrease} className="quantity-button">-</button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={handleIncrease} className="quantity-button">+</button>
            </div>
          </div>

          <div className="profile-form">
            <h4>Profile Details</h4>
            <label>Name:  </label>
            
            <input type="text" name="name" value={profile.name} onChange={handleProfileChange} required /><br></br>
            <label>Phone: </label>
            <input type="text" name="phone" value={profile.phone} onChange={handleProfileChange} required /><br></br>
            <label>Email:  </label>
            <input type="email" name="email" value={profile.email} onChange={handleProfileChange} required /><br></br>
          </div>

          <button onClick={saveProfile} className="save-button">Save</button>
          <button onClick={handleAddToBag} className="add-to-bag-button">
            Add to Bag
          </button>
        </div>
      </div>

      <style jsx>{`
        .buy-page {
          display: flex;
          justify-content: center;
          padding: 20px;
          background-color: #f9f9f9;
        }

        .content-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 20px;
          max-width: 1200px;
          width: 100%;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        .product-details {
          text-align: left;
          padding: 20px;
          max-width: 500px;
        }

        .price {
          margin: 20px 0;
        }

        .original-price {
          text-decoration: line-through;
          margin-left: 10px;
          color: gray;
        }

        .discount {
          color: #2e8b57;
          margin-left: 10px;
        }

        .size-selector,
        .quantity-selector,
        .profile-form {
          margin: 20px 0;
          padding: 10px;
          border: 1px solid #e12b6e;
          border-radius: 5px;
        }

        .size-buttons,
        .quantity-controls {
          display: flex;
          gap: 10px;
          margin: 10px 0;
        }

        .size-button,
        .quantity-button {
          padding: 10px;
          border: 1px solid #e12b6e;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .size-button.selected {
          background-color: #e12b6e;
          color: white;
        }

        .save-button,
        .add-to-bag-button {
          padding: 15px;
          width: 100%;
          background-color: #e12b6e;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          margin-top: 10px;
          transition: background-color 0.3s;
        }

        .save-button:hover,
        .add-to-bag-button:hover {
          background-color: #c51149; /* Darker shade on hover */
        }
      `}</style>
    </div>
  );
};

export default BuyPage;

