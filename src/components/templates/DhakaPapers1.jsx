import React from 'react';

const DhakaPapers1 = ({ headline, image, logo, showLogo, description, source, date, aspectRatio, customizations }) => {
    const isSquare = aspectRatio === '1:1';

    return (
        <div
            id="photocard"
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F1F1EA',
                position: 'relative',
                fontFamily: customizations?.fontFamily || 'Noto Serif Bengali, serif',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            {/* Background Pattern/Texture (Optional) */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    zIndex: 0,
                }}
            />

            {/* Top Red Bar */}
            <div
                style={{
                    width: '100%',
                    height: isSquare ? '15px' : '20px',
                    backgroundColor: '#DF1B21',
                    zIndex: 2,
                }}
            />

            {/* Main Content Container */}
            <div
                style={{
                    flex: 1,
                    padding: isSquare ? '30px' : '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1,
                    position: 'relative',
                }}
            >
                {/* Header - Logo and Metadata */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: isSquare ? '20px' : '30px',
                    }}
                >
                    {showLogo && (
                        <div style={{ width: isSquare ? '120px' : '160px' }}>
                            <img
                                src={logo || "/logos/dhakapapers.webp"}
                                alt="Dhaka Papers Logo"
                                crossOrigin="anonymous"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    )}
                    <div style={{ textAlign: 'right' }}>
                        <p
                            style={{
                                color: '#DF1B21',
                                fontWeight: 'bold',
                                fontSize: isSquare ? '16px' : '20px',
                                margin: 0,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                fontFamily: 'Montserrat, sans-serif'
                            }}
                        >
                            {source || 'BREAKING NEWS'}
                        </p>
                        <p
                            style={{
                                color: '#666',
                                fontSize: isSquare ? '12px' : '16px',
                                margin: '5px 0 0 0',
                                fontFamily: 'Montserrat, sans-serif'
                            }}
                        >
                            {date || '০৫ ফেব্রুয়ারি ২০২৬'}
                        </p>
                    </div>
                </div>

                {/* Headline Block */}
                <div style={{ marginBottom: isSquare ? '20px' : '30px' }}>
                    <h1
                        style={{
                            fontSize: customizations?.fontSize || (isSquare ? '45px' : '58px'),
                            lineHeight: 1.35,
                            fontWeight: 800,
                            color: '#000000',
                            margin: 0,
                            fontFamily: 'Noto Serif Bengali, serif',
                            textAlign: 'left',
                        }}
                    >
                        {headline || 'ভারতের কংগ্রেসেও পরিবারতন্ত্র আছে, তারেক রহমান কেন নয়: মির্জা ফখরুল'}
                    </h1>
                </div>

                {/* Main Feature Image */}
                <div
                    style={{
                        width: '100%',
                        flex: 1,
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        marginBottom: isSquare ? '20px' : '30px',
                    }}
                >
                    {image && (
                        <img
                            src={image}
                            alt="News Feature"
                            crossOrigin="anonymous"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    )}
                </div>

                {/* Description Quote Card */}
                <div
                    style={{
                        backgroundColor: '#FFFFFF',
                        padding: isSquare ? '20px 25px' : '30px 40px',
                        borderRadius: '0 0 12px 0',
                        borderLeft: `8px solid #DF1B21`,
                        boxShadow: '5px 5px 20px rgba(0,0,0,0.05)',
                        position: 'relative',
                        marginBottom: '10px'
                    }}
                >
                    <p
                        style={{
                            fontSize: isSquare ? '20px' : '26px',
                            lineHeight: 1.6,
                            color: '#333',
                            fontWeight: 500,
                            margin: 0,
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        {description || 'বিস্তারিত কমেন্টে...'}
                    </p>

                    {/* Branding Watermark */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '20px',
                            opacity: 0.1,
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#000',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        DHAKA PAPERS
                    </div>
                </div>
            </div>

            {/* Bottom Accent Bar with Website */}
            <div
                style={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    padding: '10px 40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                }}
            >
                <p
                    style={{
                        fontSize: isSquare ? '12px' : '15px',
                        fontWeight: '600',
                        margin: 0,
                        letterSpacing: '2px',
                        fontFamily: 'Montserrat, sans-serif'
                    }}
                >
                    WWW.DHAKAPAPERS.COM
                </p>
            </div>
        </div>
    );
};

export default DhakaPapers1;
