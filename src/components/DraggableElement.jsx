import React from 'react';
import { Rnd } from 'react-rnd';

const DraggableElement = ({ children, initialPos, initialSize, minWidth = 50, minHeight = 20, lockAspectRatio = false, onDragStop, onResizeStop }) => {
    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <Rnd
            default={{
                x: initialPos?.x || 0,
                y: initialPos?.y || 0,
                width: initialSize?.width || "auto",
                height: initialSize?.height || "auto",
            }}
            minWidth={minWidth}
            minHeight={minHeight}
            lockAspectRatio={lockAspectRatio}
            bounds="parent"
            className={`group transition-all duration-200 ${isSelected ? 'outline outline-2 outline-accent outline-offset-2' : 'hover:outline hover:outline-1 hover:outline-accent/50 hover:outline-offset-2'}`}
            onDragStart={() => setIsSelected(true)}
            onDragStop={(e, d) => {
                setIsSelected(false);
                if (onDragStop) onDragStop(e, d);
            }}
            onResizeStart={() => setIsSelected(true)}
            onResizeStop={(e, dir, ref, delta, pos) => {
                setIsSelected(false);
                if (onResizeStop) onResizeStop(e, dir, ref, delta, pos);
            }}
            onClick={() => setIsSelected(!isSelected)}
        >
            <div className="w-full h-full flex items-center justify-center cursor-move select-none">
                {children}
            </div>
        </Rnd>
    );
};

export default DraggableElement;
