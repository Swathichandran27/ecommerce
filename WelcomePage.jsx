// HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { motion } from 'framer-motion'; // For animation

const HomePage = () => {
  const [openDialog, setOpenDialog] = useState(true); // Dialog is initially open
  const navigate = useNavigate();

  // Function to handle navigation based on user's choice
  const handleChoice = (choice) => {
    setOpenDialog(false);
    if (choice === 'admin') {
      navigate('/admin-login'); // Redirect to admin login page
    } else if (choice === 'user') {
      navigate('/user-login'); // Redirect to user login page
    } else if (choice === 'signup') {
      navigate('/signup'); // Redirect to signup page
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="dialog-title"
        >
          <DialogTitle id="dialog-title" style={{ textAlign: 'center' }}>
            Welcome to TijaraCart
          </DialogTitle>
          <DialogContent style={{ textAlign: 'center', paddingBottom: 0 }}>
            <p>Please choose an option to continue:</p>
          </DialogContent>
          <DialogActions style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleChoice('admin')}
              style={{ width: '80%' }}
            >
              Admin Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleChoice('user')}
              style={{ width: '80%' }}
            >
              User Login
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleChoice('signup')}
              style={{ width: '80%' }}
            >
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default HomePage;
