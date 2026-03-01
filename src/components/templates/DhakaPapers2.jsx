import React from 'react';

const DhakaPapers2 = ({ headline, image, logo, showLogo, description, source, date, aspectRatio, customizations }) => {
    const isSquare = aspectRatio === '1:1';

    return (
        <div
            id="photocard"
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
                position: 'relative',
                fontFamily: 'Noto Serif Bengali, serif',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                color: '#FFFFFF',
            }}
        >
            {/* Split Layout: Background Image with Dark Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            >
                {image && (
                    <img
                        src={image}
                        alt="Background"
                        crossOrigin="anonymous"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.5) contrast(1.1)',
                        }}
                    />
                )}
                {/* Gradient Wash */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 100%)',
                    }}
                />
            </div>

            {/* Content Container */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1,
                    padding: isSquare ? '30px' : '45px',
                    position: 'relative',
                }}
            >
                {/* Header - Dual Logos */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: isSquare ? '40px' : '60px',
                    }}
                >
                    {showLogo && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    width: isSquare ? '50px' : '70px',
                                    height: isSquare ? '50px' : '70px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '5px',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                                }}
                            >
                                <img
                                    src={logo || "/logos/dhakapapers.webp"}
                                    alt="DP Circle"
                                    crossOrigin="anonymous"
                                    style={{ width: '85%', height: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                            <div style={{ height: isSquare ? '30px' : '45px', width: '2px', backgroundColor: '#DF1B21' }} />
                            <img
                                src={logo || "/logos/dhakapapers.webp"}
                                alt="Dhaka Papers Text"
                                crossOrigin="anonymous"
                                style={{ height: isSquare ? '35px' : '50px', objectFit: 'contain' }}
                            />
                        </div>
                    )}
                    <div style={{ textAlign: 'right' }}>
                        <span
                            style={{
                                color: '#DF1B21',
                                fontWeight: '900',
                                fontSize: isSquare ? '24px' : '32px',
                                fontFamily: 'Montserrat, sans-serif'
                            }}
                        >
                            NEWS
                        </span>
                    </div>
                </div>

                {/* Center Content Area */}
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '25px',
                    }}
                >
                    {/* Floating Decorative Bar */}
                    <div style={{ width: '80px', height: '6px', backgroundColor: '#DF1B21' }} />

                    <h1
                        style={{
                            fontSize: customizations?.fontSize || (isSquare ? '48px' : '62px'),
                            fontWeight: '800',
                            lineHeight: 1.25,
                            color: '#FFFFFF',
                            fontFamily: 'Noto Serif Bengali, serif',
                            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
                            margin: 0,
                        }}
                    >
                        {headline || 'ভারতের কংগ্রেসেও পরিবারতন্ত্র আছে, তারেক রহমান কেন নয়: মির্জা ফখরুল'}
                    </h1>

                    <div
                        style={{
                            backgroundColor: 'rgba(223, 27, 33, 0.15)',
                            borderLeft: '5px solid #DF1B21',
                            padding: '15px 25px',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '0 8px 8px 0',
                        }}
                    >
                        <p
                            style={{
                                fontSize: isSquare ? '20px' : '26px',
                                color: '#EEE',
                                lineHeight: 1.5,
                                fontWeight: '500',
                                margin: 0,
                                fontFamily: 'Noto Serif Bengali, serif',
                            }}
                        >
                            {description || 'আল জাজিরাকে দেওয়া এক সাক্ষাৎকারে বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীর বলেন...'}
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div
                    style={{
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <p style={{ fontSize: isSquare ? '14px' : '18px', color: '#DF1B21', fontWeight: 'bold', margin: 0 }}>
                            {source || 'AL JAZEERA'}
                        </p>
                        <p style={{ fontSize: isSquare ? '12px' : '15px', color: '#888', margin: 0 }}>
                            {date || '০৫ ফেব্রুয়ারি ২০২৬'}
                        </p>
                    </div>

                    <div
                        style={{
                            backgroundColor: '#FFFFFF',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <span style={{ color: '#000', fontWeight: 'bold', fontSize: isSquare ? '14px' : '18px', fontFamily: 'Montserrat, sans-serif' }}>
                            DHAKAPAPERS.COM
                        </span>
                    </div>
                </div>
            </div>

            {/* Aesthetic Bottom Border */}
            <div style={{ height: '8px', backgroundColor: '#DF1B21', width: '100%', zIndex: 2 }} />
        </div>
    );
};

export default DhakaPapers2;
