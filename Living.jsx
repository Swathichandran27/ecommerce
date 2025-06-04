import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

const Living = () => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await Axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',
          },
          params: {
            query: "home living",
            per_page: 54,
          },
        });
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (photo) => {
    // Get the current cart from localStorage or initialize an empty array
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    const updatedCart = [...storedCart, photo];

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Now navigate to the buy page after adding to the cart
    navigate("/buy", { state: { product: photo } });
  };

  const customImages = [
    "https://media.istockphoto.com/id/1166945451/photo/wooden-soap-dish-soap-eucalyptus-over-green-background-zero-waste-natural-organic-bathroom.jpg?s=612x612&w=0&k=20&c=rfKXuoPfN4Suz5tNVwIlBS220RowKAt00upmQ51ZP3g=",
    "https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=612x612&w=0&k=20&c=UX79enZ3Rn2jX5labxi_u2Y0s4X3lfOPfr_UG91yego=",
    "https://media.istockphoto.com/id/1341265777/photo/rustic-decor-for-christmas-holiday-family-dinner-center-piece-with-white-candle-dry-orange.jpg?s=612x612&w=0&k=20&c=V02ChGR8JTDpZz74pAjBp6nMFHRgduAYa5T_ea_tGNE="
  ];

  // Styles for the slideshow container and grid layout
  const containerStyle = {
    background: "#D9EAD3",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    marginBottom: "30px",
  };

  const imageContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px"
  };

  const textStyle = {
    flex: 1,
    textAlign: "left",
    padding: "20px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#1e8449",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "15px",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginTop: "20px",
    padding: "0 20px"
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  };

  const photoStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    border: "2px solid #E3F2FD",
    borderRadius: "1px",
  };

  const buttonStyle = {
    backgroundColor: "#d43d68",
    border: "none",
    color: "white",
    padding: "15px 20px",
    textAlign: "center",
    fontSize: "16px",
    marginTop: "5px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  };

  return (
    <div>
      <br></br>
      <br></br>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <div style={{ flex: 1 }}>
            <img
              src={customImages[currentIndex]}
              alt={`Custom Image ${currentIndex + 1}`}
              style={imageStyle}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            />
          </div>
          <div style={textStyle}>
            <p style={{ animation: "slideIn 1s ease-in-out" }}>🏠 Home Living Collection 🏠</p>
            <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
              Discover elegant home living decor at unbeatable prices!
            </p>
          </div>
        </div>
      </div>

      <div style={gridContainerStyle}>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} style={cardStyle}>
              <img
                src={photo.src.original}
                alt={photo.alt}
                style={photoStyle}
              />
              <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
              <button
                style={buttonStyle}
                onClick={() => handleAddToCart(photo)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#d43d68";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#943126";
                  e.target.style.transform = "scale(1)";
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No photos available</p>
        )}
      </div>

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Living;
