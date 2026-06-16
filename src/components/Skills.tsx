import { portfolio } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="stack" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-indigo-500 tracking-[0.2em] uppercase mb-12">
          03 — TECH STACK
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.skills.map((cat) => (
            <div key={cat.category} className="border border-gray-100 rounded-xl p-5">
              <p className="font-mono text-xs text-indigo-400 tracking-widest mb-4">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 border border-gray-200 rounded text-gray-600"
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
