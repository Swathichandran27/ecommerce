
import React from "react";

const Item = (props) => {
    const styles = {
        item: {
            width: '350px',
            transition: '0.6s', // Added for smooth transition
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
        itemP: {
            margin: '6px 0px',
        },
        itemPrices: {
            display: 'flex',
            gap: '20px',
        },
        itemPriceNew: {
            color: '#374151',
            fontSize: '18px',
            fontWeight: 600,
        },
        itemPriceOld: {
            color: '#8c8c8c',
            fontSize: '18px',
            fontWeight: 600,
            textDecoration: 'line-through',
        },
    };

    return (
        <div style={styles.item} className="item">
            <p style={styles.itemP}>{props.name}</p>
            <div style={styles.itemPrices}>
                <div style={styles.itemPriceNew}>
                    {props.new_price}
                </div>
                <div style={styles.itemPriceOld}>
                    {props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;
