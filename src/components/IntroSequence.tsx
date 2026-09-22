import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INTRO_LINES = [
  'Every story has its beginning.',
  'Every chapter has its own kind of magic.',
  'Every era brought us closer to forever.',
  'Now, our next era begins.',
]

const TYPE_SPEED = 55
const LINE_DELAY = 600

function IntroSequence({ onDone, fading }: { onDone: () => void; fading: boolean }) {
  const [lineIdx, setLineIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'fadeOut' | 'fadeIn'>('fadeIn')
  const [allDone, setAllDone] = useState(false)

  useEffect(() => {
    if (lineIdx >= INTRO_LINES.length) {
      setAllDone(true)
      return
    }
    const text = INTRO_LINES[lineIdx]

    if (phase === 'fadeIn') {
      const t = setTimeout(() => setPhase('typing'), 400)
      return () => clearTimeout(t)
    }

    if (phase === 'typing') {
      if (displayed.length < text.length) {
        const t = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1))
        }, TYPE_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pause'), LINE_DELAY)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('fadeOut'), 400)
      return () => clearTimeout(t)
    }

    if (phase === 'fadeOut') {
      const t = setTimeout(() => {
        setLineIdx((prev) => prev + 1)
        setDisplayed('')
        setPhase('fadeIn')
      }, 500)
      return () => clearTimeout(t)
    }
  }, [lineIdx, displayed, phase])

  useEffect(() => {
    if (allDone) {
      const t = setTimeout(onDone, 800)
      return () => clearTimeout(t)
    }
  }, [allDone, onDone])

  const opacity = phase === 'fadeIn' ? 0 : phase === 'fadeOut' ? 0 : 1

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center px-6 pt-6 pb-safe"
      initial={{ opacity: 0 }}
      animate={{ opacity: fading ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          {!allDone && (
            <motion.p
              key={lineIdx}
              className="text-[clamp(1.4rem,6vw,3.75rem)] text-center"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontStyle: 'italic',
                color: '#ffffff',
                letterSpacing: '0.02em',
                textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {displayed}
              {phase === 'typing' && (
                <span className="typewriter-cursor" style={{ backgroundColor: '#ffffff' }} />
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default IntroSequence