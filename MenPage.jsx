
// import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Home/Footer";


// const MenPage = () => {
//   const [photos, setPhotos] = useState([]);
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         // Replace with your Pexels API Key
//         const response = await Axios.get("https://api.pexels.com/v1/search", {
//           headers: {
//             Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Pexels API Key
//           },
//           params: {
//             query: "men's clothing",
//             per_page: 54, // Number of photos to fetch
//           },
//         });

//         // Set the fetched photos
//         setPhotos(response.data.photos);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % customImages.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const handleAddToCart = (photo) => {
//     // Navigate to the BuyPage and pass the selected product as state
//     navigate("/buy", { state: { product: photo } });
//   };

//   const customImages = [
//     "https://media.istockphoto.com/id/1404654875/photo/various-vintage-jackets-on-clothing-rack-in-second-hand-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=IBIeufgEWIhJMKLdj5Tko3OZDJLxLA3setMnr8TlSiE=",
//     "https://media.istockphoto.com/id/1852394722/photo/asian-chinese-young-man-looking-at-camera-with-cool-attitude-at-night-at-city-street.jpg?s=612x612&w=0&k=20&c=UI2ijk9K2SzVC-d_IpYj-A3W2b_o8_LngWN2J4Qy_QI=",
//     "https://media.istockphoto.com/id/1193690015/photo/handsome-gen-z-indian-arabic-man-walking-through-walkway-wearing-white-t-shirt-and-grey.jpg?s=612x612&w=0&k=20&c=CmOG6oyy7Hojgyeo5T6jhjCprfzKh4MHm_j5hszixqw="
//   ];

//   // Styles for slideshow container and images
//   const containerStyle = {
//     background: "#C5C9D8 ", // Light background for slideshow
//     padding: "40px",
//     borderRadius: "10px",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     marginBottom: "30px",
//   };

//   const imageContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "20px"
//   };

//   const textStyle = {
//     flex: 1,
//     textAlign: "left",
//     padding: "20px",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#76448a",
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
//       <br></br>
//       <br></br>
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
//             <p style={{ animation: "slideIn 1s ease-in-out" }}>🛍 Fashion Alert! 🛍</p>
//             <p style={{ animation: "slideIn 1s ease-in-out" }}>
//               Get the latest men's clothing at amazing prices!
//             </p>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "20px", padding: "0 20px" }}>
//         {photos.length > 0 ? (
//           photos.map((photo) => (
//             <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
//               <img
//                 src={photo.src.original}
//                 alt={photo.alt}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   objectFit: "cover",
//                   border: "2px solid #E3F2FD", // Add a border to the fetched images
//                   borderRadius: "1px" // Ensure the border has the same border-radius as the image container
//                 }}
//               />
//               <p style={{ fontWeight: "bold", padding: "10px", background: "#fff", margin: 0 }}>{photo.photographer}</p>
//               <button
//                 style={{
//                   backgroundColor: " #B3C7E6",
//                   border: "none",
//                   color: "white",
//                   padding: "15px 20px",
//                   textAlign: "center",
//                   display: "inline-block",
//                   fontSize: "16px",
//                   marginTop: "5px",
//                   marginBottom:"10px", // Slightly moved up the button
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
//           @keyframes slideIn {
//             from { transform: translateY(-20px); opacity: 0; }
//             to { transform: translateY(0); opacity: 1; }
//           }
//         `}
//       </style>
//       <br></br>
//       <br></br>
//       <Footer/>
//     </div>
//   );
// };

// export default MenPage;


import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";


const MenPage = () => {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Replace with your Pexels API Key
        //const response = await Axios.get("https://api.pexels.com/v1/search", 
         const response = await Axios.get("https://api.pexels.com/v1/search",{
          headers: {
            Authorization: 'h44VjIKZR7v8r6l65kGKNFqp9E7zk2lAgUjVEEdlmMIsbZHOdsN6kk6k',  // Pexels API Key
          },
          params: {
            query: "men's casual wear",
            per_page: 100, // Number of photos to fetch
          },
        });

        // Set the fetched photos
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
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
    "https://media.istockphoto.com/id/1404654875/photo/various-vintage-jackets-on-clothing-rack-in-second-hand-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=IBIeufgEWIhJMKLdj5Tko3OZDJLxLA3setMnr8TlSiE=",
    "https://media.istockphoto.com/id/1852394722/photo/asian-chinese-young-man-looking-at-camera-with-cool-attitude-at-night-at-city-street.jpg?s=612x612&w=0&k=20&c=UI2ijk9K2SzVC-d_IpYj-A3W2b_o8_LngWN2J4Qy_QI=",
    "https://media.istockphoto.com/id/1193690015/photo/handsome-gen-z-indian-arabic-man-walking-through-walkway-wearing-white-t-shirt-and-grey.jpg?s=612x612&w=0&k=20&c=CmOG6oyy7Hojgyeo5T6jhjCprfzKh4MHm_j5hszixqw="
  ];

  // Styles for slideshow container and images
  const containerStyle = {
    background: "#C5C9D8 ", // Light background for slideshow
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
    color: "#76448a",
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
            <p style={{ animation: "slideIn 1s ease-in-out" }}>🛍 Fashion Alert! 🛍</p>
            <p style={{ animation: "slideIn 1s ease-in-out" }}>
              Get the latest men's clothing at amazing prices!
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
                  border: "2px solid #E3F2FD", // Add a border to the fetched images
                  borderRadius: "1px" // Ensure the border has the same border-radius as the image container
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
                  marginBottom:"10px", // Slightly moved up the button
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

export default MenPage;

