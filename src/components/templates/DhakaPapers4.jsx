import React from 'react';

const DhakaPapers4 = ({ headline, image, logo, showLogo, description, source, date, aspectRatio, customizations }) => {
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
                backgroundColor: '#E8E8E1',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Top Image Section */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                {image && (
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
                )}

                {/* Caption on Image */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '20px',
                        color: '#fff',
                        fontSize: isSquare ? '22px' : '28px',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {description || 'তারেক রহমান ও শফিকুর রহমান\nকোলাজ ছবি : প্রথম আলো'}
                </div>
            </div>

            {/* Bottom Section - Beige Background */}
            <div
                style={{
                    width: '100%',
                    flex: 1,
                    backgroundColor: '#E8E8E1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isSquare ? '10px 40px' : '20px 50px',
                    position: 'relative',
                }}
            >
                {showLogo && (
                    <div
                        style={{
                            marginBottom: isSquare ? '5px' : '10px',
                        }}
                    >
                        <img
                            src={logo || "/logos/dhakapapers.webp"}
                            alt="Dhaka Papers Logo"
                            crossOrigin="anonymous"
                            style={{
                                height: isSquare ? '50px' : '65px',
                                width: isSquare ? '150px' : '200px',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                )}

                {/* Column Label */}
                <p
                    style={{
                        fontSize: isSquare ? '18px' : '22px',
                        color: '#333',
                        margin: `0 0 ${isSquare ? '10px' : '15px'} 0`,
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {source || 'মতামত'}
                </p>

                {/* Headline */}
                <h1
                    style={{
                        fontSize: customizations?.fontSize || (isSquare ? '36px' : '42px'),
                        fontWeight: customizations?.fontWeight || 'bold',
                        color: '#DF1B21',
                        margin: 0,
                        lineHeight: 1.45,
                        textAlign: 'center',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {headline || 'নির্বাচন বাংলাদেশে, আলোচনায় কেন ভারত-আমেরিকা'}
                </h1>

                {/* Footer */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: isSquare ? '15px' : '25px',
                        left: isSquare ? '30px' : '50px',
                        right: isSquare ? '30px' : '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: isSquare ? '14px' : '18px',
                            color: '#666',
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        মতামত | {date || '৫ ফেব্রুয়ারি ২০২৬'}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                            style={{
                                width: isSquare ? '14px' : '20px',
                                height: isSquare ? '14px' : '20px',
                                backgroundColor: '#999',
                                borderRadius: '2px',
                            }}
                        />
                        <span
                            style={{
                                fontSize: isSquare ? '14px' : '18px',
                                fontWeight: '600',
                                color: '#333',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            www.dhakapapers.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DhakaPapers4;
