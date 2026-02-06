import React from 'react';
import { Layout, Type, Image as ImageIcon, Sparkles, Upload, Palette, Layers } from 'lucide-react';

export default function ToolboxSidebar({ activeTab, setActiveTab }) {
    const tools = [
        { id: 'templates', icon: Layout, label: 'Layout' },
        { id: 'elements', icon: Sparkles, label: 'AI Magic' },
        { id: 'text', icon: Type, label: 'Text' },
        { id: 'uploads', icon: Upload, label: 'Assets' },
        { id: 'design', icon: Palette, label: 'Brand' },
    ];

    return (
        <aside className="w-20 bg-panel border-r border-white/5 flex flex-col py-6 z-40 shadow-premium">
            <div className="flex flex-col gap-3 items-center">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        onClick={() => setActiveTab(tool.id)}
                        className={`w-14 h-14 flex flex-col items-center justify-center gap-1 rounded-xl transition-all duration-300 group
              ${activeTab === tool.id
                                ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                            }`}
                    >
                        <tool.icon size={20} strokeWidth={activeTab === tool.id ? 2.5 : 2} className="transition-transform group-hover:scale-110" />
                        <span className="text-[9px] font-bold tracking-wider uppercase opacity-80">{tool.label}</span>

                        {activeTab === tool.id && (
                            <div className="absolute -left-[1px] w-1 h-6 bg-white rounded-r-full" />
                        )}
                    </button>
                ))}
            </div>

            <div className="mt-auto flex flex-col items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <Layers size={18} />
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-accent/20 border-2 border-accent/40 cursor-pointer">
                    <img src="https://ui-avatars.com/api/?name=MT&background=8b5cf6&color=fff" alt="User" />
                </div>
            </div>
        </aside>
    );
}
