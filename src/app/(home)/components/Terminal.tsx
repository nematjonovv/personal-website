'use client'

import { useState } from 'react'

function Terminal() {
  const [input, setInput] = useState('')

  return (
    <div className="border border-black w-full max-w-lg mt-10 mx-auto">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <span className="text-xs sm:text-sm font-mono tracking-widest">TERMINAL.EXE</span>
        <div className="flex gap-1 shrink-0">
          <span className="w-3 h-3 border border-(--text) bg-white" />
          <span className="w-3 h-3 border border-(--text) bg-white" />
        </div>
      </div>

      <div className="px-5 sm:px-8 py-6 sm:py-8 flex flex-col gap-3">

        <p className="font-mono text-xs sm:text-sm">
          <span className="text-[#E7C446] mr-2">{'>'}</span>
          <span className="font-bold">whoami</span>
        </p>
        <p className="font-mono text-xs sm:text-sm text-gray-400">hikmatillo_nematjonov</p>

        <p className="font-mono text-xs sm:text-sm mt-2">
          <span className="text-[#E7C446] mr-2">{'>'}</span>
          <span className="font-bold">cat current_stack.txt</span>
        </p>
        <p className="font-mono text-xs sm:text-sm text-gray-400 wrap-break-words">frontend: react, next.js, tailwind</p>
        <p className="font-mono text-xs sm:text-sm text-gray-400 wrap-break-words">backend: node.js, express</p>
        <p className="font-mono text-xs sm:text-sm text-gray-400 wrap-break-words">db: postgresql, mongodb</p>

        <p className="font-mono text-xs sm:text-sm mt-2">
          <span className="text-[#E7C446] mr-2">{'>'}</span>
          <span className="font-bold">./status.sh</span>
        </p>
        <p className="font-mono text-xs sm:text-sm text-gray-400 wrap-break-words">location: tashkent, uz — gmt+5</p>
        <p className="font-mono text-xs sm:text-sm text-gray-400">available: yes</p>
        <p className="font-mono text-xs sm:text-sm text-gray-400">focus: building & learning</p>

        <div className="flex items-start font-mono text-xs sm:text-sm mt-2 min-w-0">
          <span className="text-[#E7C446] mr-2 shrink-0">{'>'}</span>
          <span className="break-all">{input}</span>
          <span className="animate-pulse ml-px shrink-0">_</span>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            maxLength={50}
            className="absolute opacity-0 w-0 h-0"
          />
        </div>

      </div>
    </div>
  )
}

export default Terminal;