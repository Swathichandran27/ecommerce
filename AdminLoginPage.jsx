
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'admin@example.com' && password === 'password') {
            navigate('/admin-dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Box sx={styles.container}>
            {/* Left Side: Animation or Image */}
            <Box sx={styles.left}>
                <img 
                    src="https://i.pinimg.com/236x/4f/48/d5/4f48d5174df866190024435fb34d3931.jpg" 
                    alt="Admin Animation" 
                    style={styles.image} 
                />
            </Box>

            {/* Right Side: Login Form */}
            <Box sx={styles.right}>
                <Box sx={styles.formContainer}>
                    <Typography variant="h4" sx={styles.header}>Admin Login</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={styles.textField}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={styles.textField}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth 
                            sx={styles.button}
                        >
                            Login
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '500px',
        with:'850px',
        backgroundColor: '#f5f5f5',
    },
    left: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    formContainer: {
        width: '80%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    textField: {
        marginBottom: '20px',
    },
    button: {
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#00796b',
        '&:hover': {
            backgroundColor: '#004d40',
        },
    },
    image: {
        maxWidth: '70%',
        height: 'auto',
    },
};

export default AdminLoginPage;
