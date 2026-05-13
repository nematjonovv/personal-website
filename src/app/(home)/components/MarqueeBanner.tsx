const rowOne = ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWINDCSS"]
const rowTwo = ["JAVASCRIPT", "FIGMA", "GIT", "NODE.JS"]

const separator = <span className="mx-4 text-[#E7C446]">✦</span>

function MarqueeRow({ items, reverse = false }: { items: string[], reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center">
            {items.map((item, j) => (
              <span key={j} className="flex items-center text-sm font-mono tracking-widest text-white uppercase">
                {item}{separator}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeBanner() {
  return (
    <div className="bg-[#111] py-3 overflow-hidden flex flex-col gap-2">
      <MarqueeRow items={rowOne} />
      <MarqueeRow items={rowTwo} reverse />
    </div>
  )
}