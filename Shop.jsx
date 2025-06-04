// src/component/Home/Shop.js
import React from 'react';
import FavoritesDialog from './FavoritesDialog';
import Footer from './Footer';
import Hero from './Hero';
import ProfileDetailsDialog from './ProfileDetailsDialog';
import Collections from './Collections';
import Item from './Item';
import MediaCard from './Popular';


const Shop = () => {
    return (
        <div>
            
            <Hero/>
            <FavoritesDialog/>
            <Item/>
            <MediaCard/>
            <Footer/>
            

            {/* Add your product cards here */}
        </div>
    );
};

export default Shop;
