import { Mail, SendHorizontal } from "lucide-react"

export default function Contact() {

  return (
    <section className="bg-[#E7C446] px-16 py-20 min-h-[60vh] flex flex-col justify-between">

      <div className="flex flex-col gap-4">
        <div className="border border-(--text) px-4 py-2 w-full bg-(--primary)">
          <span className="text-xs font-bold text-(--text) font-mono tracking-widest">
            CONTACT.TXT
          </span>
        </div>

        <h2 className="text-7xl mb-30 font-bold font-grotesk uppercase tracking-tight text-(--text)">
          LET'S BUILD<br />SOMETHING.
        </h2>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-2 gap-4 mt-16">

        <a
          href={"t.me/nematjonovv"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex items-center justify-between px-6 py-5 group hover:bg-black transition-colors duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="text-lg group-hover:text-(--accent)"> <SendHorizontal /></span>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-zinc-500">
                Telegram
              </span>
              <span className="text-sm font-mono uppercase font-bold tracking-widest group-hover:text-white">
                @nematjonovv
              </span>
            </div>
          </div>
          <span className="text-lg group-hover:text-white transition-colors">→</span>
        </a>
        <a
          href={"mailto: hikmatillonematjonovv19@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex items-center justify-between px-6 py-5 group hover:bg-black transition-colors duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="text-lg group-hover:text-(--accent)"> <Mail /></span>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-zinc-500">
                Mail
              </span>
              <span className="text-sm font-mono uppercase font-bold tracking-widest group-hover:text-white">
                hikmatillonematjonovv19@gmail.com
              </span>
            </div>
          </div>
          <span className="text-lg group-hover:text-white transition-colors">→</span>
        </a>
      </div>

    </section>
  )
}