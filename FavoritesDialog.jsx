
// import React from 'react';
// import { Dialog, DialogContent, DialogTitle, Card, CardContent, CardActions, Button, Typography, CardMedia } from '@mui/material';
// import { pink } from '@mui/material/colors';

// const FavoritesDialog = ({ open, onClose }) => {
//     // Sample products with different images and information
//     const sampleProducts = [
//         { title: "KALINI", description: "Bandhani Embroidered Regular Sequinned Kurta With Trouser & Dupatta", price: "$20", image: "https://i.pinimg.com/736x/d5/f7/24/d5f7241a520b71e44e23765a10431785.jpg" },
//         { title: "Jack & Jones", description: "Slim Fit Cutaway Collar Long Sleeve Casual Shirt", price: "$30", image: "https://i.pinimg.com/736x/9a/14/01/9a1401fdc20d16559a212ffb9dadb9da.jpg" },
//         { title: "Pantaloons Junior", description: "Printed Fit & Flare Dress", price: "$40", image: "https://i.pinimg.com/564x/8b/39/98/8b399886d3afa3fed4e3e426bce27805.jpg" }
//     ];

//     return (
//         <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
//             <DialogTitle>Your Favorites</DialogTitle>
//             <DialogContent>
//                 {/* Map over sampleProducts to create a separate card for each product */}
//                 {sampleProducts.map((product, index) => (
//                     <Card key={index} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
//                         {/* Image for each product */}
//                         <CardMedia
//                             component="img"
//                             sx={{ height: 150, objectFit: 'contain' }} // Ensures the full image is visible without cropping
//                             image={product.image}
//                             alt={product.title}
//                         />

//                         {/* Content section for each product */}
//                         <CardContent>
//                             <Typography variant="h6">{product.title}</Typography>
//                             <Typography variant="body2">{product.description}</Typography>
//                             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                                 Price: {product.price}
//                             </Typography>
//                         </CardContent>

//                         {/* Add to Cart button */}
//                         <CardActions sx={{ justifyContent: 'flex-end', paddingRight: '16px', paddingBottom: '16px' }}>
//                             <Button
//                                 variant="contained"
//                                 sx={{ backgroundColor: pink[500], color: 'white' }}
//                                 onClick={() => alert(`${product.title} added to cart`)} // alert with product name
//                             >
//                                 Add to Cart
//                             </Button>
//                         </CardActions>
//                     </Card>
//                 ))}
//             </DialogContent>
//         </Dialog>
//     );
// };

// export default FavoritesDialog;
import React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    CardMedia
} from '@mui/material';
import { pink } from '@mui/material/colors';

const FavoritesDialog = ({ open, onClose }) => {
    // Sample products with different images and information
    const sampleProducts = [
        {
            id: 1,
            title: "KALINI",
            description: "Bandhani Embroidered Regular Sequinned Kurta With Trouser & Dupatta",
            price: "$20",
            image: "https://i.pinimg.com/736x/d5/f7/24/d5f7241a520b71e44e23765a10431785.jpg"
        },
        {
            id: 2,
            title: "Jack & Jones",
            description: "Slim Fit Cutaway Collar Long Sleeve Casual Shirt",
            price: "$30",
            image: "https://i.pinimg.com/736x/9a/14/01/9a1401fdc20d16559a212ffb9dadb9da.jpg"
        },
        {
            id: 3,
            title: "Pantaloons Junior",
            description: "Printed Fit & Flare Dress",
            price: "$40",
            image: "https://i.pinimg.com/564x/8b/39/98/8b399886d3afa3fed4e3e426bce27805.jpg"
        }
    ];

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Your Favorites</DialogTitle>
            <DialogContent>
                {/* Map over sampleProducts to create a separate card for each product */}
                {sampleProducts.map((product) => (
                    <Card key={product.id} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                        {/* Image for each product */}
                        <CardMedia
                            component="img"
                            sx={{ height: 150, objectFit: 'contain' }} // Ensures the full image is visible without cropping
                            image={product.image}
                            alt={product.title}
                        />

                        {/* Content section for each product */}
                        <CardContent>
                            <Typography variant="h6">{product.title}</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Price: {product.price}
                            </Typography>
                        </CardContent>

                        {/* Add to Cart button */}
                        <CardActions sx={{ justifyContent: 'flex-end', paddingRight: '16px', paddingBottom: '16px' }}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: pink[500], color: 'white' }}
                                onClick={() => alert(`${product.title} added to cart`)} // Alert with product name
                            >
                                Add to Cart
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </DialogContent>
        </Dialog>
    );
};

// Adding PropTypes for better validation and documentation
FavoritesDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FavoritesDialog;

