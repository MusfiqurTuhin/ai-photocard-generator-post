import React, { useState, useRef, useEffect } from 'react';
import { domToPng } from 'modern-screenshot';
import EditorHeader from './components/EditorHeader';
import ToolboxSidebar from './components/ToolboxSidebar';
import PropertyPanel from './components/PropertyPanel';
import CanvasArea from './components/CanvasArea';
import TemplateRenderer from './components/templates/TemplateRenderer';
import { generateTextContent, generateImageContent } from './services/aiService';

export default function App() {
  // State: Core Content
  const [apiKey, setApiKey] = useState('');
  const [rawContent, setRawContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [youtubeData, setYoutubeData] = useState({ title: '', description: '', tags: '' });
  const [language, setLanguage] = useState('bn');

  // State: Editor Layout
  const [activeTab, setActiveTab] = useState('elements');

  // State: Card Configuration
  const [templateId, setTemplateId] = useState(0);
  const [aspectRatio, setAspectRatio] = useState('4:5');

  // State: Visual Content
  const [bgImage, setBgImage] = useState('/fakhrul.jpg');
  const [logo, setLogo] = useState('');

  // State: Text Content & Styling
  const [cardData, setCardData] = useState({
    title: 'ভারতের কংগ্রেসেও পরিবারতন্ত্র আছে, তারেক রহমান কেন নয়: মির্জা ফখরুল',
    description: 'আল জাজিরাকে দেওয়া এক সাক্ষাৎকারে বিএনপির মহাসচিব মির্জা ফখরুল ইসলাম আলমগীর বলেন, তারেক রহমান দলের নেতৃত্ব দিতে যোগ্য এবং পরিবারতন্ত্র দক্ষিণ এশিয়ার রাজনীতিতে এক সাধারণ দৃশ্য।',
    date: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
    website: 'www.banglastream.net',
    tag: 'আল জাজিরা',
    bgColor: '#1a1a1a',
    showLogo: true,
    showTag: true,
    showFooter: true,
    logoText: 'বাংলা স্ট্রিম',
    extraElements: []
  });

  const [styles, setStyles] = useState({
    titleFont: 'font-bengali',
    titleSize: 42,
    titleColor: '#FACC15',
    titleAlign: 'center',
    fontWeight: '700',
    lineHeight: 1.2,
    letterSpacing: 0,
    descFont: 'font-bengali',
    descSize: 20,
    descColor: '#ffffff',
    overlayOpacity: 60,
    accentColor: '#8b5cf6',
    filterBrightness: 100,
    filterContrast: 100,
    filterBlur: 0
  });

  const cardRef = useRef(null);

  // --- Handlers ---
  const handleGenerateText = async () => {
    if (!apiKey) return alert("Please enter a valid Gemini API Key.");
    if (!rawContent) return alert("Please enter some content to process.");

    setIsGenerating(true);
    try {
      const result = await generateTextContent(apiKey, rawContent, language);
      setCardData(prev => ({
        ...prev,
        title: result.title,
        description: result.description,
        tag: result.tag || prev.tag,
      }));
      setGeneratedCaption(result.caption);
      setYoutubeData({
        title: result.youtubeTitle || '',
        description: result.youtubeDescription || '',
        tags: result.youtubeTags || ''
      });

      if (language === 'bn') {
        setStyles(prev => ({
          ...prev,
          titleFont: 'font-bengali',
          descFont: 'font-bengali',
          titleSize: prev.titleSize - 4,
        }));
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsGenerating(false);
    }
  };



  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (type === 'bg') setBgImage(event.target.result);
        if (type === 'logo') setLogo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;

    try {
      const isSquare = aspectRatio === '1:1';
      const width = 800;
      const height = isSquare ? 800 : 1000;

      // The layout now ensures cardRef is always at its native size with no transform
      const dataUrl = await domToPng(cardRef.current, {
        width: width,
        height: height,
        scale: 2,
        quality: 1
      });

      const link = document.createElement('a');
      link.download = `photocard-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
      alert("Export failed. Please try again.");
    }
  };

  const copyCaption = () => {
    navigator.clipboard.writeText(generatedCaption);
    alert("Caption copied!");
  };

  const addExtraElement = (type) => {
    const id = Date.now();
    const newElement = type === 'text'
      ? { id, type: 'text', content: 'অতিরিক্ত টেক্সট', x: 100, y: 100, fontSize: 24, color: '#ffffff' }
      : { id, type: 'image', src: '', x: 100, y: 100, width: 200 };

    setCardData(prev => ({
      ...prev,
      extraElements: [...prev.extraElements, newElement]
    }));
  };

  const updateExtraElement = (id, data) => {
    setCardData(prev => ({
      ...prev,
      extraElements: prev.extraElements.map(el => el.id === id ? { ...el, ...data } : el)
    }));
  };

  const removeExtraElement = (id) => {
    setCardData(prev => ({
      ...prev,
      extraElements: prev.extraElements.filter(el => el.id !== id)
    }));
  };

  useEffect(() => {
    // html2canvas is now imported locally via npm
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-editor-bg overflow-hidden">
      <EditorHeader downloadCard={downloadCard} />

      <main className="flex-1 flex overflow-hidden">
        <ToolboxSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex flex-col bg-editor-bg editor-grid relative border-r border-white/5">
          <CanvasArea
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            downloadCard={downloadCard}
            cardRef={cardRef}
          >
            <TemplateRenderer
              templateId={templateId}
              aspectRatio={aspectRatio}
              bgImage={bgImage}
              logo={logo}
              cardData={cardData}
              styles={styles}
              language={language}
              setCardData={setCardData}
              addExtraElement={addExtraElement}
              updateExtraElement={updateExtraElement}
              removeExtraElement={removeExtraElement}
            />
          </CanvasArea>
        </div>

        <PropertyPanel
          activeTab={activeTab}
          apiKey={apiKey} setApiKey={setApiKey}
          language={language} setLanguage={setLanguage}
          rawContent={rawContent} setRawContent={setRawContent}
          handleGenerateText={handleGenerateText}
          isGenerating={isGenerating}
          templateId={templateId} setTemplateId={setTemplateId}
          styles={styles} setStyles={setStyles}
          cardData={cardData} setCardData={setCardData}
          bgImage={bgImage} setBgImage={setBgImage}
          logo={logo} setLogo={setLogo}
          handleImageUpload={handleImageUpload}
          generatedCaption={generatedCaption}
          setGeneratedCaption={setGeneratedCaption}
          youtubeData={youtubeData}
          setYoutubeData={setYoutubeData}
          addExtraElement={addExtraElement}
          updateExtraElement={updateExtraElement}
          removeExtraElement={removeExtraElement}
        />
      </main>
    </div>
  );
}
