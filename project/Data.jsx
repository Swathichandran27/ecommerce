
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';

const DataPage = ({ setDashboardData }) => {
    const [tablesData, setTablesData] = useState({
        newOrders: [],
        totalIncome: [],
        totalExpense: [],
        newUser: [],
        products: [],
        categories: [],
        customers: [],
        orders: [],
    });

    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '' });
    const [activeTable, setActiveTable] = useState('');
    const [isEditMode, setIsEditMode] = useState(false); // Track if dialog is for editing

    // State to track visibility of each table
    const [visibleTables, setVisibleTables] = useState({
        newOrders: false,
        totalIncome: false,
        totalExpense: false,
        newUser: false,
        products: false,
        categories: false,
        customers: false,
        orders: false,
    });

    // Fetch data from API on component mount
    useEffect(() => {
        axios.get('http://localhost:3000/users') // Adjust API endpoint as necessary
            .then(response => {
                const users = response.data;
                console.log("Fetched users:", users); // Log fetched data for debugging

                // Update tablesData with fetched data
                setTablesData(prev => ({
                    ...prev,
                    newOrders: users,
                    totalIncome: users,
                    totalExpense: users,
                    newUser: users,
                    products: users,
                    categories: users,
                    customers: users,
                    orders: users,
                }));

                // Update dashboard with user counts
                setDashboardData({
                    newOrders: users.length,
                    totalIncome: users.length,
                    totalExpense: users.length,
                    newUser: users.length,
                    products: users.length,
                    categories: users.length,
                    customers: users.length,
                    orders: users.length,
                });
            })
            .catch(error => console.error("Error fetching users:", error));
    }, [setDashboardData]);

    // Toggle visibility of a specific table
    const toggleTableVisibility = (key) => {
        setVisibleTables(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Open dialog for adding a new user or editing an existing user
    const handleAddClick = (key) => {
        setActiveTable(key); // Set which table the new user is being added to
        setFormData({ id: '', name: '' }); // Reset form data
        setIsEditMode(false); // Set to add mode
        setOpenDialog(true); // Open the dialog
    };

    // Open dialog for updating an existing user
    const handleEditClick = (key, item) => {
        setActiveTable(key);
        setFormData({ id: item.id, name: item.name }); // Pre-fill the form with existing data
        setIsEditMode(true); // Set to edit mode
        setOpenDialog(true); // Open the dialog
    };

    // Handle form input change
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Submit new or updated user data
    const handleFormSubmit = () => {
        const newItem = { ...formData };
        if (isEditMode) {
            // Update existing user
            handleUpdate(activeTable, newItem);
        } else {
            // Add new user
            const updatedTable = [...tablesData[activeTable], newItem];
            handlePost(activeTable, updatedTable);
        }
        setOpenDialog(false); // Close the dialog
    };

    // Generic function to update table data and dashboard
    const handleUpdate = (key, updatedItem) => {
        const updatedTable = tablesData[key].map(item => item.id === updatedItem.id ? updatedItem : item);
        setTablesData(prev => ({ ...prev, [key]: updatedTable }));

        // Update the dashboard
        setDashboardData(prev => ({ ...prev, [key]: updatedTable.length }));

        // Make POST request to update data on the server
        axios.post(`http://localhost:3000/users/${updatedItem.id}`, updatedItem) // Adjust API endpoint
            .catch(error => console.error("Error updating data:", error));
    };

    // Function to add a new user to the table
    const handlePost = (key, newValue) => {
        setTablesData(prev => ({ ...prev, [key]: newValue }));

        setDashboardData(prev => ({ ...prev, [key]: newValue.length }));

        axios.post(`http://localhost:3000/users`, newValue) // Adjust API endpoint
            .catch(error => console.error("Error adding data:", error));
    };

    // Delete user
    const handleDelete = (key, id) => {
        const updatedTable = tablesData[key].filter(item => item.id !== id);
        setTablesData(prev => ({ ...prev, [key]: updatedTable }));

        setDashboardData(prev => ({ ...prev, [key]: updatedTable.length }));

        // Make DELETE request to remove data from the server
        axios.delete(`http://localhost:3000/users/${id}`) // Adjust API endpoint
            .catch(error => console.error("Error deleting data:", error));
    };

    // Render table with toggle functionality
    const renderTable = (key, title) => (
        <Box key={key} sx={{ mb: 4 }}>
            <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 'bold', color: '#333', padding: '16px', cursor: 'pointer' }}
                onClick={() => toggleTableVisibility(key)}
            >
                {title}
            </Typography>
            {visibleTables[key] && (
                <>
                    <Button
                        onClick={() => handleAddClick(key)}
                        variant="contained"
                        color="primary"
                        sx={{ mb: 2 }}
                    >
                        Add New Item
                    </Button>
                    {tablesData[key].length > 0 ? (
                        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold', color: '#555' }}>ID</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', color: '#555' }}>Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', color: '#555' }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tablesData[key].map(item => (
                                        <TableRow key={item.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>
                                                <Button
                                                    onClick={() => handleDelete(key, item.id)}
                                                    color="secondary"
                                                    variant="outlined"
                                                    sx={{ mr: 1 }}
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    onClick={() => handleEditClick(key, item)}
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Update
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <Typography>No data available for {title}</Typography>
                    )}
                </>
            )}
        </Box>
    );

    return (
        <Box sx={{ padding: '30px', backgroundColor: '#f4f7fc', minHeight: '100vh' }}>
            {renderTable('newOrders', 'New Orders')}
            {renderTable('totalIncome', 'Total Income')}
            {renderTable('totalExpense', 'Total Expense')}
            {renderTable('newUser', 'New Users')}
            {renderTable('products', 'Products')}
            {renderTable('categories', 'Categories')}
            {renderTable('customers', 'Customers')}
            {renderTable('orders', 'Orders')}

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{isEditMode ? 'Edit Item' : 'Add New Item'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="id"
                        label="ID"
                        fullWidth
                        value={formData.id}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="name"
                        label="Name"
                        fullWidth
                        value={formData.name}
                        onChange={handleFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleFormSubmit} color="primary">
                        {isEditMode ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DataPage;

