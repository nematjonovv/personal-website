function LibraryCard() {
  return (
    <div className="border border-black w-full max-w-lg">

      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-mono tracking-widest">LIBRARY_CARD.EXE</span>
        <div className="flex gap-1">
          <span className="w-3 h-3 border border-(--text) bg-white" />
          <span className="w-3 h-3 border border-(--text) bg-white" />
        </div>
      </div>

      <div className="px-8 py-8 flex flex-col gap-5">
        <p className="font-mono text-sm tracking-widest text-gray-400">
          NAME: <span className="text-gray-400">NEMATJONOV, H.</span>
        </p>
        <p className="font-mono text-sm tracking-widest text-gray-400">
          STATUS: <span className="text-gray-400">OPEN_FOR_WORK</span>
        </p>
        <p className="font-mono text-sm tracking-widest text-gray-400">
          EXP: <span className="text-gray-400">1+ YEARS</span>
        </p>
        <p className="font-mono text-sm tracking-widest text-gray-400">
          INTERESTS: <span className="text-gray-400">[TYPESCRIPT, REACT, NEXT.JS]</span>
        </p>

        <hr className="border-gray-300 mt-2" />

        <div className="flex justify-between items-center">
          <span className="font-mono font-bold text-sm tracking-widest">SYSTEM OK</span>
          <span className="font-mono text-sm tracking-widest">VER: 1.0.25</span>
        </div>
      </div>

    </div>
  )
}
export default LibraryCard;