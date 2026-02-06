import React, { useState } from 'react';
import { Download, Share2, Crown, ChevronDown, Check, LayoutGrid } from 'lucide-react';

export default function EditorHeader({ downloadCard }) {
    return (
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-panel z-50 shadow-premium">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Crown size={22} className="text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-extrabold text-white tracking-tight text-xl">NewsCard <span className="text-accent">Pro</span></span>
                            <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">Studio</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={downloadCard}
                    className="btn-primary h-10 flex items-center gap-2 text-sm"
                >
                    <Download size={16} />
                    <span className="hidden sm:inline">Export</span>
                </button>
            </div>
        </header>
    );
}
