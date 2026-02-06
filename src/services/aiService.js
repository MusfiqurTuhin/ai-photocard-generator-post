/**
 * AI Service for Gemini API interactions
 */

const TEXT_MODELS = [
    "gemini-3-pro-preview",
    "gemini-3-flash-preview",
    "gemini-2.5-flash",
    "gemini-2.5-flash-preview-09-2025",
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash-lite-preview-09-2025",
    "gemini-2.5-pro",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite"
];

const IMAGE_MODELS = [
    'imagen-4.0-generate-001',
    'gemini-3-pro-image-preview',
    'gemini-2.5-flash-image'
];

export const generateTextContent = async (apiKey, content, language = 'bn') => {
    const prompt = `
    You are a news editor. Analyze the following text and generate content in ${language === 'bn' ? 'BENGALI (Bangla) script' : 'ENGLISH'}.
    
    Tasks:
    1. Headline: Must be informative, focused, and punchy suitable for a news graphic (max 10 words). ${language === 'bn' ? 'Use standard formal Bangla news phrasing. Ensure it is in BENGALI script.' : 'All caps if urgent.'}
    2. Description: A concise summary focusing on the KEY news (max 20 words). ${language === 'bn' ? 'Must be in BENGALI.' : ''}
    3. Category tag (e.g., রাজনীতি, খেলাধুলা, অর্থনীতি).
    4. Facebook Caption: Generate a professional and formal Facebook caption for this news following standard news media guidelines. DO NOT use any emojis. Include a formal opening/hook, the core context, and 3-5 relevant hashtags. End with "বিস্তারিত জানতে কমেন্ট চেক করুন।".
    
    All generated text must be in ${language === 'bn' ? 'BENGALI (Bangla) script' : 'ENGLISH'}.
    
    Return ONLY valid JSON in this format:
    {
      "title": "YOUR HEADLINE HERE",
      "description": "Your summary here.",
      "tag": "CATEGORY",
      "caption": "Your facebook caption here..."
    }

    Input text:
    ${content}
  `;

    for (const model of TEXT_MODELS) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { responseMimeType: "application/json" }
                })
            });

            if (response.status === 400) {
                const errData = await response.json();
                throw new Error(`API Key Invalid: ${errData.error?.message || 'Check your key'}`);
            }

            if (!response.ok) continue;

            const data = await response.json();
            const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (resultText) return JSON.parse(resultText);
        } catch (error) {
            if (error.message.includes('API Key Invalid')) throw error;
            console.warn(`Model ${model} failed:`, error);
        }
    }
    throw new Error("All text models failed. Please check your API quota or connection.");
};

export const generateImageContent = async (apiKey, content) => {
    const prompt = `Vector art illustration, digital news graphic style, flat design, high quality, no text, abstract and professional. Context: ${content.substring(0, 300)}`;

    for (const model of IMAGE_MODELS) {
        try {
            let response;
            let base64Image;

            if (model.includes('imagen')) {
                response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        instances: [{ prompt: prompt }],
                        parameters: { sampleCount: 1 }
                    })
                });
                if (!response.ok) continue;
                const data = await response.json();
                base64Image = data.predictions?.[0]?.bytesBase64Encoded;
            } else {
                response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: { responseModalities: ["IMAGE"] }
                    })
                });
                if (!response.ok) continue;
                const data = await response.json();
                base64Image = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
            }

            if (base64Image) return `data:image/png;base64,${base64Image}`;
        } catch (error) {
            console.warn(`Model ${model} failed:`, error);
        }
    }
    throw new Error("Failed to generate image. Likely due to API Quota limits.");
};
