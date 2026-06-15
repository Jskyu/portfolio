import { portfolio } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 w-32 h-32 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-4xl shadow-md">
          JS
        </div>

        <div>
          <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-2">
            {portfolio.title}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {portfolio.name}
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-xl leading-relaxed">
            {portfolio.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
            >
              이메일
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
