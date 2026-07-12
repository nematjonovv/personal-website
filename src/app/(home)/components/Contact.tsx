import { Mail, SendHorizontal } from "lucide-react"

export default function Contact() {

  return (
    <section id="contact" className="bg-[#E7C446] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 min-h-[60vh] flex flex-col justify-between">

      <div className="flex flex-col gap-4">
        <div className="border border-(--text) px-4 py-2 w-full bg-(--primary)">
          <span className="text-xs font-bold text-(--text) font-mono tracking-widest">
            CONTACT.TXT
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-10 sm:mb-16 lg:mb-30 font-bold font-grotesk uppercase tracking-tight text-(--text)">
          LET'S BUILD<br />SOMETHING.
        </h2>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12 lg:mt-16">

        <a
          href="https://t.me/hikmatillonematjonov"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 group hover:bg-black transition-colors duration-300"
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span className="text-lg shrink-0 group-hover:text-(--accent)"> <SendHorizontal /></span>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-zinc-500">
                Telegram
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase font-bold tracking-widest group-hover:text-white truncate">
                @hikmatillonematjonov
              </span>
            </div>
          </div>
          <span className="text-lg shrink-0 group-hover:text-white transition-colors">→</span>
        </a>
        <a
          href={"mailto: hikmatillonematjonovv19@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 group hover:bg-black transition-colors duration-300"
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span className="text-lg shrink-0 group-hover:text-(--accent)"> <Mail /></span>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-zinc-500">
                Mail
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase font-bold tracking-widest group-hover:text-white truncate">
                hikmatillonematjonovv19@gmail.com
              </span>
            </div>
          </div>
          <span className="text-lg shrink-0 group-hover:text-white transition-colors">→</span>
        </a>
      </div >

    </section >
  )
}