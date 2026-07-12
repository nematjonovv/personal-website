import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

function Hero() {
  const tags = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWINDCSS',]
  return (
    <section className="min-h-screen container py-16 lg:py-0 lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] h-full gap-12 lg:gap-0">
        {/* left */}
        <div className="h-full flex flex-col items-center justify-center lg:border-r-2 px-4 sm:px-6 lg:px-0">
          <div>
            <p className="text-[11px] font-mono font-normal text-(--text) mb-5">FULLSTACK_DEVELOPER</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[85px] font-bold font-grotesk leading-tight lg:leading-20 text-(--text)">
              HIKMATILLO NEMATJONOV
            </h1>
            <p className="text-(--text) text-base sm:text-lg font-grotesk font-normal my-6 sm:my-8 max-w-170">
              Fullstack developer with a strong focus on <b className="bg-(--accent)/70 uppercase">frontend</b>
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-5 items-center">
              <a href="#projects" className="flex items-center gap-2 border border-(--text) text-(--text) font-mono font-bold text-sm h-12 px-6 sm:px-8 uppercase bg-(--accent)">
                VIEW WORK
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="flex items-center gap-2 border border-(--text) text-(--text) font-mono font-bold text-sm h-12 px-6 uppercase">
                CONTACT
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-10 sm:mt-15">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black px-3 sm:px-4 py-2 text-xs font-mono tracking-widest"
                >
                  [ {tag} ]
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* right */}
        <div className="relative h-full flex flex-1 items-center justify-center px-4 lg:px-0">
          <img src="/images/monitor.png" alt="" className="max-w-70 sm:max-w-sm lg:max-w-full" />

          <div className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 -bottom-4 lg:-right-15 lg:bottom-1/4 bg-white px-4 sm:px-5 py-3 sm:py-4 flex flex-col gap-2 border-2 border-r-(--primary) whitespace-nowrap">

            <div className="flex items-center gap-2 text-xs font-mono text-(--text) tracking-widest uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
              AVAILABLE FOR WORK
            </div>

            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-500">
              <MapPin size={16} className="shrink-0" />
              TASHKENT, UZ
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;