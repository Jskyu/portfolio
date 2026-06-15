import { portfolio } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Skills</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />

        <div className="grid gap-5">
          {portfolio.skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium"
                  >
                    {skill}
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
