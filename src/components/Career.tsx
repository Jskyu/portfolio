import { useState } from 'react'
import { portfolio } from '../data/portfolio'

type CareerEntry = (typeof portfolio.career)[number]

function BriefcaseIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 14l6.16-3.422A12.083 12.083 0 0121 12c0 5.523-4.03 10-9 10S3 17.523 3 12c0-1.547.376-3.02 1.04-4.326L12 14z" />
    </svg>
  )
}

function CareerRow({ entry }: { entry: CareerEntry }) {
  const [open, setOpen] = useState(false)
  const hasProjects = entry.projects.length > 0

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div className="py-6 flex items-start gap-4">
        <div className="w-5 flex-shrink-0 mt-0.5">
          <BriefcaseIcon />
        </div>
        <span className="font-mono text-xs text-gray-400 w-8 flex-shrink-0 mt-0.5">경력</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{entry.company}</p>
          <p className="text-sm text-indigo-500 mt-0.5">{entry.department} · {entry.role}</p>
          {entry.description && (
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{entry.description}</p>
          )}
          {hasProjects && (
            <button
              onClick={() => setOpen((p) => !p)}
              className="mt-3 text-xs font-mono text-indigo-400 hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              {open ? `▲ 접기` : `▼ 프로젝트 ${entry.projects.length}개`}
            </button>
          )}
          {open && (
            <ul className="mt-3 space-y-2">
              {entry.projects.map((p) => (
                <li key={p.name} className="flex items-start gap-3 text-sm">
                  <span className="text-gray-200 mt-0.5">—</span>
                  <span className="font-mono text-xs text-gray-400 w-36 flex-shrink-0 leading-5">{p.period}</span>
                  {'link' in p && p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors">
                      {p.name}
                    </a>
                  ) : (
                    <span className="text-gray-600">{p.name}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span className="font-mono text-xs text-gray-400 flex-shrink-0 text-right whitespace-nowrap">
          {entry.period}
        </span>
      </div>
    </div>
  )
}

export default function Career() {
  return (
    <section id="career" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-indigo-500 tracking-[0.2em] uppercase mb-12">
          02 — CAREER & EDUCATION
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">이력</h2>
        <p className="text-gray-500 mb-12">현장에서 시스템을 만들고, 계속 배우며 검증해 왔습니다.</p>

        <div>
          {portfolio.career.map((entry) => (
            <CareerRow key={entry.company} entry={entry} />
          ))}

          {portfolio.education.map((edu) => (
            <div key={edu.school} className="border-b border-gray-100 last:border-0">
              <div className="py-6 flex items-start gap-4">
                <div className="w-5 flex-shrink-0 mt-0.5">
                  <GraduationIcon />
                </div>
                <span className="font-mono text-xs text-gray-400 w-8 flex-shrink-0 mt-0.5">학력</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{edu.school}</p>
                  <p className="text-sm text-indigo-500 mt-0.5">{edu.major}</p>
                  {edu.note && <p className="text-sm text-gray-500 mt-1">{edu.note}</p>}
                </div>
                <span className="font-mono text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
