import { portfolio } from '../data/portfolio'

export default function Troubleshooting() {
  return (
    <section id="troubleshooting" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-indigo-500 tracking-[0.2em] uppercase mb-12">
          05 — TROUBLE-SHOOTING
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">문제를 줄인 결정들</h2>
        <p className="text-gray-500 mb-16">
          프로젝트를 통해 마주한 기술 문제와, 판단을 내린 과정을 기록합니다.
        </p>

        <div>
          {portfolio.troubleshooting.map((item, idx) => (
            <div
              key={item.num}
              className={`py-10 ${idx < portfolio.troubleshooting.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-mono text-xs text-gray-300 pt-1 flex-shrink-0">{item.num}</span>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>

              <div className="ml-8 grid md:grid-cols-3 gap-8">
                <div>
                  <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">문제</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">해결</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">결과</p>
                  <p className="text-sm text-indigo-500 font-medium leading-relaxed">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
