
import React from 'react';
import { Box, Typography, Grid, Paper, Button, TextField } from '@mui/material';
import { purple, green, blue, orange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminDashboard = ({ dashboardData }) => {
    const navigate = useNavigate();
    
    const handleCardClick = (message) => {
        alert(message); // You can replace this with any action or navigation
    };

    const handleDataButtonClick = () => {
        navigate('/data'); // Navigate to /data when the button is clicked
    };

    // Dummy data for charts
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October',],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [12, 19, 3, 5, 2, 3,26,10,5,35,40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const barData = {
        labels: ['Orders', 'Income', 'Expense', 'Users', 'Products', 'Categories'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const doughnutData = {
        labels: ['Electronics', 'Clothing', 'Furniture', 'Groceries'],
        datasets: [
            {
                data: [300, 50, 100, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
            },
        ],
    };

    return (
        <Box
            sx={{
                padding: '40px',
                backgroundColor: '#f4f7fc',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    Admin Dashboard
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ fontWeight: 'bold', padding: '10px 30px' }}
                    onClick={handleDataButtonClick}
                >
                    DATA
                </Button>
            </Grid>

            <Grid container spacing={3}>
                {/* New Orders Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ padding: '20px', backgroundColor: purple[50], borderRadius: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: purple[600] }}>
                            New Orders
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={dashboardData.newOrders || 0}
                            InputProps={{ readOnly: true }}
                            sx={{ mt: 1, textAlign: 'center' }}
                        />
                    </Paper>
                </Grid>
                {/* Total Income Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ padding: '20px', backgroundColor: green[50], borderRadius: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: green[600] }}>
                            Total Income
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={dashboardData.totalIncome || 0}
                            InputProps={{ readOnly: true }}
                            sx={{ mt: 1 }}
                        />
                    </Paper>
                </Grid>
                {/* Total Expense Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ padding: '20px', backgroundColor: blue[50], borderRadius: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: blue[600] }}>
                            Total Expense
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={dashboardData.totalExpense || 0}
                            InputProps={{ readOnly: true }}
                            sx={{ mt: 1 }}
                        />
                    </Paper>
                </Grid>
                {/* New Users Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ padding: '20px', backgroundColor: orange[50], borderRadius: 2, textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: orange[600] }}>
                            New Users
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={dashboardData.newUser || 0}
                            InputProps={{ readOnly: true }}
                            sx={{ mt: 1 }}
                        />
                    </Paper>
                </Grid>
            </Grid>

            <Box sx={{ mt: 5, p: 4, backgroundColor: '#fff', borderRadius: 4, boxShadow: 4 }}>
  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#333', textTransform: 'uppercase' }}>
    Summary
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          textAlign: 'center',
          backgroundColor: '#f0f4f8',
          borderRadius: 3,
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-3px)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          Products
        </Typography>
        <TextField
          value={dashboardData.products || 0}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          size="small"
          sx={{ '& .MuiOutlinedInput-input': { textAlign: 'center', fontWeight: 'bold', color: '#333' } }}
        />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          textAlign: 'center',
          backgroundColor: '#f0f4f8',
          borderRadius: 3,
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-3px)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          Categories
        </Typography>
        <TextField
          value={dashboardData.categories || 0}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          size="small"
          sx={{ '& .MuiOutlinedInput-input': { textAlign: 'center', fontWeight: 'bold', color: '#333' } }}
        />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          textAlign: 'center',
          backgroundColor: '#f0f4f8',
          borderRadius: 3,
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-3px)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          Customers
        </Typography>
        <TextField
          value={dashboardData.customers || 0}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          size="small"
          sx={{ '& .MuiOutlinedInput-input': { textAlign: 'center', fontWeight: 'bold', color: '#333' } }}
        />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          textAlign: 'center',
          backgroundColor: '#f0f4f8',
          borderRadius: 3,
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-3px)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <Typography variant="body2" sx={{ color: '#777', mb: 1 }}>
          Orders
        </Typography>
        <TextField
          value={dashboardData.orders || 0}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          size="small"
          sx={{ '& .MuiOutlinedInput-input': { textAlign: 'center', fontWeight: 'bold', color: '#333' } }}
        />
      </Paper>
    </Grid>
  </Grid>
</Box>

            {/* Charts Section */}
            <Box sx={{ mt: 5, p: 4, backgroundColor: '#fff', borderRadius: 4, boxShadow: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
                    Sales Overview
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Line data={lineData} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Bar data={barData} />
                    </Grid>
                </Grid>
            </Box>

            {/* <Box sx={{ mt: 5, p: 4, backgroundColor: '#fff', borderRadius: 4, boxShadow: 4 }}> 
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
                    Product Distribution
                </Typography>
                <Doughnut data={doughnutData} />
            </Box>*/}

            {/* Recent Activity Section */}
            <Box sx={{ mt: 5, p: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Recent Activity
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper sx={{ p: 2, mb: 2 }} onClick={() => handleCardClick('Delivered: iPhone X Mobile')}>
                            <Typography variant="body2">Delivered</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>iPhone X Mobile</Typography>
                            <Typography variant="body2" sx={{ color: '#777' }}>25 mins ago</Typography>
                        </Paper>
                        <Paper sx={{ p: 2, mb: 2 }} onClick={() => handleCardClick('Invoice: Shoes Adidas')}>
                            <Typography variant="body2">Invoice</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Shoes Adidas</Typography>
                            <Typography variant="body2" sx={{ color: '#777' }}>10 hours ago</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper sx={{ p: 2, mb: 2 }} onClick={() => handleCardClick('Order Return: iPhone X Mobile')}>
                            <Typography variant="body2">Order Return</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>iPhone X Mobile</Typography>
                            <Typography variant="body2" sx={{ color: '#777' }}>1 day ago</Typography>
                        </Paper>
                        <Paper sx={{ p: 2, mb: 2 }} onClick={() => handleCardClick('New Order: iPhone X Mobile')}>
                            <Typography variant="body2">New Order</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>iPhone X Mobile</Typography>
                            <Typography variant="body2" sx={{ color: '#777' }}>2 days ago</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default AdminDashboard;
