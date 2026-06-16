import { portfolio } from '../data/portfolio'

export default function Resume() {
  return (
    <div className="hidden print:block text-black text-[11px] leading-relaxed font-sans">
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-black">
        <h1 className="text-2xl font-extrabold">{portfolio.name}</h1>
        <p className="text-sm text-gray-700">{portfolio.title}</p>
        <p className="mt-1 font-mono text-[10px] text-gray-600">
          {portfolio.email} · {portfolio.phone} · {portfolio.github.replace('https://', '')}
        </p>
      </div>

      {/* About */}
      <section className="mb-4 break-inside-avoid">
        <h2 className="text-xs font-bold tracking-widest uppercase mb-2 border-b border-gray-300 pb-1">
          About
        </h2>
        {portfolio.about.map((p) => (
          <p key={p} className="mb-1.5">{p}</p>
        ))}
      </section>

      {/* Career */}
      <section className="mb-4">
        <h2 className="text-xs font-bold tracking-widest uppercase mb-2 border-b border-gray-300 pb-1">
          Career
        </h2>
        {portfolio.career.map((c) => (
          <div key={c.company} className="mb-3 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <p className="font-bold text-sm">
                {c.company} <span className="font-normal text-gray-600">· {c.department} · {c.role}</span>
              </p>
              <p className="font-mono text-[10px] text-gray-500 whitespace-nowrap">{c.period}</p>
            </div>
            <p className="text-gray-700 mt-0.5">{c.description}</p>
            {c.projects.length > 0 && (
              <ul className="mt-1 ml-4 list-disc text-gray-700">
                {c.projects.map((p) => (
                  <li key={p.name}>
                    {p.name} <span className="font-mono text-[10px] text-gray-500">({p.period})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-4 break-inside-avoid">
        <h2 className="text-xs font-bold tracking-widest uppercase mb-2 border-b border-gray-300 pb-1">
          Skills
        </h2>
        {portfolio.skills.map((s) => (
          <p key={s.category} className="mb-1">
            <span className="font-bold font-mono text-[10px]">{s.category}</span>{' '}
            <span className="text-gray-700">{s.items.join(' · ')}</span>
          </p>
        ))}
      </section>

      {/* Education */}
      <section className="break-inside-avoid">
        <h2 className="text-xs font-bold tracking-widest uppercase mb-2 border-b border-gray-300 pb-1">
          Education
        </h2>
        {portfolio.education.map((e) => (
          <div key={e.school} className="flex justify-between items-baseline">
            <p>
              <span className="font-bold">{e.school}</span>{' '}
              <span className="text-gray-600">· {e.major}</span>
              {e.note && <span className="text-gray-500"> ({e.note})</span>}
            </p>
            <p className="font-mono text-[10px] text-gray-500 whitespace-nowrap">{e.period}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
