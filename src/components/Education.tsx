import { portfolio } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Education</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />

        <div className="space-y-4">
          {portfolio.education.map((edu) => (
            <div
              key={edu.school}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
                <p className="text-indigo-600 font-medium text-sm">{edu.major}</p>
                {edu.note && <p className="text-gray-500 text-sm mt-1">{edu.note}</p>}
              </div>
              <span className="text-sm text-gray-400 flex-shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
