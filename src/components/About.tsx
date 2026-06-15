import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">About Me</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {portfolio.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-indigo-50 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-indigo-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-5 text-gray-600 leading-relaxed">
          {portfolio.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
