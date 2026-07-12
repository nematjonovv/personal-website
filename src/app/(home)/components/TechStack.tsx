import { stack } from "@/src/shared/data/stack.data";
import Badge from "@/src/shared/ui/Badge";

function TechStack() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20" id="stack">
      <div className="container">
        <Badge title="tech_stack/" />
        <p className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-semibold uppercase tracking-tight mt-4 mb-8 sm:mb-12">
          TOOLS I USE
        </p>

        <div className="border-t border-gray-300">
          {stack.map((row) => (
            <div
              key={row.category}
              className="grid grid-cols-1 sm:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] border-b border-gray-300"
            >
              <div className="flex items-center px-4 sm:px-4 pt-6 pb-2 sm:py-8 sm:border-r border-gray-300">
                <span className="text-xs font-mono font-bold tracking-widest text-[#E7C446]">
                  {row.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 items-center px-4 sm:px-8 pb-6 pt-2 sm:py-8">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="border border-(--text) text-(--text) px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default TechStack