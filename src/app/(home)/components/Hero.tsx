import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

function Hero() {
  const tags = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWINDCSS', ]
  return (
    <section className="h-screen container">
      <div className="grid grid-cols-[3fr_2fr] h-full">
        {/* left */}
        <div className="h-full flex flex-col items-center justify-center border-r-2">
          <div>
            <p className="text-[11px] font-mono font-normal text-(--text) mb-5">FULLSTACK_DEVELOPER</p>
            <h1 className="text-[85px] font-bold font-grotesk leading-20 text-(--text)">
              HIKMATILLO NEMATJONOV
            </h1>
            <p className="text-(--text) text-lg font-grotesk font-normal my-8 max-w-170">
              Fullstack developer with a strong focus on <b className="bg-(--accent)/70 uppercase">frontend</b> 
            </p>
            <div className="flex gap-5 items-center">
              <a href="#projects" className="flex items-center gap-2 border border(--text) text-(--text) font-mono font-bold text-sm h-12 px-8 uppercase bg-(--accent)">
                VIEW WORK
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="flex items-center gap-2 border border(--text) text-(--text) font-mono font-bold text-sm h-12 px-6 uppercase">
                CONTACT
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-15">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black px-4 py-2 text-xs font-mono tracking-widest"
                >
                  [ {tag} ]
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* right */}
        <div className="relative h-h-full flex items-center justify-center">
          <img src="/images/monitor.png" alt="" />

          <div className="absolute -right-15 bottom-1/4 bg-white px-5 py-4 flex flex-col gap-2 border-2 border-r-(--primary)">

            <div className="flex items-center gap-2 text-xs font-mono text-(--text) tracking-widest uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              AVAILABLE FOR WORK
            </div>

            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-500">
              <MapPin size={16} />
              TASHKENT, UZ
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;