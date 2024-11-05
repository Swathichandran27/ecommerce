



import React, { useState } from 'react';
import { pink } from '@mui/material/colors';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import ProfileDetailsDialog from '../Home/ProfileDetailsDialog';
import LoginPage from '../LoginPage';
import SignPage from '../SignPage';
import FavoritesDialog from '../Home/FavoritesDialog';
import AdminLoginPage from '../AdminPAge/AdminLoginPage'; 

const MENU_OPTIONS = ["SHOP", "MEN", "WOMEN", "KIDS", "LIVING", "BEAUTY"];

const Navbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("SHOP");
    const [dialogState, setDialogState] = useState({
        loginDialog: false,
        profile: false,
        signUp: false,
        favorites: false,
        search: false,
        loginType: ''
    });

    const toggleDialog = (dialogName) => {
        setDialogState((prev) => ({ ...prev, [dialogName]: !prev[dialogName] }));
    };

    const handleMenuClick = (menuOption) => {
        setMenu(menuOption);
        navigate(`/${menuOption.toLowerCase()}`);
    };
    const handleViewCart = () => {
        navigate('/add-to-cart');  // When this is clicked, it will go to the cart page
      };
    
    const handleClose = () => {
        setDialogState({
            loginDialog: false,
            profile: false,
            signUp: false,
            favorites: false,
            loginType: ''
        });
    };

    return (
        <div>
            <div className='navbar'>
                <div className='nav-logo'>
                    <ShoppingBagIcon style={{ color: '#de3163' }} />
                    <p><i>TIJARACART</i></p>
                </div>
                <ul className='nav-menu'>
                    {MENU_OPTIONS.map(option => (
                        <li key={option} onClick={() => handleMenuClick(option)}>
                            <Link to={`/${option.toLowerCase()}`} style={{ color: '#de3163' }}>
                                <b>{option}</b>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='nav-right'>
                    <SearchIcon 
                        sx={{ fontSize: 40, cursor: 'pointer', marginRight: '20px', color: '#de3163' }}
                        onClick={() => toggleDialog('search')} 
                    />
                    {dialogState.search && (
                        <TextField 
                            variant="outlined"
                            placeholder="Search items..."
                            sx={{ marginRight: '20px', backgroundColor: 'white', borderRadius: '4px', width: '200px' }}
                        />
                    )}
                    <FavoriteBorderIcon sx={{ fontSize: 40, color: '#de3163' }} onClick={() => toggleDialog('favorites')} />
                    <AccountCircleIcon sx={{ fontSize: 40, color: '#de3163' }} onClick={() => toggleDialog('profile')} />
                    <ShoppingCartIcon 
                        sx={{ fontSize: 40, color: '#de3163' }} 
                        onClick={handleViewCart} 
                    />
                </div>

                {dialogState.profile && (
                    <ProfileSidebar 
                        onClose={handleClose} 
                        onLoginClick={() => toggleDialog('loginDialog')}
                        onSignUpClick={() => toggleDialog('signUp')}
                        onProfileDetailsClick={() => toggleDialog('profileDetails')}
                        onOrdersClick={() => navigate('/order-summary')}
                    />
                )}

                <LoginDialog 
                    open={dialogState.loginDialog}
                    onClose={handleClose}
                    setLoginType={(type) => {
                        setDialogState({ ...dialogState, loginDialog: false, loginType: type });
                    }}
                />

                {dialogState.loginType === 'user' && (
                    <ModalContent component={<LoginPage />} onClose={handleClose} />
                )}
                {dialogState.loginType === 'admin' && (
                    <ModalContent component={<AdminLoginPage />} onClose={handleClose} />
                )}

                <ProfileDetailsDialog open={dialogState.profileDetails} onClose={handleClose} />
                <FavoritesDialog open={dialogState.favorites} onClose={handleClose} />
                {dialogState.signUp && (
                    <ModalContent component={<SignPage />} onClose={handleClose} />
                )}
            </div>
        </div>
    );
};

const ProfileSidebar = ({ onClose, onLoginClick, onSignUpClick, onProfileDetailsClick, onOrdersClick }) => (
    <div className='profile-sidebar'>
        <CloseIcon sx={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }} onClick={onClose} />
        <div className='profile-header'>
            <p>Welcome</p>
            <p>To access account and manage orders</p>
            <button className='pink-button' onClick={onLoginClick}>LOGIN</button>
            <button className='pink-button' onClick={onSignUpClick}>SIGN UP</button>
        </div>
        <ul className='profile-options'>
            <li onClick={onProfileDetailsClick}>Profile details</li>
            <li onClick={onOrdersClick}>Orders</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
            <li>TijaraCart Insider <span className="new-tag">New</span></li>
            <li>TijaraCart Credit</li>
            <li>Coupons</li>
            <li>Saved Cards</li>
            <li>Saved VPA</li>
            <li>Saved Addresses</li>
        </ul>
    </div>
);

const LoginDialog = ({ open, onClose, setLoginType }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Choose Login Option</DialogTitle>
        <DialogContent>
            <Button onClick={() => setLoginType('user')}>User Login</Button>
            <Button onClick={() => setLoginType('admin')}>Admin Login</Button>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
    </Dialog>
);

const ModalContent = ({ component, onClose }) => (
    <div style={styles.centeredContainer}>
        {component}
        <button style={styles.closeButton} onClick={onClose}>X</button>
    </div>
);

const styles = {
    centeredContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        zIndex: 1000,
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    }
};

export default Navbar;

