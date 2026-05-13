import { stack } from "@/src/shared/data/stack.data";
import Badge from "@/src/shared/ui/Badge";

function TechStack() {
  return (
    <section className="px-16 py-20 h-screen mt-15" id="stack">

      <Badge title="tech_stack/" />
      <p className="text-5xl font-grotesk font-semibold uppercase tracking-tight mt-4 mb-12">
        TOOLS I USE
      </p>

      <div className="border-t border-gray-300">
        {stack.map((row) => (
          <div
            key={row.category}
            className="grid grid-cols-[180px_1fr] border-b border-gray-300"
          >
            <div className="flex items-center px-4 py-8 border-r border-gray-300">
              <span className="text-xs font-mono font-bold tracking-widest text-[#E7C446]">
                {row.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 items-center px-8 py-8">
              {row.items.map((item) => (
                <span
                  key={item}
                  className="border border-(--text) text-(--text) px-4 py-2 text-sm font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default TechStack