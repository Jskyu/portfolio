import { portfolio } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-indigo-500 tracking-[0.2em] uppercase mb-12">
          06 — CONTACT
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          연락은 언제든 환영합니다
        </h2>
        <p className="text-gray-500 mb-10">
          백엔드·데이터 플랫폼 포지션을 찾고 있습니다. 이메일로 편하게 보내주세요.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            {portfolio.email}
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            {portfolio.github.replace('https://', '')}
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            이력서 PDF
          </button>
        </div>
      </div>
    </section>
  )
}
