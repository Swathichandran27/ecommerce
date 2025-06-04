import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Collections() {
    const styles = {
        hero: {
            height: '100vh',
            background: 'linear-gradient(180deg,#ee7878,#e1ffea22 60%)',
            display: 'flex',
            borderRadius: '100px',
            marginTop: '50px',
            paddingLeft: '50px',
            marginLeft: '50px',
            marginRight: '50px',
            marginBottom: '30px',
        },
        heroLeft: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            paddingLeft: '180px',
        },
        heroLeftH2: {
            color: 'black',
            fontSize: '26px',
            fontWeight: 600,
        },
        heroLeftP: {
            color: '#171717',
            fontSize: '100px',
            fontWeight: 500,
            marginRight: '20px',
            fontFamily: "'Pacifico', cursive",
        },
        handHand: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        heroLatestBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '15px',
            width: '310px',
            height: '100px',
            background: '#dc143c',
            color: '#fef9f9',
            border: '2px solid #ccc',
            fontSize: '22px',
            fontWeight: 500,
            borderRadius: '60px',
            marginTop: '30px',
        },
        heroRight: {
            flex: 1,
            backgroundImage: 'url(../../image/image8.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '40px',
            marginLeft: '20px',
            paddingLeft: '20px',
        },
    };

    return (
        <div style={styles.hero}>
            <div style={styles.heroLeft}>
                <div>
                    <div style={styles.handHand}>
                        <p style={{ animation: 'blink 1.5s infinite', color: '#dc143c' }}><i>Dress Up</i></p>
                    </div>
                    <p style={{ animation: 'blink 1.5s infinite', color: '#dc143c' }}><i>Feel</i></p>
                    <br />
                    <p style={{ animation: 'blink 1.5s infinite', color: '#dc143c' }}><i>Fabulous</i></p>
                </div>
                <div style={styles.heroLatestBtn}>
                    <div><h3><i>Latest Collection</i></h3></div>
                    <ArrowForwardIcon />
                    <div className="im"></div>
                </div>
            </div>
            <div style={styles.heroRight}></div>
        </div>
    );
}

export default Collections;
