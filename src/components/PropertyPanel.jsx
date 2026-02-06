import React from 'react';
import {
    Type, ImageIcon, Palette, Sliders, AlignLeft, AlignCenter, AlignRight,
    Trash2, Languages, Sparkles, Upload, ChevronDown, Check, Key, Layers,
    Maximize2, Grid, Layers as LayersIcon, Bold, Italic, Copy
} from 'lucide-react';

export default function PropertyPanel({
    activeTab,
    templateId, setTemplateId,
    language, setLanguage,
    styles, setStyles,
    cardData, setCardData,
    bgImage, setBgImage,
    logo, setLogo,
    apiKey, setApiKey,
    rawContent, setRawContent,
    handleGenerateText,
    handleGenerateImage,
    isGenerating,
    isGeneratingImage,
    handleImageUpload,
    generatedCaption,
    setGeneratedCaption,
    youtubeData,
    setYoutubeData,
    addExtraElement,
    updateExtraElement,
    removeExtraElement
}) {
    const templates = ['Bangla Stream', 'Dhaka Stream', 'Quote', 'Prothomalo', 'New Age', 'TBS'];
    const thumbNames = ['bangla_stream', 'dhaka_stream', 'quote', 'prothomalo', 'newage', 'tbs'];

    const TabContent = () => {
        switch (activeTab) {
            case 'templates':
                return (
                    <div className="space-y-6 animate-premium">
                        <header>
                            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Layout Templates</h3>
                            <p className="text-[10px] text-gray-500">Select a professional design framework</p>
                        </header>
                        <div className="grid grid-cols-1 gap-4">
                            {[0, 1, 2, 3, 4, 5].map((id) => (
                                <button
                                    key={id}
                                    onClick={() => setTemplateId(id)}
                                    className={`group relative h-40 rounded-2xl overflow-hidden border-2 transition-all duration-500
                                      ${templateId === id ? 'border-accent ring-4 ring-accent/20' : 'border-white/5 hover:border-white/20'}`}
                                >
                                    <img
                                        src={`/thumbnails/${thumbNames[id]}.png`}
                                        alt={templates[id]}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-4">
                                        <div className="flex items-center justify-between w-full">
                                            <span className="text-sm font-bold text-white mb-0.5">{templates[id]}</span>
                                            {templateId === id && (
                                                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center border-2 border-white/20">
                                                    <Check size={12} className="text-white" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 'elements':
                return (
                    <div className="space-y-6 animate-premium">
                        <section className="bg-accent-soft p-5 rounded-2xl border border-accent/20">
                            <div className="flex items-center gap-2 text-accent mb-3">
                                <Sparkles size={18} />
                                <span className="text-sm font-black uppercase tracking-wider">AI Magic Studio</span>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1.5">
                                        <Key size={10} /> Gemini API Secret
                                    </label>
                                    <input
                                        type="password"
                                        value={apiKey}
                                        onChange={(e) => setApiKey(e.target.value)}
                                        placeholder="••••••••••••••••"
                                        className="input-field shadow-inner"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Context / News Source</label>
                                    <textarea
                                        value={rawContent}
                                        onChange={(e) => setRawContent(e.target.value)}
                                        placeholder="Paste headlines or article text..."
                                        className="input-field h-40 resize-none scrollbar-premium"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={handleGenerateText}
                                        disabled={isGenerating}
                                        className="btn-primary w-full h-12 text-xs"
                                    >
                                        {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Type size={14} />}
                                        {isGenerating ? 'Writing...' : 'Gen Headlines'}
                                    </button>

                                    {generatedCaption && (
                                        <div className="mt-4 p-5 bg-black/40 rounded-2xl border border-white/5 animate-premium shadow-inner relative group/caption">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Facebook Post Caption</span>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(generatedCaption);
                                                        // Temporary simple feedback
                                                        const btn = document.activeElement;
                                                        const originalHTML = btn.innerHTML;
                                                        btn.innerHTML = 'Copied!';
                                                        setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
                                                    }}
                                                    className="p-2 hover:bg-accent/20 text-accent rounded-xl transition-all flex items-center gap-1.5 font-bold"
                                                    title="Copy to Clipboard"
                                                >
                                                    <Copy size={12} />
                                                    <span className="text-[9px] uppercase tracking-tighter">Copy</span>
                                                </button>
                                            </div>
                                            <textarea
                                                readOnly
                                                value={generatedCaption}
                                                className="w-full bg-transparent border-none text-[11px] font-medium leading-relaxed text-white/70 h-32 resize-none focus:outline-none scrollbar-premium"
                                            />
                                            <div className="absolute bottom-2 right-4 text-[9px] text-gray-600 font-bold uppercase tracking-widest opacity-0 group-hover/caption:opacity-100 transition-opacity">
                                                AI Generated
                                            </div>
                                        </div>
                                    )}

                                    {youtubeData && youtubeData.title && (
                                        <div className="space-y-4 pt-4 border-t border-white/5 animate-premium">
                                            <div className="flex items-center gap-2 text-white/50 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">YouTube Metadata</span>
                                            </div>

                                            {/* YouTube Tags */}
                                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 relative group/yt">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">Keywords/Tags</span>
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(youtubeData.tags || '');
                                                            const btn = document.activeElement;
                                                            const originalHTML = btn.innerHTML;
                                                            btn.innerHTML = 'Copied!';
                                                            setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
                                                        }}
                                                        className="text-accent hover:text-white transition-colors"
                                                    >
                                                        <Copy size={10} />
                                                    </button>
                                                </div>
                                                <textarea
                                                    value={youtubeData.tags || ''}
                                                    onChange={(e) => setYoutubeData({ ...youtubeData, tags: e.target.value })}
                                                    className="w-full bg-transparent border-none text-[10px] text-accent/60 h-20 resize-none focus:outline-none scrollbar-premium"
                                                />
                                            </div>

                                            {/* YouTube Title */}
                                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 relative group/yt">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">YouTube Title ({youtubeData.title?.length || 0}/70)</span>
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(youtubeData.title || '');
                                                            const btn = document.activeElement;
                                                            const originalHTML = btn.innerHTML;
                                                            btn.innerHTML = 'Copied!';
                                                            setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
                                                        }}
                                                        className="text-accent hover:text-white transition-colors"
                                                    >
                                                        <Copy size={10} />
                                                    </button>
                                                </div>
                                                <textarea
                                                    value={youtubeData.title || ''}
                                                    onChange={(e) => setYoutubeData({ ...youtubeData, title: e.target.value })}
                                                    className="w-full bg-transparent border-none text-[11px] font-bold text-white/80 h-16 resize-none focus:outline-none scrollbar-premium"
                                                />
                                            </div>

                                            {/* YouTube Description */}
                                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 relative group/yt">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">YouTube Description</span>
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(youtubeData.description || '');
                                                            const btn = document.activeElement;
                                                            const originalHTML = btn.innerHTML;
                                                            btn.innerHTML = 'Copied!';
                                                            setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
                                                        }}
                                                        className="text-accent hover:text-white transition-colors"
                                                    >
                                                        <Copy size={10} />
                                                    </button>
                                                </div>
                                                <textarea
                                                    value={youtubeData.description || ''}
                                                    onChange={(e) => setYoutubeData({ ...youtubeData, description: e.target.value })}
                                                    className="w-full bg-transparent border-none text-[10px] text-white/60 h-24 resize-none focus:outline-none scrollbar-premium"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </section>

                        <div className="pt-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-3">Processing Language</label>
                            <div className="flex bg-surface rounded-xl p-1 border border-border overflow-hidden">
                                {['en', 'bn'].map(l => (
                                    <button
                                        key={l}
                                        onClick={() => setLanguage(l)}
                                        className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${language === l ? 'bg-accent text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                    >
                                        {l === 'en' ? 'English' : 'Bengali'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'text':
                return (
                    <div className="space-y-8 animate-premium">
                        <section className="space-y-6">
                            <header className="flex items-center justify-between">
                                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Headline Style</h3>
                                <div className="flex bg-surface p-1 rounded-xl border border-border">
                                    {['left', 'center', 'right'].map(align => (
                                        <button
                                            key={align}
                                            onClick={() => setStyles({ ...styles, titleAlign: align })}
                                            className={`p-1.5 rounded-lg transition-all ${styles.titleAlign === align ? 'bg-accent text-white shadow-sm' : 'text-gray-600 hover:text-gray-400'}`}
                                        >
                                            {align === 'left' && <AlignLeft size={16} />}
                                            {align === 'center' && <AlignCenter size={16} />}
                                            {align === 'right' && <AlignRight size={16} />}
                                        </button>
                                    ))}
                                </div>
                            </header>

                            <div className="space-y-4">
                                <div className="relative group">
                                    <select
                                        value={styles.titleFont}
                                        onChange={(e) => setStyles({ ...styles, titleFont: e.target.value })}
                                        className="input-field appearance-none cursor-pointer pr-10"
                                    >
                                        <option value="font-bengali">Noto Serif Bengali (Professional)</option>
                                        <option value="font-bebas">Bebas Neue (Heavy Impact)</option>
                                        <option value="font-oswald">Oswald (Condensed)</option>
                                        <option value="font-playfair">Playfair Display (Classy)</option>
                                        <option value="font-inter">Inter (Modern Sans)</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">Font Size</label>
                                        <div className="flex items-center bg-surface border border-border rounded-xl px-4 py-2">
                                            <input
                                                type="number"
                                                value={styles.titleSize}
                                                onChange={(e) => setStyles({ ...styles, titleSize: Number(e.target.value) })}
                                                className="w-full bg-transparent text-sm font-bold text-white focus:outline-none"
                                            />
                                            <span className="text-[10px] text-gray-600">PX</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">Color</label>
                                        <div className="flex items-center gap-3 bg-surface border border-border rounded-xl px-3 py-1.5">
                                            <input
                                                type="color"
                                                value={styles.titleColor}
                                                onChange={(e) => setStyles({ ...styles, titleColor: e.target.value })}
                                                className="w-7 h-7 rounded-lg border-2 border-white/10 cursor-pointer overflow-hidden p-0"
                                            />
                                            <span className="text-[10px] font-mono font-bold text-gray-500 select-all leading-none">{styles.titleColor.toUpperCase()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black text-gray-600 uppercase tracking-tighter">
                                            <span>Spacing</span>
                                            <span className="text-accent">{styles.letterSpacing}</span>
                                        </div>
                                        <input
                                            type="range" min="-5" max="25"
                                            value={styles.letterSpacing}
                                            onChange={(e) => setStyles({ ...styles, letterSpacing: Number(e.target.value) })}
                                            className="w-full h-1 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black text-gray-600 uppercase tracking-tighter">
                                            <span>Line Height</span>
                                            <span className="text-accent">{styles.lineHeight}</span>
                                        </div>
                                        <input
                                            type="range" min="0.8" max="2.5" step="0.1"
                                            value={styles.lineHeight}
                                            onChange={(e) => setStyles({ ...styles, lineHeight: Number(e.target.value) })}
                                            className="w-full h-1 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4 pt-4 border-t border-border">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Edit Content</h4>
                            <div className="space-y-3">
                                <textarea
                                    value={cardData.title}
                                    onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                                    maxLength={150}
                                    className="input-field h-24 text-xs font-bold leading-relaxed scrollbar-premium"
                                    placeholder="Headline..."
                                />
                                <textarea
                                    value={cardData.description}
                                    onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
                                    className="input-field h-32 text-xs leading-relaxed scrollbar-premium"
                                    placeholder="Description..."
                                />
                                <textarea
                                    value={cardData.tag}
                                    onChange={(e) => setCardData({ ...cardData, tag: e.target.value })}
                                    className="input-field h-16 text-xs leading-relaxed scrollbar-premium"
                                    placeholder="Tag / News Source (e.g. Author | Title)..."
                                />
                            </div>
                        </section>
                    </div>
                );

            case 'uploads':
                return (
                    <div className="space-y-8 animate-premium">
                        <section className="space-y-5">
                            <header>
                                <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Project Assets</h3>
                                <p className="text-[10px] text-gray-500">Upload and manage visual media</p>
                            </header>

                            <div className="space-y-4">
                                <div className="relative group">
                                    <div className="h-44 w-full rounded-2xl bg-surface border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 group-hover:border-accent group-hover:bg-accent-soft transition-all duration-500 cursor-pointer overflow-hidden relative">
                                        {bgImage ? (
                                            <img src={bgImage} className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500" />
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center border border-white/5">
                                                    <Upload size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Upload Main Image</span>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        type="file" accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'bg')}
                                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                    />
                                    {bgImage && (
                                        <button
                                            onClick={() => setBgImage(null)}
                                            className="absolute top-3 right-3 p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-xl shadow-xl z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    <div className="w-14 h-14 rounded-xl bg-bg flex items-center justify-center relative border border-white/5 shadow-inner">
                                        {logo ? <img src={logo} className="w-10 h-10 object-contain" /> : <LayersIcon size={24} className="text-gray-700" />}
                                        <input
                                            type="file" accept="image/*"
                                            onChange={(e) => handleImageUpload(e, 'logo')}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-[10px] font-black text-white uppercase tracking-widest mb-0.5">Brand Mark</span>
                                        <span className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">PNG Preferred</span>
                                    </div>
                                    {logo && (
                                        <button
                                            onClick={() => setLogo('')}
                                            className="p-2.5 bg-red-400/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6 pt-4 border-t border-border">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Image Processing</h4>
                            {[
                                { label: 'Brightness', key: 'filterBrightness', min: 0, max: 200 },
                                { label: 'Contrast', key: 'filterContrast', min: 0, max: 200 },
                                { label: 'Gaussian Blur', key: 'filterBlur', min: 0, max: 40 },
                            ].map(filter => (
                                <div key={filter.key} className="space-y-2.5">
                                    <div className="flex justify-between items-center text-[10px] font-black text-gray-600 uppercase tracking-tight">
                                        <span>{filter.label}</span>
                                        <span className="text-accent text-xs">{styles[filter.key] ?? 100}{filter.key === 'filterBlur' ? 'PX' : '%'}</span>
                                    </div>
                                    <input
                                        type="range" min={filter.min} max={filter.max}
                                        value={styles[filter.key] ?? 100}
                                        onChange={(e) => setStyles({ ...styles, [filter.key]: Number(e.target.value) })}
                                        className="w-full h-1 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>
                            ))}
                        </section>
                    </div>
                );

            case 'design':
                return (
                    <div className="space-y-8 animate-premium scrollbar-premium">
                        <section className="space-y-5">
                            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Global Controls</h3>

                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { label: 'Branding Logo', key: 'showLogo' },
                                    { label: 'Category Tag', key: 'showTag' },
                                    { label: 'Metadata Footer', key: 'showFooter' },
                                ].map(toggle => (
                                    <button
                                        key={toggle.key}
                                        onClick={() => setCardData({ ...cardData, [toggle.key]: !cardData[toggle.key] })}
                                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group
                                            ${cardData[toggle.key] ? 'bg-accent/10 border-accent/30 text-white shadow-xl shadow-accent/5' : 'bg-surface border-border text-gray-500'}`}
                                    >
                                        <span className="text-xs font-extrabold uppercase tracking-tight">{toggle.label}</span>
                                        <div className={`w-10 h-5 rounded-full relative transition-all duration-500 ${cardData[toggle.key] ? 'bg-accent' : 'bg-bg-light border border-border'}`}>
                                            <div className={`absolute top-1 w-3 h-3 rounded-full bg-white shadow-sm transition-all duration-500 ${cardData[toggle.key] ? 'right-1' : 'right-6'}`} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6 pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Active Layers</h3>
                                <button
                                    onClick={() => addExtraElement('text')}
                                    className="p-1.5 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-white transition-all shadow-lg shadow-accent/10"
                                    title="Add Extra Text"
                                >
                                    <Type size={14} />
                                </button>
                            </div>

                            <div className="space-y-3">
                                {cardData.extraElements?.length === 0 && (
                                    <p className="text-[10px] text-gray-600 text-center py-6 border border-dashed border-border rounded-2xl">No dynamic layers added</p>
                                )}
                                {cardData.extraElements?.map(el => (
                                    <div key={el.id} className="bg-surface rounded-2xl p-4 border border-border group hover:border-accent transition-all animate-premium shadow-inner">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                                                <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Text Layer</span>
                                            </div>
                                            <button
                                                onClick={() => removeExtraElement(el.id)}
                                                className="p-1.5 hover:bg-red-500/10 text-gray-600 hover:text-red-500 rounded-lg transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                value={el.content}
                                                onChange={(e) => updateExtraElement(el.id, { content: e.target.value })}
                                                className="w-full bg-bg border border-border rounded-xl h-10 px-3 text-[11px] font-bold text-white focus:border-accent outline-none"
                                            />

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-bg border border-border rounded-xl flex items-center gap-2 p-1.5">
                                                    <input
                                                        type="color"
                                                        value={el.color}
                                                        onChange={(e) => updateExtraElement(el.id, { color: e.target.value })}
                                                        className="w-8 h-8 rounded-lg p-0 border-none bg-transparent cursor-pointer"
                                                    />
                                                    <span className="text-[9px] font-mono font-bold text-gray-500 uppercase">{el.color}</span>
                                                </div>
                                                <div className="bg-bg border border-border rounded-xl flex items-center pr-3">
                                                    <input
                                                        type="number"
                                                        value={el.fontSize}
                                                        onChange={(e) => updateExtraElement(el.id, { fontSize: parseInt(e.target.value) })}
                                                        className="w-full bg-transparent h-10 px-3 text-[11px] font-bold text-white focus:outline-none"
                                                    />
                                                    <span className="text-[9px] font-bold text-gray-600">PX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6 pt-4 border-t border-border">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Studio Config</h4>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black text-gray-600 uppercase tracking-tight">
                                        <span>Surface Opacity</span>
                                        <span className="text-accent">{styles.overlayOpacity}%</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="100"
                                        value={styles.overlayOpacity}
                                        onChange={(e) => setStyles({ ...styles, overlayOpacity: Number(e.target.value) })}
                                        className="w-full h-1 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">Surface Fill</label>
                                        <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2">
                                            <input
                                                type="color"
                                                value={cardData.bgColor || '#1a1a1a'}
                                                onChange={(e) => setCardData({ ...cardData, bgColor: e.target.value })}
                                                className="w-7 h-7 rounded-lg border-2 border-white/10 cursor-pointer overflow-hidden p-0"
                                            />
                                            <span className="text-[10px] font-mono font-bold text-gray-500 uppercase leading-none">{cardData.bgColor || '#1A1A1A'}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">System Accent</label>
                                        <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2">
                                            <input
                                                type="color"
                                                value={styles.accentColor}
                                                onChange={(e) => setStyles({ ...styles, accentColor: e.target.value })}
                                                className="w-7 h-7 rounded-lg border-2 border-white/10 cursor-pointer overflow-hidden p-0"
                                            />
                                            <span className="text-[10px] font-mono font-bold text-gray-500 uppercase leading-none">{styles.accentColor}</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <aside className="w-[360px] bg-panel border-l border-white/5 flex flex-col z-40 shadow-premium overflow-hidden">
            <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-panel/80 backdrop-blur-md">
                <span className="text-[11px] font-black text-white flex items-center gap-2.5 uppercase tracking-widest">
                    <Grid size={16} className="text-accent" />
                    {activeTab} Settings
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-8 scrollbar-premium">
                <TabContent />
            </div>
        </aside>
    );
}

const RefreshCw = ({ className, size }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg>
);
