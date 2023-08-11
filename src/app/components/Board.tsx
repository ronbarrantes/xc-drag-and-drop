'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface DroppableZoneProps {
  onDrop: (itemId: string) => void
  serverName?: React.ReactNode
  className?: string
}

const DroppableZone: React.FC<DroppableZoneProps> = ({
  onDrop,
  serverName,
  className,
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
      className={`droppable-zone ${className}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Server {serverName}
    </div>
  )
}

export const Board = () => {
  const [beingDragged, setBeingDragged] = useState<number | null>(null)
  const nodes = [1, 2, 3, 4, 5]
  const servers = ['A', 'B', 'C', 'D', 'E']

  useEffect(() => {
    if (beingDragged !== null) {
      console.log('Node', beingDragged, 'is being dragged!')
    }
  })

  return (
    <div className="flex w-full border-2 border-emerald-300 rounded-md p-5 h-full gap-2">
      <div className="flex flex-col w-1/2 gap-4 items-center">
        <h2 className="text-center">Servers</h2>
        <ul className="flex flex-wrap gap-2 h-full">
          {servers.map((node, index) => (
            <li
              draggable="true"
              onDrop={() => {
                const message = `Node ${beingDragged} was dropped on Server ${node}`
                console.log(message)
                toast.success(message)
              }}
              key={`node-${index}`}
            >
              <DroppableZone
                onDrop={(itemId) => console.log(itemId)}
                serverName={node}
                className="border border-blue-500 w-20 h-20 bg-black rounded-lg justify-center items-center flex"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-1/2 gap-4">
        <h2 className="text-center">Nodes</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {nodes.map((node, index) => (
            <li
              onDrag={(e) => {
                setBeingDragged(node)
              }}
              draggable="true"
              className="border text-3xl border-yellow-400 w-20 h-20 bg-black rounded-full justify-center items-center flex"
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
