
// /*import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Home/Footer";

// const BeautyPage = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const response = await Axios.get("https://api.pexels.com/v1/search", {
//           headers: {
//             Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Replace with your API key from environment variables
//           },
//           params: {
//             query: "beauty products",
//             per_page: 15,
//           },
//         });
//         setPhotos(response.data.photos);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPhotos();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % customImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAddToCart = (photo) => {
//     navigate("/buy", { state: { product: photo } });
//   };

//   const customImages = [
//     "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg?s=612x612&w=0&k=20&c=4qEsfqeNNAcrlzZOwMjs9mZzPBUf1ey22v0gSjt7NcY=",
//     "https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg?s=612x612&w=0&k=20&c=nGFL8_thw9YEXYDCMRs0YK2AnLCXAP8ENSkribDsC6k=",
//     "https://media.istockphoto.com/id/1589996361/photo/beauty-products-cosmetics-products-perfume-products-body-care-products-baby-care-products-and.jpg?s=612x612&w=0&k=20&c=YL0sAK2xTUE_ZpMmrLD96WE-wC8yijz1lqokagkMu_g="
//   ];

//   const containerStyle = {
//     background: "#E6E6FA",
//     padding: "40px",
//     borderRadius: "10px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     marginBottom: "30px",
//   };

//   const imageContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "20px",
//   };

//   const textStyle = {
//     flex: 1,
//     textAlign: "left",
//     padding: "20px",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#fff",
//     animation: "fadeIn 1s ease-in-out",
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
//   };

