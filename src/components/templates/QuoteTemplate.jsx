import React from 'react';

const QuoteTemplate = ({ headline, image, logo, description, source, date, customizations }) => {
    // Split source into name and title if it contains '|'
    const [name, title] = source ? source.split('|').map(s => s.trim()) : ['ড. জাহেদ উর রহমান', 'রাজনীতি বিশেষক'];

    return (
        <div
            id="photocard"
            style={{
                width: '820px',
                height: '820px',
                position: 'relative',
                fontFamily: 'Noto Serif Bengali, serif',
                overflow: 'hidden',
                backgroundColor: '#f5f0e8',
            }}
        >
            {/* Header - Social Media Handles */}
            <div
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                    zIndex: 2,
                }}
            >
                {[
                    { icon: '●', text: 'thepost.live' },
                    { icon: '▶', text: '/at/thepost-live' },
                    { icon: 'f', text: '/thepost360' },
                ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#c13832', fontSize: '16px', fontWeight: 'bold' }}>{item.icon}</span>
                        <span style={{ color: '#999', fontSize: '14px' }}>{item.text}</span>
                        {i < 2 && <span style={{ color: '#ccc', margin: '0 5px' }}>●</span>}
                    </div>
                ))}
                <span style={{ color: '#999', fontSize: '14px' }}>/{date || '06.02.26'}</span>
            </div>

            {/* Logo - Top Right */}
            <div
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '25px',
                    zIndex: 2,
                }}
            >
                <img
                    src={logo || "/logos/thepost.png"}
                    alt="The Post Logo"
                    crossOrigin="anonymous"
                    style={{
                        height: '60px',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Main Content Area */}
            <div
                style={{
                    position: 'absolute',
                    top: '100px',
                    left: '0',
                    right: '0',
                    bottom: '270px',
                    display: 'flex',
                }}
            >
                {/* Left Side - Person Image */}
                <div
                    style={{
                        width: '280px',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {image && (
                        <img
                            src={image}
                            alt="Person"
                            crossOrigin="anonymous"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                            }}
                        />
                    )}
                    {/* Circular overlay at bottom */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-50px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '120px',
                            height: '120px',
                            backgroundColor: '#f5f0e8',
                            borderRadius: '50%',
                        }}
                    />
                </div>

                {/* Right Side - Quote Box */}
                <div
                    style={{
                        flex: 1,
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    {/* Quote Mark */}
                    <div
                        style={{
                            fontSize: '120px',
                            lineHeight: 0.5,
                            color: '#d0d0c0',
                            fontFamily: 'Georgia, serif',
                            marginBottom: '10px',
                        }}
                    >
                        "
                    </div>

                    {/* Quote Box */}
                    <div
                        style={{
                            backgroundColor: '#1a5c3a',
                            padding: '25px 20px',
                            marginTop: '-20px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: customizations?.fontSize || '32px',
                                fontWeight: 'bold',
                                color: '#fff',
                                margin: 0,
                                lineHeight: 1.5,
                                fontFamily: 'Noto Serif Bengali, serif',
                            }}
                        >
                            {headline || 'তাদের হাতে ব্যালট পেপারের কোনো সফট কপিও আছে?'}
                        </p>
                    </div>

                    {/* Attribution */}
                    <div style={{ marginTop: '20px', textAlign: 'right', paddingRight: '20px' }}>
                        <p
                            style={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                color: '#000',
                                margin: 0,
                                fontFamily: 'Noto Serif Bengali, serif',
                            }}
                        >
                            {name}
                        </p>
                        {title && (
                            <p
                                style={{
                                    fontSize: '18px',
                                    color: '#666',
                                    margin: '5px 0 0 0',
                                    fontFamily: 'Noto Serif Bengali, serif',
                                }}
                            >
                                {title}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Text Box */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '0',
                    right: '0',
                    backgroundColor: '#6b3428',
                    padding: '25px 30px',
                }}
            >
                <p
                    style={{
                        fontSize: '28px',
                        fontWeight: '600',
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.6,
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    {description || 'লক্ষ্মীপুরে ভোটের আগেই সিল উদ্ধারের পর জনমনে প্রবল শঙ্কা তৈরি হয়েছে যে, তাহলে কি তাদের হাতে ব্যালট পেপার বা ব্যালটের কোনো সফট কপিও আছে? এটার অর্থ হলো সফট কপিটা কোনো না কোনোভাবে আমরা পেয়ে যাব, যেটাকে পরে আমরা ইজিলি প্রিন্ট করে নিতে পারব। নাহলে ভোট দেওয়ার সিলটা আসলে কেন পাওয়া যাবে? এটা খুবই আ্যলামিং ব্যাপার হয়ে দাঁড়িয়েছে।'}
                </p>
            </div>

            {/* Source Footer */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '30px',
                    right: '30px',
                }}
            >
                <p
                    style={{
                        fontSize: '16px',
                        color: '#666',
                        margin: 0,
                        fontFamily: 'Noto Serif Bengali, serif',
                    }}
                >
                    সূত্র: {source || 'ডেইলি স্টার অনলাইন এক গোলটেবিল বৈঠকে'}
                </p>
            </div>
        </div>
    );
};

export default QuoteTemplate;
