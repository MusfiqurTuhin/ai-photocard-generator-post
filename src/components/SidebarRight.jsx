import React from 'react';
import { Settings, Image as ImageIcon, Type, Palette, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export default function SidebarRight({
    templateId, setTemplateId,
    bgImage, handleImageUpload,
    logo, setLogo,
    cardData, setCardData,
    styles, setStyles,
    language
}) {
    const templates = ['Bangla Stream', 'Dhaka Stream', 'Quote', 'Prothomalo', 'New Age', 'TBS'];

    return (
        <div className="w-full md:w-[350px] bg-[#1a1a1a] border-l border-gray-800 flex flex-col h-screen overflow-y-auto">
            <div className="p-4 border-b border-gray-800 font-bold text-white text-sm flex items-center gap-2">
                <Settings size={16} /> Customization
            </div>

            <div className="p-6 space-y-8">

                {/* Template Selector */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase">Template Style</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[0, 1, 2, 3, 4, 5].map(id => (
                            <button
                                key={id}
                                onClick={() => setTemplateId(id)}
                                className={`aspect-square rounded border-2 transition-all ${templateId === id ? 'border-yellow-500 bg-gray-700' : 'border-gray-700 bg-gray-800 hover:border-gray-500'}`}
                                title={`${templates[id]} Style`}
                            >
                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 font-bold">{id + 1}</div>
                            </button>
                        ))}
                    </div>
                    <div className="text-xs text-gray-500 text-right">
                        {templates[templateId]} Style
                    </div>
                </div>

                {/* Images */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase">Images</label>

                    {/* Background Upload */}
                    <div className="relative group">
                        <div className="h-24 w-full bg-gray-800 rounded border border-gray-700 overflow-hidden relative">
                            <img src={bgImage} className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ImageIcon className="text-gray-400" />
                            </div>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'bg')}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-[10px] text-white pointer-events-none">Change BG</div>
                    </div>

                    {/* Logo Upload */}
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center relative overflow-hidden">
                            {logo ? <img src={logo} className="w-full h-full object-contain" /> : <div className="text-xs text-gray-500">Logo</div>}
                            <input type="file" onChange={(e) => handleImageUpload(e, 'logo')} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-xs text-gray-400 mb-1">Logo</p>
                            <button onClick={() => setLogo('')} className="text-xs text-red-400 hover:text-red-300">Remove Logo</button>
                        </div>
                    </div>
                </div>

                {/* Typography */}
                <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                        <Type size={14} /> Typography
                    </label>

                    {/* Title Settings */}
                    <div className="bg-[#252525] p-3 rounded border border-gray-700 space-y-3">
                        <p className="text-xs text-yellow-500 font-bold text-left">Headline</p>
                        <input
                            type="text"
                            value={cardData.title}
                            onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                            className={`w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white ${styles.titleFont}`}
                        />
                        <div className="flex gap-2">
                            <input
                                type="number"
                                value={styles.titleSize}
                                onChange={(e) => setStyles({ ...styles, titleSize: Number(e.target.value) })}
                                className="w-16 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs"
                            />
                            <select
                                value={styles.titleFont}
                                onChange={(e) => setStyles({ ...styles, titleFont: e.target.value })}
                                className="flex-1 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white"
                            >
                                <option value="font-bengali">Noto Serif Bengali</option>
                                <option value="font-oswald">Oswald (Tall)</option>
                                <option value="font-bebas">Bebas Neue (Caps)</option>
                                <option value="font-playfair">Playfair (Serif)</option>
                                <option value="font-inter">Inter (Modern)</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={styles.titleColor}
                                onChange={(e) => setStyles({ ...styles, titleColor: e.target.value })}
                                className="h-6 w-6 rounded bg-transparent border-0 cursor-pointer"
                            />
                            <div className="flex bg-gray-900 rounded border border-gray-700 p-0.5 ml-auto">
                                {['left', 'center', 'right'].map(align => (
                                    <button
                                        key={align}
                                        onClick={() => setStyles({ ...styles, titleAlign: align })}
                                        className={`p-1 rounded ${styles.titleAlign === align ? 'bg-gray-700 text-white' : 'text-gray-500'}`}
                                    >
                                        {align === 'left' && <AlignLeft size={12} />}
                                        {align === 'center' && <AlignCenter size={12} />}
                                        {align === 'right' && <AlignRight size={12} />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Description Settings */}
                    <div className="bg-[#252525] p-3 rounded border border-gray-700 space-y-3">
                        <p className="text-xs text-blue-400 font-bold text-left">Summary</p>
                        <textarea
                            value={cardData.description}
                            onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
                            rows={3}
                            className={`w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white ${styles.descFont}`}
                        />
                        <div className="flex gap-2">
                            <input
                                type="number"
                                value={styles.descSize}
                                onChange={(e) => setStyles({ ...styles, descSize: Number(e.target.value) })}
                                className="w-16 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs"
                            />
                            <select
                                value={styles.descFont}
                                onChange={(e) => setStyles({ ...styles, descFont: e.target.value })}
                                className="flex-1 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white"
                            >
                                <option value="font-bengali">Noto Serif Bengali</option>
                                <option value="font-inter">Inter (Clean)</option>
                                <option value="font-merriweather">Merriweather (Read)</option>
                                <option value="font-roboto">Roboto (Std)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Global Styles */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                        <Palette size={14} /> Appearance
                    </label>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>Overlay Opacity</span>
                            <span>{styles.overlayOpacity}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={styles.overlayOpacity}
                            onChange={(e) => setStyles({ ...styles, overlayOpacity: Number(e.target.value) })}
                            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 text-left">
                        <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase">Tag</label>
                            <input
                                type="text"
                                value={cardData.tag}
                                onChange={(e) => setCardData({ ...cardData, tag: e.target.value })}
                                className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase">Website</label>
                            <input
                                type="text"
                                value={cardData.website}
                                onChange={(e) => setCardData({ ...cardData, website: e.target.value })}
                                className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
