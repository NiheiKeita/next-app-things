
import { DndContext, useSensor, useSensors } from '@dnd-kit/core'
import React, { useState } from 'react'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import {
  closestCenter,
  KeyboardSensor,
  PointerSensor,
} from "@dnd-kit/core"
import { SortableItem } from './components/SortableItem'

export const DragDropView = React.memo(function DragDropView() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.indexOf(active.id)
        const newIndex = prevItems.indexOf(over.id)

        return arrayMove(prevItems, oldIndex, newIndex)
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul className="mx-auto max-w-md rounded bg-gray-100 p-4 shadow">
          {items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  )
})
export default DragDropView


