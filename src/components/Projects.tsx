import { useState } from 'react'
import { portfolio } from '../data/portfolio'

type Project = (typeof portfolio.projects)[number]

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-gray-100 pt-6">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left group"
      >
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="font-mono text-xs text-indigo-400 tracking-widest">{project.label}</span>
          <span className="text-gray-200">·</span>
          <span className="font-mono text-xs text-gray-400">{project.period}</span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400">{project.company}</span>
          <span className="ml-auto text-gray-300 text-sm">{open ? '▲' : '▼'}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
          {project.link ? (
            <span>
              {project.title} <span className="text-indigo-400 text-base">↗</span>
            </span>
          ) : project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{project.summary}</p>
      </button>

      {/* Tags — always visible */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs px-2.5 py-1 border border-gray-200 rounded text-gray-500">
            {tag}
          </span>
        ))}
      </div>

      {/* Expanded content */}
      {open && (
        <div className="mt-8 space-y-8">
          {/* Problem */}
          <div>
            <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">▸ PROBLEM</p>
            <p className="text-gray-600 leading-relaxed">{project.problem}</p>
          </div>

          {/* Architecture */}
          <div>
            <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">▸ ARCHITECTURE</p>
            <p className="text-gray-600 leading-relaxed mb-4">{project.architectureDesc}</p>
            {project.architecture && (
              <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                <img
                  src={`${import.meta.env.BASE_URL}${project.architecture}`}
                  alt={`${project.title} 아키텍처`}
                  className="w-full object-contain max-h-96 p-4"
                />
              </div>
            )}
          </div>

          {/* Why this stack */}
          {project.whyThisStack.length > 0 && (
            <div>
              <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">▸ WHY THIS STACK</p>
              <ul className="space-y-2">
                {project.whyThisStack.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-indigo-400 flex-shrink-0 mt-0.5">›</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deployments */}
          {project.deployments.length > 0 && (
            <div>
              <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">▸ DEPLOYMENTS</p>
              <div className="flex flex-wrap gap-2">
                {project.deployments.map((d) => (
                  <span key={d} className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Inline trouble-shooting */}
          <div>
            <p className="font-mono text-xs text-gray-400 tracking-widest mb-4">▸ TROUBLE-SHOOTING</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs text-gray-300 tracking-widest mb-2">문제</p>
                <p className="text-sm text-gray-600 leading-relaxed">{project.troubleshoot.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-300 tracking-widest mb-2">해결</p>
                <p className="text-sm text-gray-600 leading-relaxed">{project.troubleshoot.solution}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-300 tracking-widest mb-2">결과</p>
                <p className="text-sm text-indigo-500 font-medium leading-relaxed">{project.troubleshoot.result}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <p className="font-mono text-xs text-gray-400 tracking-widest mb-4">▸ RESULTS</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {project.results.map((r) => (
                <div key={r.label}>
                  <p className="text-2xl font-extrabold text-gray-900">{r.value}</p>
                  <p className="font-mono text-xs text-gray-400 mt-1">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* External link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-indigo-500 hover:text-indigo-700 font-mono transition-colors"
            >
              {project.link.replace('https://', '')} ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-indigo-500 tracking-[0.2em] uppercase mb-12">
          04 — PROJECTS
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">케이스 스터디</h2>
        <p className="text-gray-500 mb-16">
          문제 → 아키텍처 → 의사결정 → 트러블슈팅 → 정량 결과 순으로 정리했습니다.
        </p>

        <div className="space-y-10">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
