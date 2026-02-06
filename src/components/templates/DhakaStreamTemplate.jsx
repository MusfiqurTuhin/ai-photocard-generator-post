import React from 'react';

const DhakaStreamTemplate = ({ headline, image, logo, description, source, date, customizations }) => {
    return (
        <div
            id="photocard"
            style={{
                width: '820px',
                height: '1080px',
                position: 'relative',
                fontFamily: customizations?.fontFamily || 'Montserrat, sans-serif',
                overflow: 'hidden',
                backgroundColor: '#4a4a38',
            }}
        >
            {/* Textured Background Pattern */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.25,
                }}
            />

            {/* Top Section - Logo and Tag */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Logo - Top Left */}
                <div
                    style={{
                        position: 'absolute',
                        top: '35px',
                        left: '35px',
                    }}
                >
                    <img
                        src={logo || "/logos/dhakastream.svg"}
                        alt="Dhaka Stream Logo"
                        crossOrigin="anonymous"
                        style={{
                            height: '55px',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)', // Invert for visibility on dark background
                        }}
                    />
                </div>

                {/* Country Tag - Top Right */}
                <div
                    style={{
                        position: 'absolute',
                        top: '55px',
                        right: '40px',
                        backgroundColor: '#e8e8f0',
                        padding: '8px 24px',
                        borderRadius: '6px',
                    }}
                >
                    <span
                        style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#000',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        BANGLADESH
                    </span>
                </div>
            </div>

            {/* Headline Section */}
            <div
                style={{
                    position: 'absolute',
                    top: '160px',
                    left: '40px',
                    right: '40px',
                    zIndex: 2,
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: customizations?.fontSize || '60px',
                        fontWeight: customizations?.fontWeight || 'bold',
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.35,
                        textShadow: '3px 3px 10px rgba(0,0,0,0.6)',
                        fontFamily: 'Noto Serif Bengali, serif',
                        letterSpacing: '0px',
                    }}
                >
                    {headline?.split(' ').map((word, index) => {
                        // Make certain words yellow for emphasis
                        const yellowWords = ['ADMINISTERING', 'OATH', 'ELECTED', 'MPS'];
                        const isYellow = yellowWords.includes(word.toUpperCase());
                        return (
                            <span key={index} style={{ color: isYellow ? '#ffd700' : '#fff' }}>
                                {word}{' '}
                            </span>
                        );
                    })}
                </h1>
            </div>

            {/* Link in Comments */}
            <div
                style={{
                    position: 'absolute',
                    top: '380px',
                    left: '0',
                    right: '0',
                    textAlign: 'center',
                    zIndex: 2,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            border: '2px solid #fff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>🔗</span>
                    </div>
                    <p
                        style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#fff',
                            margin: 0,
                            fontFamily: 'Montserrat, sans-serif',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                        }}
                    >
                        LINK IN COMMENTS
                    </p>
                </div>
            </div>

            {/* Image Section - Bottom Half */}
            {image && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '80px',
                        left: '0',
                        right: '0',
                        height: '500px',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={image}
                        alt="News"
                        crossOrigin="anonymous"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}

            {/* Footer - Date and Social */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 3,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: '12px 20px',
                }}
            >
                <span
                    style={{
                        fontSize: '20px',
                        color: '#fff',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    Date: {date || '05 February 2026'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                        style={{
                            fontSize: '17px',
                            fontWeight: 'bold',
                            color: '#fff',
                        }}
                    >
                        www.dhakastream.net
                    </span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {['f', 'ig', 'yt', 'tt', 'X'].map((icon, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    color: '#4a4a38',
                                }}
                            >
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DhakaStreamTemplate;
