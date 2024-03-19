import React from 'react'

const Widget = ({content, onDragStart}) => {
  return (
    <div className='border-solid border border-rounded bg-red-600 text-white' onDragStart={onDragStart}
    draggable>
      {content}
    </div>
  )
}

export default Widget