//   const imageStyle = {
//     maxWidth: "100%",
//     height: "auto",
//     borderRadius: "15px",
//     objectFit: "cover",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//     transition: "transform 0.3s ease",
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div style={containerStyle}>
//         <div style={imageContainerStyle}>
//           <div style={{ flex: 1 }}>
//             <img
//               src={customImages[currentIndex]}
//               alt={`Custom Image ${currentIndex + 1}`}
//               style={imageStyle}
//               onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} 
//               onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//             />
//           </div>
//           <div style={textStyle}>
//             <p style={{ animation: "slideIn 1s ease-in-out" }}>✨ Hurry Up! ✨</p>
//             <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
//               Grab your favorite beauty products before they’re gone!
//             </p>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
//         {loading ? (
//           <p>Loading photos...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : photos.length > 0 ? (
//           photos.map((photo) => (
//             <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
//               <img 
//                 src={photo.src.original} 
//                 alt={photo.alt} 
//                 style={{ 
//                   width: "100%", 
//                   height: "300px", 
//                   objectFit: "cover", 
//                   border: "2px solid #E3F2FD", 
//                   borderRadius: "1px" 
//                 }} 
//               />
//               <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
//               <button
//                 style={{
//                   backgroundColor: "#E6E6FA",
//                   border: "none",
//                   color: "white",
//                   padding: "15px 20px",
//                   textAlign: "center",
//                   display: "inline-block",
//                   fontSize: "16px",
//                   marginTop: "5px",
//                   marginBottom: "10px",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                   transition: "background-color 0.3s ease, transform 0.3s ease",
//                 }}
//                 onClick={() => handleAddToCart(photo)}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#7a2427"; 
//                   e.target.style.transform = "scale(1.05)"; 
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#943126"; 
//                   e.target.style.transform = "scale(1)"; 
//                 }}
//               >
//                 🛒 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No photos available</p>
//         )}
//       </div>
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           @keyframes slideIn {
//             from { transform: translateY(-20px); opacity: 0; }
//             to { transform: translateY(0); opacity: 1; }
//           }
//         `}
//       </style>
//       <br />
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default BeautyPage;*/


// /*import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Home/Footer";

// const BeautyPage = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const response = await Axios.get("https://api.pexels.com/v1/search", {
//           headers: {
//             Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Replace with your API key from environment variables
//           },
//           params: {
//             query: "beauty products",
//             per_page: 15,
//           },
//         });
//         setPhotos(response.data.photos);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPhotos();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % customImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Add to cart handler
//   const handleAddToCart = (photo) => {
//     // Get existing cart from localStorage or initialize with an empty array
//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     // Add the new product to the cart
//     const updatedCart = [...existingCart, photo];

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     // Navigate to the cart page
//     navigate("/add-to-cart");
//   };

//   const customImages = [
//     "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg?s=612x612&w=0&k=20&c=4qEsfqeNNAcrlzZOwMjs9mZzPBUf1ey22v0gSjt7NcY=",
//     "https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg?s=612x612&w=0&k=20&c=nGFL8_thw9YEXYDCMRs0YK2AnLCXAP8ENSkribDsC6k=",
//     "https://media.istockphoto.com/id/1589996361/photo/beauty-products-cosmetics-products-perfume-products-body-care-products-baby-care-products-and.jpg?s=612x612&w=0&k=20&c=YL0sAK2xTUE_ZpMmrLD96WE-wC8yijz1lqokagkMu_g="
//   ];

//   const containerStyle = {
//     background: "#E6E6FA",
//     padding: "40px",
//     borderRadius: "10px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     marginBottom: "30px",
//   };

//   const imageContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "20px",
//   };

//   const textStyle = {
//     flex: 1,
//     textAlign: "left",
//     padding: "20px",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#fff",
//     animation: "fadeIn 1s ease-in-out",
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
//   };

//   const imageStyle = {
//     maxWidth: "100%",
//     height: "auto",
//     borderRadius: "15px",
//     objectFit: "cover",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//     transition: "transform 0.3s ease",
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div style={containerStyle}>
//         <div style={imageContainerStyle}>
//           <div style={{ flex: 1 }}>
//             <img
//               src={customImages[currentIndex]}
//               alt={`Custom Image ${currentIndex + 1}`}
//               style={imageStyle}
//               onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} 
//               onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//             />
//           </div>
//           <div style={textStyle}>
//             <p style={{ animation: "slideIn 1s ease-in-out" }}>✨ Hurry Up! ✨</p>
//             <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
//               Grab your favorite beauty products before they’re gone!
//             </p>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
//         {loading ? (
//           <p>Loading photos...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : photos.length > 0 ? (
//           photos.map((photo) => (
//             <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
//               <img 
//                 src={photo.src.original} 
//                 alt={photo.alt} 
//                 style={{ 
//                   width: "100%", 
//                   height: "300px", 
//                   objectFit: "cover", 
//                   border: "2px solid #E3F2FD", 
//                   borderRadius: "1px" 
//                 }} 
//               />
//               <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
//               <button
//                 style={{
//                   backgroundColor: "#E6E6FA",
//                   border: "none",
//                   color: "white",
//                   padding: "15px 20px",
//                   textAlign: "center",
//                   display: "inline-block",
//                   fontSize: "16px",
//                   marginTop: "5px",
//                   marginBottom: "10px",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                   transition: "background-color 0.3s ease, transform 0.3s ease",
//                 }}
//                 onClick={() => handleAddToCart(photo)}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#7a2427"; 
//                   e.target.style.transform = "scale(1.05)"; 
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#943126"; 
//                   e.target.style.transform = "scale(1)"; 
//                 }}
//               >
//                 🛒 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No photos available</p>
//         )}
//       </div>
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           @keyframes slideIn {
//             from { transform: translateY(-20px); opacity: 0; }
//             to { transform: translateY(0); opacity: 1; }
//           }
//         `}
//       </style>
//       <br />
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default BeautyPage;
// */
// /*
// import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import Footer from "../Home/Footer";

// const BeautyPage = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const response = await Axios.get("https://api.pexels.com/v1/search", {
//           headers: {
//             Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Replace with your API key
//           },
//           params: {
//             query: "beauty products",
//             per_page: 15,
//           },
//         });
//         setPhotos(response.data.photos);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPhotos();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % customImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAddToCart = (photo) => {
//     const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const updatedCart = [...storedCart, photo];
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     alert('Item added to cart!');
//   };

//   const customImages = [
//     "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg",
//     "https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg",
//     "https://media.istockphoto.com/id/1589996361/photo/beauty-products-cosmetics-products-perfume-products-body-care-products-baby-care-products-and.jpg"
//   ];

//   const containerStyle = {
//     background: "#E6E6FA",
//     padding: "40px",
//     borderRadius: "10px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     marginBottom: "30px",
//   };

//   const imageContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "20px",
//   };

//   const textStyle = {
//     flex: 1,
//     textAlign: "left",
//     padding: "20px",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#fff",
//     animation: "fadeIn 1s ease-in-out",
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
//   };

//   const imageStyle = {
//     maxWidth: "100%",
//     height: "auto",
//     borderRadius: "15px",
//     objectFit: "cover",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//     transition: "transform 0.3s ease",
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div style={containerStyle}>
//         <div style={imageContainerStyle}>
//           <div style={{ flex: 1 }}>
//             <img
//               src={customImages[currentIndex]}
//               alt={`Custom Image ${currentIndex + 1}`}
//               style={imageStyle}
//               onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} 
//               onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//             />
//           </div>
//           <div style={textStyle}>
//             <p style={{ animation: "slideIn 1s ease-in-out" }}>✨ Hurry Up! ✨</p>
//             <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
//               Grab your favorite beauty products before they’re gone!
//             </p>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
//         {loading ? (
//           <p>Loading photos...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : photos.length > 0 ? (
//           photos.map((photo) => (
//             <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
//               <img 
//                 src={photo.src.original} 
//                 alt={photo.alt} 
//                 style={{ 
//                   width: "100%", 
//                   height: "300px", 
//                   objectFit: "cover", 
//                   border: "2px solid #E3F2FD", 
//                   borderRadius: "1px" 
//                 }} 
//               />
//               <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
//               <button
//                 style={{
//                   backgroundColor: "#E6E6FA",
//                   border: "none",
//                   color: "white",
//                   padding: "15px 20px",
//                   textAlign: "center",
//                   display: "inline-block",
//                   fontSize: "16px",
//                   marginTop: "5px",
//                   marginBottom: "10px",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                   transition: "background-color 0.3s ease, transform 0.3s ease",
//                 }}
//                 onClick={() => handleAddToCart(photo)}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#7a2427"; 
//                   e.target.style.transform = "scale(1.05)"; 
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#943126"; 
//                   e.target.style.transform = "scale(1)"; 
//                 }}
//               >
//                 🛒 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No photos available</p>
//         )}
//       </div>
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default BeautyPage;*/
// import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import Footer from "../Home/Footer";

// const BeautyPage = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const response = await Axios.get("https://api.pexels.com/v1/search", {
//           headers: {
//             Authorization: 'YOUR_API_KEY',  // Replace with your API key
//           },
//           params: {
//             query: "beauty products",
//             per_page: 15,
//           },
//         });
//         setPhotos(response.data.photos);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPhotos();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % customImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAddToCart = (photo) => {
//     const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const updatedCart = [...storedCart, photo];
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     alert('Item added to cart!');
//   };

//   const customImages = [
//     "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg",
//     "https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg",
//     "https://media.istockphoto.com/id/1589996361/photo/beauty-products-cosmetics-products-perfume-products-body-care-products-baby-care-products-and.jpg"
//   ];

//   const containerStyle = {
//     background: "#E6E6FA",
//     padding: "40px",
//     borderRadius: "10px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     marginBottom: "30px",
//   };

//   const imageContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "20px",
//   };

//   const textStyle = {
//     flex: 1,
//     textAlign: "left",
//     padding: "20px",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#fff",
//     animation: "fadeIn 1s ease-in-out",
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
//   };

//   const imageStyle = {
//     maxWidth: "100%",
//     height: "auto",
//     borderRadius: "15px",
//     objectFit: "cover",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//     transition: "transform 0.3s ease",
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <div style={containerStyle}>
//         <div style={imageContainerStyle}>
//           <div style={{ flex: 1 }}>
//             <img
//               src={customImages[currentIndex]}
//               alt={`Custom Image ${currentIndex + 1}`}
//               style={imageStyle}
//               onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} 
//               onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//             />
//           </div>
//           <div style={textStyle}>
//             <p style={{ animation: "slideIn 1s ease-in-out" }}>✨ Hurry Up! ✨</p>
//             <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
//               Grab your favorite beauty products before they’re gone!
//             </p>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
//         {loading ? (
//           <p>Loading photos...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : photos.length > 0 ? (
//           photos.map((photo) => (
//             <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
//               <img 
//                 src={photo.src.original} 
//                 alt={photo.alt} 
//                 style={{ 
//                   width: "100%", 
//                   height: "300px", 
//                   objectFit: "cover", 
//                   border: "2px solid #E3F2FD", 
//                   borderRadius: "1px" 
//                 }} 
//               />
//               <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
//               <button
//                 style={{
//                   backgroundColor: "#E6E6FA",
//                   border: "none",
//                   color: "white",
//                   padding: "15px 20px",
//                   textAlign: "center",
//                   display: "inline-block",
//                   fontSize: "16px",
//                   marginTop: "5px",
//                   marginBottom: "10px",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                   transition: "background-color 0.3s ease, transform 0.3s ease",
//                 }}
//                 onClick={() => handleAddToCart(photo)}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#7a2427"; 
//                   e.target.style.transform = "scale(1.05)"; 
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#943126"; 
//                   e.target.style.transform = "scale(1)"; 
//                 }}
//               >
//                 🛒 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No photos available</p>
//         )}
//       </div>
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default BeautyPage;

/*

import Axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";

const BeautyPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await Axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Replace with your API key
          },
          params: {
            query: "beauty products",
            per_page: 15,
          },
        });
        setPhotos(response.data.photos);
      } catch (error) {
        setError('Failed to fetch photos. Please try again later.');
      } finally {
        setLoading(false);
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
    // Get the existing cart from localStorage or initialize it
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the new product to the cart
    const updatedCart = [...cart, photo];
    
    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    alert('Item added to cart!');
  };

  const customImages = [
    "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg",
    "https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg",
    "https://media.istockphoto.com/id/1589996361/photo/beauty-products-cosmetics-products.jpg"
  ];

  return (
    <div>
      <br />
      <br />
      <div style={{ background: "#E6E6FA", padding: "40px", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <img
              src={customImages[currentIndex]}
              alt={`Custom Image ${currentIndex + 1}`}
              style={{ maxWidth: "100%", borderRadius: "15px", objectFit: "cover", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
            />
          </div>
          <div style={{ flex: 1, padding: "20px", color: "#fff", fontSize: "36px", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
            <p>✨ Hurry Up! ✨</p>
            <p>Grab your favorite beauty products before they’re gone!</p>
          </div>
        </div>
      </div>
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", padding: "0 20px" }}>
        {loading ? (
          <p>Loading photos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
              <img src={photo.src.original} alt={photo.alt} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
              <p>{photo.photographer}</p>
              <button
                style={{ backgroundColor: "#E6E6FA", color: "white", padding: "15px 20px", marginTop: "5px", cursor: "pointer", borderRadius: "5px" }}
                onClick={() => handleAddToCart(photo)}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No photos available</p>
        )}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default BeautyPage;
*/



import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

const BeautyPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await Axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Replace with your API key from environment variables
          },
          params: {
            query: "beauty products",
            per_page: 15,
          },
        });
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch photos. Please try again later.');
      } finally {
        setLoading(false);
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
    "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg?s=612x612&w=0&k=20&c=4qEsfqeNNAcrlzZOwMjs9mZzPBUf1ey22v0gSjt7NcY=",
    "https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg?s=612x612&w=0&k=20&c=nGFL8_thw9YEXYDCMRs0YK2AnLCXAP8ENSkribDsC6k=",
    "https://media.istockphoto.com/id/1589996361/photo/beauty-products-cosmetics-products-perfume-products-body-care-products-baby-care-products-and.jpg?s=612x612&w=0&k=20&c=YL0sAK2xTUE_ZpMmrLD96WE-wC8yijz1lqokagkMu_g="
  ];

  const containerStyle = {
    background: "#E6E6FA",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    marginBottom: "30px",
  };

  const imageContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const textStyle = {
    flex: 1,
    textAlign: "left",
    padding: "20px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
    animation: "fadeIn 1s ease-in-out",
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
      <br />
      <br />
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
            <p style={{ animation: "slideIn 1s ease-in-out" }}>✨ Hurry Up! ✨</p>
            <p style={{ animation: "slideIn 1.5s ease-in-out" }}>
              Grab your favorite beauty products before they’re gone!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
        {loading ? (
          <p>Loading photos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : photos.length > 0 ? (
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
                  backgroundColor: " #d43d68",
                  border: "none",
                  color: "white",
                  padding: "15px 20px",
                  textAlign: "center",
                  display: "inline-block",
                  fontSize: "16px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
                onClick={() => handleAddToCart(photo)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#7a2427";
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
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default BeautyPage;
