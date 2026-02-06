import React from 'react';
import BanglaStreamTemplate from './BanglaStreamTemplate';
import DhakaStreamTemplate from './DhakaStreamTemplate';
import QuoteTemplate from './QuoteTemplate';
import ProthomaloTemplate from './ProthomaloTemplate';
import NewAgeTemplate from './NewAgeTemplate';
import TBSTemplate from './TBSTemplate';

const TemplateRenderer = ({ templateId, bgImage, logo, cardData, styles, language, ...rest }) => {
    // Map numeric IDs to templates
    const templates = [
        BanglaStreamTemplate,  // 0
        DhakaStreamTemplate,   // 1
        QuoteTemplate,         // 2
        ProthomaloTemplate,    // 3
        NewAgeTemplate,        // 4
        TBSTemplate,         // 5
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
        description: cardData.description,
        source: cardData.tag,
        date: cardData.date,
        customizations: {
            fontSize: styles.titleSize + 'px',
            fontWeight: styles.fontWeight,
            fontFamily: styles.titleFont,
        }
    };

    return <TemplateComponent {...templateData} />;
};

export default TemplateRenderer;
