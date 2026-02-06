import React, { useState } from 'react';
import { Maximize2, Minimize2, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

export default function CanvasArea({
    aspectRatio,
    setAspectRatio,
    downloadCard,
    cardRef,
    children
}) {
    const isSquare = aspectRatio === '1:1';
    const width = 800;
    const height = isSquare ? 800 : 1000;
    const [zoom, setZoom] = useState(0.5);

    return (
        <div className="flex-1 bg-bg flex flex-col relative overflow-hidden animate-premium">
            {/* Context Toolbar */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-panel/50 backdrop-blur-md">
                <div className="flex bg-surface/50 p-1 rounded-xl border border-white/5">
                    <button
                        onClick={() => setAspectRatio('4:5')}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${aspectRatio === '4:5' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Portrait 4:5
                    </button>
                    <button
                        onClick={() => setAspectRatio('1:1')}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${aspectRatio === '1:1' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Square 1:1
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-surface/50 px-3 py-1.5 rounded-xl border border-white/5">
                        <button onClick={() => setZoom(z => Math.max(0.2, z - 0.1))} className="text-gray-500 hover:text-white transition-colors">
                            <ZoomOut size={16} />
                        </button>
                        <span className="text-[10px] font-bold text-gray-400 min-w-[32px] text-center">
                            {Math.round(zoom * 100)}%
                        </span>
                        <button onClick={() => setZoom(z => Math.min(1.5, z + 0.1))} className="text-gray-500 hover:text-white transition-colors">
                            <ZoomIn size={16} />
                        </button>
                    </div>

                    <button className="text-gray-500 hover:text-white transition-colors">
                        <RefreshCw size={18} />
                    </button>
                </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative flex justify-center items-center p-12 editor-grid overflow-auto custom-scrollbar">
                <div
                    className="relative shadow-premium transition-all duration-300 ease-out flex items-center justify-center bg-black/20 rounded-lg"
                    style={{
                        width: width * zoom,
                        height: height * zoom,
                    }}
                >
                    {/* Scale Container: This div handles the UI scaling */}
                    <div
                        style={{
                            transform: `scale(${zoom})`,
                            transformOrigin: 'center center',
                            width: `${width}px`,
                            height: `${height}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Capture Target: This div stays at native resolution */}
                        <div
                            ref={cardRef}
                            data-capture-target="true"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                transform: 'none', // Always 1:1 for capture
                            }}
                            className="bg-black text-white overflow-hidden shadow-2xl ring-1 ring-white/10 relative"
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="h-8 border-t border-white/5 bg-panel/30 flex items-center justify-between px-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                <div className="flex items-center gap-4">
                    <span>{width} × {height} PX</span>
                    <span className="text-accent/40">•</span>
                    <span>Ready to export</span>
                </div>
                <div>
                    Render Engine: WebGL Optimized
                </div>
            </div>
        </div>
    );
}
