import { useState } from 'react'
import { portfolio } from '../data/portfolio'

type CareerEntry = (typeof portfolio.career)[number]

interface Props {
  entry: CareerEntry
  isLast: boolean
}

export default function CareerItem({ entry, isLast }: Props) {
  const [open, setOpen] = useState(false)
  const hasProjects = entry.projects.length > 0

  return (
    <div className="relative flex gap-6">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100 mt-1.5 flex-shrink-0" />
        {!isLast && <div className="w-0.5 bg-indigo-100 flex-1 mt-1" />}
      </div>

      {/* Card */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-10'}`}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{entry.company}</h3>
              <p className="text-sm text-gray-500">{entry.department}</p>
            </div>
            <div className="md:text-right flex-shrink-0">
              <span className="text-sm font-semibold text-indigo-600">{entry.role}</span>
              <p className="text-xs text-gray-400 mt-0.5">
                {entry.period} · {entry.duration}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">{entry.description}</p>

          {hasProjects && (
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              <span className="text-xs">{open ? '▲' : '▼'}</span>
              <span>{open ? '프로젝트 접기' : `프로젝트 ${entry.projects.length}개 보기`}</span>
            </button>
          )}

          {open && hasProjects && (
            <ul className="mt-4 border-t border-gray-100 pt-4 space-y-2">
              {entry.projects.map((project) => (
                <li key={project.name} className="flex items-start gap-2 text-sm">
                  <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-gray-400 text-xs w-36 flex-shrink-0 leading-5">
                    {project.period}
                  </span>
                  {'link' in project && project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span className="text-gray-700">{project.name}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
