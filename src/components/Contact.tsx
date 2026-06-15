import { portfolio } from '../data/portfolio'

const CONTACTS = [
  {
    label: 'Email',
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/Jskyu',
    href: portfolio.github,
    icon: '🐙',
  },
  {
    label: 'Phone',
    value: portfolio.phone,
    href: `tel:${portfolio.phone.replace(/\s/g, '')}`,
    icon: '📱',
  },
] as const

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Contact</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-10 rounded" />

        <div className="grid sm:grid-cols-3 gap-4">
          {CONTACTS.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 bg-indigo-50 hover:bg-indigo-100 transition-colors rounded-xl p-5"
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-gray-700 text-sm font-medium group-hover:text-indigo-700 transition-colors break-all">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
