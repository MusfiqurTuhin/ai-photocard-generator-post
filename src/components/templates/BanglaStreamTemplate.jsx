import React from 'react';

const BanglaStreamTemplate = ({ headline, image, logo, description, source, date, aspectRatio, customizations }) => {
    const isSquare = aspectRatio === '1:1';

    return (
        <div
            id="photocard"
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                fontFamily: customizations?.fontFamily || 'Noto Serif Bengali, serif',
                overflow: 'hidden',
                backgroundColor: '#2c4a52',
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.3,
                }}
            />

            {/* Top Section - Logo and Tag */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Logo - Top Left */}
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                    }}
                >
                    <img
                        src={logo || "/logos/banglastream.png"}
                        alt="Bangla Stream Logo"
                        crossOrigin="anonymous"
                        style={{
                            height: '55px',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* News Tag - Top Right */}
                <div
                    style={{
                        position: 'absolute',
                        top: '60px',
                        right: '40px',
                        backgroundColor: '#fff',
                        padding: '8px 28px',
                        borderRadius: '8px',
                    }}
                >
                    <span
                        style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#2c4a52',
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        নিউজ
                    </span>
                </div>
            </div>

            {/* Headline Section */}
            <div
                style={{
                    position: 'absolute',
                    top: isSquare ? '130px' : '160px',
                    left: '40px',
                    right: '40px',
                    zIndex: 2,
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: customizations?.fontSize || (isSquare ? '52px' : '64px'),
                        fontWeight: customizations?.fontWeight || 'bold',
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.35,
                        textShadow: '3px 3px 10px rgba(0,0,0,0.6)',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {headline?.split(' ').map((word, index) => {
                        // Make certain words yellow for emphasis
                        const yellowWords = ['ব্যালট', 'পৌষ', 'মহরতের', 'প্রস্তুতিতে', 'ইসি'];
                        const isYellow = yellowWords.some(yw => word.includes(yw));
                        return (
                            <span key={index} style={{ color: isYellow ? '#ffd700' : '#fff' }}>
                                {word}{' '}
                            </span>
                        );
                    })}
                </h1>
            </div>

            {/* Details in Comments */}
            <div
                style={{
                    position: 'absolute',
                    top: isSquare ? '380px' : '460px',
                    left: '0',
                    right: '0',
                    textAlign: 'center',
                    zIndex: 2,
                }}
            >
                <p
                    style={{
                        fontSize: isSquare ? '18px' : '22px',
                        fontWeight: 'bold',
                        color: '#fff',
                        margin: 0,
                        fontFamily: 'Noto Serif Bengali, serif',
                        border: '2px solid #fff',
                        display: 'inline-block',
                        padding: '8px 24px',
                        borderRadius: '4px',
                    }}
                >
                    বিস্তারিত কমেন্টে
                </p>
            </div>

            {/* Image Section - Bottom Half */}
            {image && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '80px',
                        left: '0',
                        right: '0',
                        height: isSquare ? '320px' : '460px',
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
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    padding: '12px 20px',
                }}
            >
                <span
                    style={{
                        fontSize: isSquare ? '20px' : '26px',
                        fontWeight: 'bold',
                        color: '#fff',
                        margin: 0,
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    তারিখ: {date || '০৬ ফেব্রুয়ারি ২০২৬'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                        style={{
                            fontSize: isSquare ? '14px' : '18px',
                            fontWeight: 'bold',
                            color: '#fff',
                        }}
                    >
                        www.banglastream.net
                    </span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {['f', 'ig', 'yt', 'tt', 'X'].map((icon, i) => (
                            <div
                                key={i}
                                style={{
                                    width: isSquare ? '20px' : '24px',
                                    height: isSquare ? '20px' : '24px',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: isSquare ? '11px' : '14px',
                                    fontWeight: 'bold',
                                    color: '#2c4a52',
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

export default BanglaStreamTemplate;
