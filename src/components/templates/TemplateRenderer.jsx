import React from 'react';
import DhakaPapers1 from './DhakaPapers1';
import DhakaPapers2 from './DhakaPapers2';
import DhakaPapers3 from './DhakaPapers3';
import DhakaPapers4 from './DhakaPapers4';
import DhakaPapers5 from './DhakaPapers5';
import DhakaPapers6 from './DhakaPapers6';
import DhakaPapers7 from './DhakaPapers7';

const TemplateRenderer = ({ templateId, aspectRatio, bgImage, logo, cardData, styles, language, ...rest }) => {
    const templates = [
        DhakaPapers1, // 0
        DhakaPapers2, // 1
        DhakaPapers3, // 2
        DhakaPapers4, // 3
        DhakaPapers5, // 4
        DhakaPapers6, // 5
        DhakaPapers7, // 6
    ];

    const TemplateComponent = templates[templateId];

    if (!TemplateComponent) {
        return (
            <div style={{ padding: '20px', color: 'red', backgroundColor: '#000', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Template ID "{templateId}" not found
            </div>
        );
    }

    // Prepare data for templates
    const templateData = {
        headline: cardData.title,
        image: bgImage,
        logo: logo,
        showLogo: cardData.showLogo,
        description: cardData.description,
        source: cardData.tag,
        date: cardData.date,
        aspectRatio: aspectRatio,
        customizations: {
            fontSize: styles.titleSize + 'px',
            fontWeight: styles.fontWeight,
            fontFamily: styles.titleFont,
        }
    };

    return <TemplateComponent {...templateData} />;
};

export default TemplateRenderer;
