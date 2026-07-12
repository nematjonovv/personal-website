import Badge from "@/src/shared/ui/Badge";
import LibraryCard from "./LibraryCard";
import Terminal from "./Terminal"

function WhoAmI() {
  const traits = ['SELF-TAUGHT', 'DETAIL-ORIENTED', 'FAST_LEARNER']
  return (
    <section className="min-h-screen w-full mt-16 sm:mt-20 py-12 lg:py-0 lg:h-screen" id="about-me">
      <div className="container h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
        <div className="h-full py-0 lg:py-6 flex flex-col justify-center">
          <Badge title="About_Me" />
          <h2 className="font-semibold font-grotesk text-3xl sm:text-4xl lg:text-5xl mt-4">WHO AM I</h2>

          <div className="pr-0 lg:pr-10 mt-6 sm:mt-10">
            <p className="text-base sm:text-lg lg:text-xl text-(--text) leading-7 sm:leading-8 font-grotesk font-normal">
              I am a software engineer dedicated to the craft of
              building resilient digital experiences. My approach
              blends technical precision with a design-first mindset,
              ensuring every line of code serves the user's intent.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-(--text) leading-7 sm:leading-8 font-grotesk font-normal pt-5 sm:pt-8">
              Obsessed with minimalism, performance bottlenecks,
              and the structural integrity of the modern web.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-8 sm:mt-12">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="border border-black px-3 sm:px-4 py-2 text-xs font-mono tracking-widest"
                >
                  [ {trait} ]
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col items-center justify-center gap-6 lg:gap-0">
          <LibraryCard />
          <Terminal />
        </div>
      </div>
    </section>
  );
}

export default WhoAmI;