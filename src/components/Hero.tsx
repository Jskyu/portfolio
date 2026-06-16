import { portfolio } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-end bg-white pt-16"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <p className="font-mono text-xs text-gray-400 tracking-[0.2em] uppercase mb-8">
          BACKEND ENGINEER · PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4 whitespace-pre-line">
          {portfolio.tagline}
        </h1>

        <p className="font-mono text-indigo-500 text-base md:text-lg mb-5">
          {portfolio.subTagline}
        </p>

        <p className="text-gray-500 mb-3">{portfolio.heroDesc}</p>

        <p className="font-mono text-sm text-gray-400 mb-10">
          {portfolio.heroTechTags.join(' · ')}
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            이메일 보내기
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="border-t border-gray-100 pt-10 grid grid-cols-3 gap-8">
          {portfolio.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="font-mono text-xs text-gray-400 mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
