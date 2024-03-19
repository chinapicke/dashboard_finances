import React from 'react'

const WidgetContainer = ({onDrop,
    children,
    onDragEnter,
    onDragLeave,
    isDraggedOver,
    size,}) => {
    return (
        <div style={
            isDraggedOver
                ? {
                    border: "dashed 2px #abcdef",
                    borderRadius: "5px",
                    minHeight: "5rem",
                    boxSizing: "border-box",
                    gridColumn: `span ${size}`,
                }
                : { gridColumn: `span ${size}` }
        }
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={(e) => e.preventDefault()}
        >
            {!isDraggedOver && children}
        </div>
    )
}

export default WidgetContainer