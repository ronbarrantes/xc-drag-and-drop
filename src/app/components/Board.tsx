'use client'
import { useEffect, useState } from 'react'

interface DroppableZoneProps {
  onDrop: (itemId: string) => void
  serverName?: number
}

const DroppableZone: React.FC<DroppableZoneProps> = ({
  onDrop,
  serverName,
}) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const itemId = event.dataTransfer.getData('text/plain')
    onDrop(itemId)
  }

  return (
    <div
      className="droppable-zone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Drop items here in {serverName}
    </div>
  )
}

export const Board = () => {
  const [beingDragged, setBeingDragged] = useState<number | null>(null)
  const [nodes, setNodes] = useState([1, 2, 3, 4, 5])
  const [servers, setServers] = useState([1, 2, 3, 4])
  const [text, setText] = useState('')

  useEffect(() => {
    if (beingDragged !== null) {
      console.log('beingDragged', beingDragged)
    }
  })

  return (
    <div className="flex w-screen h-screen border border-red-500">
      <div className="flex flex-col w-1/2 border border-green-500">
        <h2>Server</h2>
        <ul>
          {servers.map((node, index) => (
            <li
              draggable="true"
              onDrop={() => {
                console.log('dropped element', beingDragged, 'on', node)
              }}
              className="border border-yellow-400"
              key={`node-${index}`}
            >
              <DroppableZone
                onDrop={(itemId) => console.log(itemId)}
                serverName={node}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-1/2 border border-blue-500">
        <h2>nodes</h2>
        <ul>
          {nodes.map((node, index) => (
            <li
              onDrag={(e) => {
                setBeingDragged(node)
              }}
              draggable="true"
              className="border border-yellow-400"
              key={`node-${index}`}
            >
              {node}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
