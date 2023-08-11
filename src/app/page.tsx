import Image from 'next/image'
import { Board } from './components/Board'

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen p-5 gap-5">
      <header className="text-slate-300 flex flex-col text-sm justify-between">
        <h1 className="text-2xl italic text-emerald-200 mb-3">
          Drag and Drop Challenge
        </h1>
        <p>Drag nodes to the servers</p>
        <p>
          When a node is dropped onto a server, the server will notify that said
          node was dragged
        </p>
      </header>
      <main className="flex flex-col items-center justify-between">
        <Board />
      </main>
    </div>
  )
}
