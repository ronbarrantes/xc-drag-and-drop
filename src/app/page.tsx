import Image from 'next/image'
import { Board } from './components/Board'

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen p-5 gap-5">
      <header className="text-slate-300 flex flex-col text-sm justify-between">
        <h1 className="text-2xl italic text-emerald-200 mb-3">
          Drag and Drop challenge
        </h1>
        <p>Drag nodes onto the server</p>
        <p>the server will detect which server the node was dragged into</p>
      </header>
      <main className="flex flex-col items-center justify-between">
        <Board />
      </main>
    </div>
  )
}
