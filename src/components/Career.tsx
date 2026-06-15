import { portfolio } from '../data/portfolio'
import CareerItem from './CareerItem'

export default function Career() {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Career</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />

        <div>
          {portfolio.career.map((entry, i) => (
            <CareerItem
              key={entry.company}
              entry={entry}
              isLast={i === portfolio.career.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
