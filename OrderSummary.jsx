
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList'; // Import Material UI filter icon

const OrderSummary = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const orders = [
        {
            id: 'W1234',
            date: 'Delivered on Apr 29',
            month: 'April',
            productName: 'NutriGlow Sunscreen - SPF ...',
            sharedBy: 'Shared by Dhipa R',
            imageUrl: 'https://i.pinimg.com/236x/70/4a/d4/704ad41f07f0f4f139bc69bf4b073977.jpg',
        },
        {
            id: 'W1235',
            date: 'Delivered on Mar 08',
            month: 'March',
            productName: 'Rebound Solid Women Rou...',
            sharedBy: 'Shared by Dhipa R',
            imageUrl: 'https://i.pinimg.com/236x/47/b7/f1/47b7f1997b0cd14bd54b97d03dbd332f.jpg',
        },
        {
            id: 'W1236',
            date: 'Delivered on Mar 05',
            month: 'March',
            productName: 'VVC CLOTHING Women Pri...',
            sharedBy: 'Shared by Dhipa R',
            imageUrl: 'https://i.pinimg.com/474x/bb/ed/37/bbed37e5e52755ff122f817bd17a6b51.jpg',
        },
        {
            id: 'W1237',
            date: 'Delivered on Feb 25',
            month: 'February',
            productName: 'KartV Back Cover for Oppo ...',
            sharedBy: 'Shared by Flipkart Customer',
            imageUrl: 'https://i.pinimg.com/236x/d1/c2/cd/d1c2cd75bac7e344c86bdc0b072db0b3.jpg',
        },
    ];

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // Initialize order counts for all 12 months
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Count orders per month
    const orderCounts = months.reduce((acc, month) => {
        acc[month] = 0; // Start with 0 for each month
        return acc;
    }, {});

    // Increment counts based on existing orders
    orders.forEach(order => {
        orderCounts[order.month] += 1;
    });

    // Format data for the chart
    const chartData = months.map(month => ({
        month,
        count: orderCounts[month], // Use the updated orderCounts
    }));

    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f0f4f8',
            fontFamily: 'Arial, sans-serif',
            //maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '10px',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
        },
        title: {
            fontSize: '26px',
            fontWeight: 'bold',
            color: '#DE3163 ',
        },
        searchContainer: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '5px 10px',
            border: '1px solid #ddd',
            width: '100%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        searchInput: {
            border: 'none',
            outline: 'none',
            marginLeft: '10px',
            flex: 1,
        },
        filterIcon: {
            marginLeft: '10px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#007bff',
        },
        orderCard: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '15px',
            padding: '15px',
            transition: 'transform 0.2s',
            position: 'relative',
        },
        image: {
            width: '80px',
            height: '80px',
            borderRadius: '8px',
            marginRight: '15px',
        },
        orderDetails: {
            flex: 1,
        },
        date: {
            fontSize: '14px',
            color: '#666',
            marginBottom: '5px',
        },
        productName: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px',
        },
        sharedBy: {
            fontSize: '12px',
            color: '#999',
        },
        chartContainer: {
            marginTop: '30px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>My Orders</h1>
                <div style={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search your order here"
                        style={styles.searchInput}
                    />
                    <FilterListIcon
                        style={styles.filterIcon}
                        onClick={toggleFilter}
                    />
                </div>
            </div>

            {/* Display the orders */}
            {orders.map((order) => (
                <div key={order.id} style={styles.orderCard}>
                    <img src={order.imageUrl} alt="Product" style={styles.image} />
                    <div style={styles.orderDetails}>
                        <p style={styles.date}>{order.date}</p>
                        <p style={styles.productName}>{order.productName}</p>
                        <p style={styles.sharedBy}>{order.sharedBy}</p>
                    </div>
                </div>
            ))}

            {/* Chart for orders per month */}
            <div style={styles.chartContainer}>
                <h2>Orders Per Month</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#DE3163 " />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OrderSummary;
