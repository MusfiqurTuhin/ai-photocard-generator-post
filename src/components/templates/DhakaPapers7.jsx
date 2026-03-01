import React from 'react';

const DhakaPapers7 = ({ headline, image, logo, showLogo, description, source, date, aspectRatio, customizations }) => {
    const isSquare = aspectRatio === '1:1';

    // Split source into name and title if it contains '|'
    const sourceText = source || 'ইমতিয়াজ মাহমুদ | কবি';
    const [name, title] = sourceText.includes('|')
        ? sourceText.split('|').map(s => s.trim())
        : [sourceText, ''];

    return (
        <div
            id="photocard"
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                fontFamily: 'Noto Serif Bengali, serif',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
            }}
        >
            {/* Background Image */}
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
                        }}
                    />
                )}
            </div>

            {/* Top Right Logo Circle */}
            {showLogo && (
                <div
                    style={{
                        position: 'absolute',
                        top: isSquare ? '20px' : '40px',
                        right: isSquare ? '20px' : '40px',
                        width: isSquare ? '60px' : '80px',
                        height: isSquare ? '60px' : '80px',
                        backgroundColor: '#FFF',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                        zIndex: 10,
                    }}
                >
                    <img
                        src={logo || "/logos/dhakapapers.webp"}
                        alt="Logo"
                        style={{ height: isSquare ? '40px' : '55px', objectFit: 'contain' }}
                    />
                </div>
            )}

            {/* Center-Bottom Overlay Content Area */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isSquare ? '55%' : '50%',
                    background: 'linear-gradient(to top, #E8E8E1 0%, #E8E8E1 85%, transparent 100%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: isSquare ? '10px 20px' : '20px 30px',
                }}
            >
                {/* Name Capsule */}
                <div
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '100px',
                        padding: isSquare ? '8px 30px' : '15px 50px',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                        marginTop: isSquare ? '-35px' : '-50px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        minWidth: '220px',
                    }}
                >
                    <span style={{ fontSize: isSquare ? '22px' : '32px', fontWeight: 'bold', color: '#000', lineHeight: 1.2 }}>{name}</span>
                    {title && <span style={{ fontSize: isSquare ? '16px' : '24px', fontWeight: 'bold', color: '#000', lineHeight: 1.2 }}>{title}</span>}
                </div>

                {/* Red Quote Marks */}
                <div style={{ marginTop: isSquare ? '10px' : '20px' }}>
                    <svg width={isSquare ? "40" : "60"} height={isSquare ? "30" : "45"} viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.5V45H22.5V22.5H11.25C11.25 10.05 16.35 6.75 22.5 4.5V0C9 4.5 0 9 0 22.5ZM37.5 22.5V45H60V22.5H48.75C48.75 10.05 53.85 6.75 60 4.5V0C46.5 4.5 37.5 9 37.5 22.5Z" fill="#DF1B21" />
                    </svg>
                </div>

                {/* Quote/Description Text */}
                <div
                    style={{
                        marginTop: isSquare ? '10px' : '20px',
                        textAlign: 'center',
                        maxWidth: '90%',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <p
                        style={{
                            fontSize: customizations?.fontSize || (isSquare ? '19px' : '28px'),
                            fontWeight: '600',
                            color: '#000',
                            lineHeight: 1.5,
                            margin: 0,
                            fontFamily: 'Noto Serif Bengali, serif',
                        }}
                    >
                        {description || headline || 'শিল্পের সবগুলো শাখা মিলিয়ে বাংলাদেশে আমার সবচেয়ে প্রিয় দু\'জন আর্টিস্টের একজন জীবনানন্দ দাশ, অন্যজন আজম খান।'}
                    </p>
                </div>

                {/* Space for Footer */}
                <div style={{ height: '60px', width: '100%' }}></div>
            </div>

            {/* Footer Layer (Overlayed above the Beige Content) */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '70px',
                    backgroundColor: 'transparent',
                    zIndex: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isSquare ? '0 20px' : '0 40px',
                }}
            >
                {/* Left Branding */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: '2px', width: '20px', backgroundColor: '#DF1B21', marginRight: '10px' }}></div>
                    <span style={{ fontSize: isSquare ? '8px' : '10px', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Courage Has One Color : RED</span>
                </div>

                {/* Center Logo */}
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                    <img
                        src={logo || "/logos/dhakapapers.webp"}
                        alt="Logo"
                        style={{ height: isSquare ? '30px' : '40px' }}
                    />
                </div>

                {/* Right Source */}
                <div style={{ flex: 1, textAlign: 'right' }}>
                    <span style={{ fontSize: isSquare ? '12px' : '16px', fontWeight: 'bold', color: '#000', fontFamily: 'Noto Serif Bengali, serif' }}>তথ্যসূত্র: {name || 'ফেসবুক পোস্ট'}</span>
                </div>
            </div>
        </div>
    );
};

export default DhakaPapers7;
