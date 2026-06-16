import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-indigo-500 tracking-[0.2em] uppercase mb-12">
          01 — ABOUT
        </p>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-5 text-gray-600 leading-relaxed">
            {portfolio.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-0">
            {portfolio.expertise.map((item) => (
              <div key={item.num} className="border-b border-gray-100 py-5 last:border-0">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-indigo-300 pt-0.5 w-6 flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{item.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
