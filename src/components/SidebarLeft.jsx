import React from 'react';
import { Layout, Languages, RefreshCw, Sparkles, Copy, Trash2 } from 'lucide-react';

export default function SidebarLeft({
    apiKey, setApiKey,
    language, setLanguage,
    rawContent, setRawContent,
    isGenerating, handleGenerateText,
    isGeneratingImage, handleGenerateImage,
    generatedCaption, copyCaption
}) {
    return (
        <div className="w-full md:w-[400px] bg-[#1a1a1a] border-r border-gray-800 flex flex-col h-screen overflow-y-auto z-20 shadow-xl">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layout className="text-yellow-500" />
                    NewsCard<span className="text-yellow-500">AI</span>
                </h1>
                <p className="text-xs text-gray-500 mt-1">Smart Photocard Generator</p>
            </div>

            <div className="p-6 space-y-6 flex-1">
                {/* API Key */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Gemini API Key</label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Enter API Key"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded p-3 text-sm focus:border-yellow-500 focus:outline-none transition-colors"
                    />
                </div>

                {/* Language Selector */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider flex items-center gap-2">
                        <Languages size={14} /> Output Language
                    </label>
                    <div className="flex bg-[#2a2a2a] rounded p-1 border border-gray-700">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${language === 'en' ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLanguage('bn')}
                            className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${language === 'bn' ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            Bengali (বাংলা)
                        </button>
                    </div>
                </div>

                {/* Raw Content */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">News Content</label>
                    <textarea
                        value={rawContent}
                        onChange={(e) => setRawContent(e.target.value)}
                        placeholder="Paste raw news text here..."
                        className="w-full h-32 bg-[#2a2a2a] border border-gray-700 rounded p-3 text-sm focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                    />
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleGenerateText}
                        disabled={isGenerating}
                        className={`py-3 px-2 rounded font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 flex items-center justify-center gap-2
              ${isGenerating ? 'bg-gray-700 cursor-not-allowed' : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/20'}
            `}
                    >
                        {isGenerating ? <RefreshCw className="animate-spin h-4 w-4" /> : <RefreshCw className="h-4 w-4" />}
                        {isGenerating ? 'Writing...' : 'Gen Text'}
                    </button>

                    <button
                        onClick={handleGenerateImage}
                        disabled={isGeneratingImage}
                        className={`py-3 px-2 rounded font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 flex items-center justify-center gap-2
              ${isGeneratingImage ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg hover:shadow-purple-500/20'}
            `}
                    >
                        {isGeneratingImage ? <RefreshCw className="animate-spin h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                        {isGeneratingImage ? 'Drawing...' : 'Gen Art'}
                    </button>
                </div>

                {/* Generated Social Caption */}
                {generatedCaption && (
                    <div className="bg-[#252525] rounded border border-gray-700 p-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold text-gray-400">Facebook Caption</label>
                            <button onClick={copyCaption} className="text-gray-400 hover:text-white"><Copy size={14} /></button>
                        </div>
                        <p className={`text-xs text-gray-300 leading-relaxed max-h-24 overflow-y-auto ${language === 'bn' ? 'font-bengali' : 'font-mono'}`}>
                            {generatedCaption}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
