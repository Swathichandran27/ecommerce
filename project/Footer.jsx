// Footer.js
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';  // Assuming you're using Material-UI for icons
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/Twitter'; // Twitter icon as X
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#e5e7e9', color: 'grey', padding: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        {/* About Section */}
        <div>
          <h3>TijaraCart</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#about-us" style={{ color: 'black', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="#careers" style={{ color: 'black', textDecoration: 'none' }}>Men</a></li>
            <li><a href="#news" style={{ color: 'black', textDecoration: 'none' }}>Women</a></li>
            <li><a href="#privacy-policy" style={{ color: 'black', textDecoration: 'none' }}>Kids</a></li>
            <li><a href="#terms" style={{ color: 'black', textDecoration: 'none' }}>Home & Living</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3>Help</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#faq" style={{ color: 'black', textDecoration: 'none' }}>FAQs</a></li>
            <li><a href="#contact" style={{ color: 'black', textDecoration: 'none' }}>Contact Us</a></li>
            <li><a href="#wallet-faqs" style={{ color: 'black', textDecoration: 'none' }}>Terms Of USe</a></li>
            <li><a href="#vendor-connect" style={{ color: 'black', textDecoration: 'none' }}>Shipping</a></li>
            <li><a href="#vendor-connect" style={{ color: 'black', textDecoration: 'none' }}>Cancellation</a></li>
            <li><a href="#vendor-connect" style={{ color: 'black', textDecoration: 'none' }}>Returns</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3>Follow Us</h3>
          <div color='grey'>
            <a href="https://facebook.com" style={{ marginRight: '10px' }}>
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" style={{ marginRight: '10px' }}>
              <InstagramIcon />
            </a>
            <a href="https://twitter.com" style={{ marginRight: '10px' }}>
              <XIcon />
            </a>
            <a href="https://pinterest.com">
              <PinterestIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Cities We Serve Section */}
      <div style={{ backgroundColor: '#e5e7e9', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Cities We Serve</h4>
          <p style={{ textAlign: 'center', color: 'grey' }}>
            Abohar | Abu Road | Achampet | Achrol | Adampur | Addanki | Adilabad | Agra | Ahmedabad | Aizawl | Alappuzha | Almora | ... {/* Add more cities */}
          </p>
        </div>
      </div>

      {/* App Download Section */}
      <div style={{ backgroundColor: '#e5e7e9', textAlign: 'center', padding: '20px' }}>
        <a href="https://play.google.com" style={{ marginRight: '10px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigowS5DTVVME-P_pHZSDaubqQWQK3tJD0W9zAPeXfwk_wULjUxse3kiDBf9IoBQtorw&usqp=CAU" alt="Google Play" style={{ width: '150px' }} />
        </a>
        <a href="https://apple.com/app-store">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" style={{ width: '150px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;