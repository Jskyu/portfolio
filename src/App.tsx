import { motion, type Variants } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Career from './components/Career'
import Education from './components/Education'
import Contact from './components/Contact'

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
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Skills /></AnimatedSection>
      <AnimatedSection><Career /></AnimatedSection>
      <AnimatedSection><Education /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
      <footer className="py-8 text-center text-sm text-gray-400 bg-gray-50 border-t border-gray-100">
        © 2026 정성규 · Built with React + Tailwind CSS
      </footer>
    </div>
  )
}
