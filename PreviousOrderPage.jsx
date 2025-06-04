


/*import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList'; // Import Material UI filter icon

const PreviousOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("previousOrders")) || [];
    setOrders(storedOrders);
  }, []);

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
    // Assuming the order date is in the format "YYYY-MM-DD"
    const orderMonth = new Date(order.date).getMonth();
    orderCounts[months[orderMonth]] += 1;
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
      color: '#DE3163',
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

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Previous Orders</h2>
        {orders.length === 0 ? (
          <p>No previous orders found.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {orders.map((order, index) => (
              <div
                key={order.orderId || index}
                style={styles.orderCard}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <img
                    src={order.product.src.medium}
                    alt={order.product.alt}
                    style={styles.image}
                  />
                  <div style={styles.orderDetails}>
                    <h4 style={styles.productName}>
                      {order.product.alt} by {order.product.photographer}
                    </h4>
                    <p>Order ID: {order.orderId}</p>
                    <p>Size: {order.selectedSize}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Date: {order.date}</p>
                    <p>Status: {order.status}</p>
                    <p style={{ fontWeight: "bold" }}>Price: ₹{order.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        
        <div style={styles.chartContainer}>
          <h2>Orders Per Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#DE3163" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PreviousOrdersPage;*/
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList'; // Import Material UI filter icon
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import Material UI icon for three dots
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const PreviousOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("previousOrders")) || [];
    setOrders(storedOrders);
  }, []);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrderIndex(null);
  };

  const handleDeleteOrder = () => {
    if (selectedOrderIndex !== null) {
      const updatedOrders = [...orders];
      updatedOrders.splice(selectedOrderIndex, 1);
      setOrders(updatedOrders);
      localStorage.setItem("previousOrders", JSON.stringify(updatedOrders));
    }
    handleMenuClose();
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
    // Assuming the order date is in the format "YYYY-MM-DD"
    const orderMonth = new Date(order.date).getMonth();
    orderCounts[months[orderMonth]] += 1;
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
      color: '#DE3163',
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
    chartContainer: {
      marginTop: '30px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    menuIcon: {
      cursor: 'pointer',
      position: 'absolute',
      right: '10px',
      top: '10px',
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

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Previous Orders</h2>
        {orders.length === 0 ? (
          <p>No previous orders found.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {orders.map((order, index) => (
              <div
                key={order.orderId || index}
                style={styles.orderCard}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <img
                    src={order.product.src.medium}
                    alt={order.product.alt}
                    style={styles.image}
                  />
                  <div style={styles.orderDetails}>
                    <h4 style={styles.productName}>
                      {order.product.alt} by {order.product.photographer}
                    </h4>
                    <p>Order ID: {order.orderId}</p>
                    <p>Size: {order.selectedSize}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Date: {order.date}</p>
                    <p>Status: {order.status}</p>
                    <p style={{ fontWeight: "bold" }}>Price: ₹{order.price}</p>
                  </div>
                  <MoreVertIcon
                    style={styles.menuIcon}
                    onClick={(event) => handleMenuClick(event, index)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Chart for orders per month */}
        <div style={styles.chartContainer}>
          <h2>Orders Per Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#DE3163" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Menu for delete option */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDeleteOrder}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default PreviousOrdersPage;

