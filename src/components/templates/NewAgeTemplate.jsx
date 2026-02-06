import React from 'react';

const NewAgeTemplate = ({ headline, image, logo, description, source, date, customizations }) => {
    return (
        <div
            id="photocard"
            style={{
                width: '820px',
                height: '1080px',
                position: 'relative',
                fontFamily: 'Noto Serif Bengali, serif',
                overflow: 'hidden',
                backgroundColor: '#2d2d2d',
            }}
        >
            {/* Background Image with Overlay */}
            {image && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={image}
                        alt="Background"
                        crossOrigin="anonymous"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.4) grayscale(0.3)',
                        }}
                    />
                    {/* Dark Gradient Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)',
                        }}
                    />
                </div>
            )}

            {/* Header - Logo and Date */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Logo - Top Left */}
                <div
                    style={{
                        position: 'absolute',
                        top: '30px',
                        left: '35px',
                        backgroundColor: '#fff',
                        padding: '8px 12px',
                        borderRadius: '4px',
                    }}
                >
                    <img
                        src={logo || "/logos/newage.png"}
                        alt="New Age Logo"
                        crossOrigin="anonymous"
                        style={{
                            height: '45px',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* Date and Website - Top Right */}
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        right: '35px',
                        textAlign: 'right',
                    }}
                >
                    <p
                        style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#fff',
                            margin: '0 0 5px 0',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        {date || 'February 05, 2026'}
                    </p>
                    <p
                        style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#e0e0e0',
                            margin: 0,
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        www.newagebd.net
                    </p>
                </div>
            </div>

            {/* Headline - Bottom */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '220px',
                    left: '50px',
                    right: '50px',
                    zIndex: 3,
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: customizations?.fontSize || '60px',
                        fontWeight: 'bold',
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.3,
                        textShadow: '3px 3px 15px rgba(0,0,0,0.8)',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {headline || 'BNP launches free Wi-Fi at Korail slum'}
                </h1>
            </div>

            {/* Website Badge - Bottom Right */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '80px',
                    right: '50px',
                    zIndex: 3,
                }}
            >
                <div
                    style={{
                        border: '2px solid #fff',
                        borderRadius: '25px',
                        padding: '10px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                >
                    <span style={{ fontSize: '18px', color: '#fff' }}>🔗</span>
                    <span
                        style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#fff',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        www.newagebd.net
                    </span>
                    <span style={{ fontSize: '18px', color: '#fff' }}>✕</span>
                </div>
            </div>
        </div>
    );
};

export default NewAgeTemplate;
