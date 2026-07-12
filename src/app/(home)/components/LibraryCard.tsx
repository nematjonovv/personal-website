function LibraryCard() {
  return (
    <div className="border border-black w-full max-w-lg mx-auto">

      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <span className="text-xs sm:text-sm font-mono tracking-widest">LIBRARY_CARD.EXE</span>
        <div className="flex gap-1 shrink-0">
          <span className="w-3 h-3 border border-(--text) bg-white" />
          <span className="w-3 h-3 border border-(--text) bg-white" />
        </div>
      </div>

      <div className="px-5 sm:px-8 py-6 sm:py-8 flex flex-col gap-4 sm:gap-5">
        <p className="font-mono text-xs sm:text-sm tracking-widest text-gray-400 wrap-break-words">
          NAME: <span className="text-gray-400">NEMATJONOV, H.</span>
        </p>
        <p className="font-mono text-xs sm:text-sm tracking-widest text-gray-400 wrap-break-words">
          STATUS: <span className="text-gray-400">OPEN_FOR_WORK</span>
        </p>
        <p className="font-mono text-xs sm:text-sm tracking-widest text-gray-400 wrap-break-words">
          EXP: <span className="text-gray-400">1+ YEARS</span>
        </p>
        <p className="font-mono text-xs sm:text-sm tracking-widest text-gray-400 wrap-break-words">
          INTERESTS: <span className="text-gray-400">[TYPESCRIPT, REACT, NEXT.JS]</span>
        </p>

        <hr className="border-gray-300 mt-2" />

        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="font-mono font-bold text-xs sm:text-sm tracking-widest">SYSTEM OK</span>
          <span className="font-mono text-xs sm:text-sm tracking-widest">VER: 1.0.25</span>
        </div>
      </div>

    </div>
  )
}
export default LibraryCard;