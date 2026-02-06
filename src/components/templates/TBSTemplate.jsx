import React from 'react';

const TBSTemplate = ({ headline, image, logo, showLogo, description, source, date, aspectRatio, customizations }) => {
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
                backgroundColor: '#000',
            }}
        >
            {/* Background with subtle texture */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)',
                }}
            />

            {/* Top Section */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Logo - Top Left */}
                {showLogo && (
                    <div
                        style={{
                            position: 'absolute',
                            top: isSquare ? '30px' : '40px',
                            left: isSquare ? '30px' : '40px',
                        }}
                    >
                        <img
                            src={logo || "/logos/tbs.svg"}
                            alt="TBS Logo"
                            crossOrigin="anonymous"
                            style={{
                                height: isSquare ? '45px' : '60px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                )}

                {/* Date and Source - Top Right */}
                <div
                    style={{
                        position: 'absolute',
                        top: isSquare ? '35px' : '45px',
                        right: isSquare ? '30px' : '35px',
                        textAlign: 'right',
                    }}
                >
                    <p
                        style={{
                            fontSize: isSquare ? '16px' : '22px',
                            fontWeight: '600',
                            color: '#fff',
                            margin: '0 0 5px 0',
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        {date || '০৬ ফেব্রুয়ারি ২০২৬'}
                    </p>
                    <p
                        style={{
                            fontSize: isSquare ? '12px' : '15px',
                            color: '#aaa',
                            margin: 0,
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        {source || 'সূত্র: দ্য বিজনেস স্ট্যান্ডার্ড'}
                    </p>
                </div>
            </div>

            {/* Headline Section */}
            <div
                style={{
                    position: 'absolute',
                    top: isSquare ? '110px' : '160px',
                    left: '40px',
                    right: '40px',
                    zIndex: 2,
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: customizations?.fontSize || (isSquare ? '46px' : '60px'),
                        fontWeight: customizations?.fontWeight || 'bold',
                        margin: 0,
                        lineHeight: 1.35,
                        textShadow: '3px 3px 12px rgba(0,0,0,0.8)',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    <span style={{ color: '#fff' }}>{headline || 'খবরের শিরোনাম এখানে প্রদর্শিত হবে'}</span>
                </h1>
            </div>

            {/* Background Image Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    opacity: 0.1,
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cpath fill='%23333' d='M0 400h800v200H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            {/* Main Image - Center/Bottom */}
            {image && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '80px',
                        left: '0',
                        right: '0',
                        height: isSquare ? '500px' : '700px',
                        overflow: 'hidden',
                        zIndex: 2,
                    }}
                >
                    <img
                        src={image}
                        alt="News Image"
                        crossOrigin="anonymous"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                        }}
                    />
                </div>
            )}

            {/* Branding/Website - Bottom Left */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '40px',
                    zIndex: 3,
                    color: '#fff',
                    fontSize: isSquare ? '14px' : '18px',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                }}
            >
                www.tbsnews.net
            </div>

            {/* Action Badge - Bottom Right */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '25px',
                    right: '35px',
                    zIndex: 3,
                }}
            >
                <div
                    style={{
                        backgroundColor: '#ed1c24', // TBS Red
                        padding: isSquare ? '6px 15px' : '10px 25px',
                        borderRadius: '4px',
                    }}
                >
                    <span
                        style={{
                            fontSize: isSquare ? '14px' : '18px',
                            fontWeight: 'bold',
                            color: '#fff',
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        বিস্তারিত পড়ুন
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TBSTemplate;
