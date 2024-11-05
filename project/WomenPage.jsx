
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

const WomenPage = () => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await Axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Pexels API Key
          },
          params: {
            query: "women's clothing",
            per_page: 54, // Number of photos to fetch
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
    "https://i.pinimg.com/564x/3d/e6/be/3de6be04b767e2aa0299e9b5deb5e1fd.jpg",
    "https://img.freepik.com/premium-photo/attractive-hot-girl-landscape-sitting-floor-wearing-desi-dress-fashion-photoshoot_658768-276.jpg",
    "https://img.freepik.com/premium-photo/cute-girl-landscape-waving-her-dupatta-wearing-traditional-dress-fashion-photoshoot_658768-440.jpg"
  ];

  const containerStyle = {
    background: "#F5E0F2",
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
    color: "#9c8f9a",
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
            <p style={{ animation: "slideIn 1s ease-in-out" }}>👗 Fashion Alert! 👗</p>
            <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
              Discover the latest trends in women's clothing!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
              <img
                src={photo.src.original}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  border: "2px solid #E3F2FD",
                  borderRadius: "1px"
                }}
              />
              <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
              <button
                style={{
                  backgroundColor: "#d43d68",
                  border: "none",
                  color: "white",
                  padding: "15px 20px",
                  textAlign: "center",
                  display: "inline-block",
                  fontSize: "16px",
                  marginTop: "5px",
                  marginBottom:"10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
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

export default WomenPage;




