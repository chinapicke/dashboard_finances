
import Widget from './Widget';
import { useState } from 'react';
import WidgetContainer from './WidgetContainer';

const MainDashboard = () => {

  const WIDGET_LIST = [
    { id: "a", content: "A", size: 1 },
    { id: "b", content: "B", size: 1 },
    { id: "c", content: "C", size: 1 },
    { id: "d", content: "D", size: 1 },
    { id: "e", content: "E", size: 2 },
    { id: "f", content: "F", size: 1 },
    { id: "g", content: "G", size: 1 },
    { id: "h", content: "H", size: 2 },
    { id: "i", content: "I", size: 1 },
    { id: "j", content: "J", size: 1 },
  ];

  const [widgets, setWidgets] = useState(WIDGET_LIST)
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [draggedOverContainerId, setDraggedOverContainerId] = useState(null);

  const handleDragStart = (id) => setDraggedItemId(id);
  const handleDragEntered = (id) => setDraggedOverContainerId(id);
  const handleDragLeave = () => setDraggedOverContainerId(null);


  const handleDrop = () => {
    if (!draggedOverContainerId) {
      clearState();
      return;
    }

    const fromIndex = widgets.findIndex((w) => w.id === draggedItemId);
    const toIndex = widgets.findIndex((w) => w.id === draggedOverContainerId);
    setWidgets((w) => moveItem(w, fromIndex, toIndex));

    clearState();
  };

  const clearState = () => {
    setDraggedItemId(null);
    setDraggedOverContainerId(null);
  };

  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "1rem",
    }}>
      {widgets.map((item) => {
        return (
            <WidgetContainer
            key={item.id}
            onDrop={handleDrop}
            onDragEnter={() => handleDragEntered(item.id)}
            onDragLeave={handleDragLeave}
            isDraggedOver={item.id === draggedOverContainerId}
            size={item.size}
            >
               <Widget 
            key={item.id}
            content={item.content} 
            onDragStart={() => handleDragStart(item.id)} />
           </WidgetContainer>
        )
      })}
    </div>
  )
}

function moveItem(list, from, to) {
  const listClone = [...list];
  if (from < to) {
    listClone.splice(to + 1, 0, listClone[from]);
    listClone.splice(from, 1);
  } else if (to < from) {
    listClone.splice(to, 0, listClone[from]);
    listClone.splice(from + 1, 1);
  }
  return listClone;
}

export default MainDashboard

