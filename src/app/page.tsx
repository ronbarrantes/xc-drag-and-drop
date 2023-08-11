import Image from 'next/image'
import { Board } from './components/Board'

/// Drag and drop

// 2 screens

// objects nodes that can be dragged and dropped onto servers on the other side

// array of nodes

// an array of servers

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Board />
    </main>
  )
}
