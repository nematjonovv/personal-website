import Badge from "@/src/shared/ui/Badge";
import LibraryCard from "./LibraryCard";
import Terminal from "./Terminal"

function WhoAmI() {
  const traits = ['SELF-TAUGHT', 'DETAIL-ORIENTED', 'FAST_LEARNER']
  return (
    <section className="h-screen w-screen mt-20" id="about-me">
      <div className="container h-full grid grid-cols-2">
        <div className="h-full py-6">
          <Badge title="About_Me" />
          <h2 className="font-semibold font-grotesk text-5xl mt-4">WHO AM I</h2>

          <div className="pr-10 mt-10">
            <p className="text-xl text-(--text) leading-8 font-grotesk font-normal">
              I am a software engineer dedicated to the craft of
              building resilient digital experiences. My approach
              blends technical precision with a design-first mindset,
              ensuring every line of code serves the user's intent.
            </p>
            <p className="text-xl text-(--text) leading-8 font-grotesk font-normal pt-8">
              Obsessed with minimalism, performance bottlenecks,
              and the structural integrity of the modern web.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-12">
            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="border border-black px-4 py-2 text-xs font-mono tracking-widest"
                >
                  [ {trait} ]
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col items-center">
          <LibraryCard />
          <Terminal />
        </div>
      </div>
    </section>
  );
}

export default WhoAmI;