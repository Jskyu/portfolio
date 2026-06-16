import { motion, type Variants } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Troubleshooting from './components/Troubleshooting'
import Contact from './components/Contact'
import Resume from './components/Resume'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="print:hidden">
        <Navbar />
        <Hero />
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Career /></AnimatedSection>
        <AnimatedSection><Skills /></AnimatedSection>
        <AnimatedSection><Projects /></AnimatedSection>
        <AnimatedSection><Troubleshooting /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
        <footer className="py-8 text-center font-mono text-xs text-gray-300 bg-white border-t border-gray-100">
          © 2026 정성규 · Built with React + Tailwind CSS
        </footer>
      </div>
      <Resume />
    </div>
  )
}
