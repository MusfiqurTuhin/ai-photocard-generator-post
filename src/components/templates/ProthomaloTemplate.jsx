import React from 'react';

const ProthomaloTemplate = ({ headline, image, logo, description, source, date, customizations }) => {
    return (
        <div
            id="photocard"
            style={{
                width: '820px',
                height: '820px',
                position: 'relative',
                fontFamily: customizations?.fontFamily || 'Noto Serif Bengali, serif',
                overflow: 'hidden',
                backgroundColor: '#f5f0e8',
            }}
        >
            {/* Top Image Section */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '410px',
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
                        fontSize: '28px',
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
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '410px',
                    backgroundColor: '#f5f0e8',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 50px',
                }}
            >
                <div
                    style={{
                        marginBottom: '20px',
                    }}
                >
                    <img
                        src={logo || "/logos/prothomalo.svg"}
                        alt="Prothom Alo Logo"
                        crossOrigin="anonymous"
                        style={{
                            height: '65px',
                            width: '200px',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* Column Label */}
                <p
                    style={{
                        fontSize: '22px',
                        color: '#333',
                        margin: '0 0 15px 0',
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {source || 'মতামত'}
                </p>

                {/* Headline */}
                <h1
                    style={{
                        fontSize: customizations?.fontSize || '42px',
                        fontWeight: customizations?.fontWeight || 'bold',
                        color: '#d32f2f',
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
                        bottom: '25px',
                        left: '50px',
                        right: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        মতামত | {date || '৫ ফেব্রুয়ারি ২০২৬'}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#999',
                                borderRadius: '2px',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            prothomalo.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProthomaloTemplate;
