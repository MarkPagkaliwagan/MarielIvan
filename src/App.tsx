import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbSparkles } from 'react-icons/tb'
import envelop from './assets/Envelop.png'
import bg from './assets/bg.webp'


const INTRO_PAGES = [
  {
    text: 'Every story has its beginning.',
    bg: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)',
    textColor: '#880e4f',
  },
  {
    text: 'Every chapter has its own kind of magic.',
    bg: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 50%, #9fa8da 100%)',
    textColor: '#1a237e',
  },
  {
    text: 'Every era brought us closer to forever.',
    bg: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 50%, #ba68c8 100%)',
    textColor: '#4a148c',
  },
  {
    text: 'Now, our next era begins.',
    bg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 50%, #ffcc80 100%)',
    textColor: '#e65100',
  },
]

const TYPE_SPEED = 55
const TRANSITION_DELAY = 300

function SparkleCanvas() {
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    })), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(255,215,0,${p.opacity}), rgba(255,182,193,${p.opacity * 0.8}))`,
          }}
          animate={{
            opacity: [0, p.opacity, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function FloatingDecor() {
  const items = useMemo(() => [
    { char: '✦', x: '8%', y: '12%', size: 14, delay: 0, dur: 6 },
    { char: '✿', x: '92%', y: '18%', size: 16, delay: 1, dur: 7 },
    { char: '✧', x: '5%', y: '45%', size: 12, delay: 2, dur: 5 },
    { char: '❋', x: '88%', y: '55%', size: 14, delay: 0.5, dur: 8 },
    { char: '✦', x: '12%', y: '78%', size: 10, delay: 1.5, dur: 6 },
    { char: '✿', x: '85%', y: '82%', size: 12, delay: 3, dur: 7 },
    { char: '✧', x: '15%', y: '25%', size: 8, delay: 2.5, dur: 5 },
    { char: '❋', x: '80%', y: '35%', size: 10, delay: 0.8, dur: 9 },
    { char: '✦', x: '50%', y: '5%', size: 12, delay: 1.2, dur: 6 },
    { char: '✧', x: '45%', y: '95%', size: 10, delay: 2.8, dur: 7 },
  ], [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size,
            color: 'rgba(192,132,252,0.25)',
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: item.dur,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.char}
        </motion.div>
      ))}
    </div>
  )
}

function IntroPage({ text, bg, textColor, onDone }: { text: string; bg: string; textColor: string; onDone: () => void }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, TYPE_SPEED)
    return () => clearInterval(interval)
  }, [text])

  useEffect(() => {
    if (done) {
      const t = setTimeout(onDone, TRANSITION_DELAY)
      return () => clearTimeout(t)
    }
  }, [done, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 page-glitter"
      style={{ background: bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center gap-4 max-w-2xl text-center">
        <motion.p
          className="text-xl sm:text-3xl md:text-5xl whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontStyle: 'italic',
            color: textColor,
            letterSpacing: '0.02em',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayed}
          <span className="typewriter-cursor" style={{ backgroundColor: textColor }} />
        </motion.p>
      </div>
    </motion.div>
  )
}

function MainHero() {
  return (
    <div
      className="min-h-dvh min-w-dvw relative overflow-hidden"
    >
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-6 sm:px-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          <h1
            className="text-[36px] sm:text-6xl md:text-7xl lg:text-8xl uppercase"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#4a1550', lineHeight: 1.05, letterSpacing: '0.04em' }}
          >
            Mariel Alyssa
          </h1>
          <span
            className="text-4xl sm:text-5xl md:text-6xl -my-1 sm:-my-2"
            style={{ fontFamily: "'Great Vibes', cursive", color: '#b06a9a', fontWeight: 400 }}
          >
            &
          </span>
          <h1
            className="text-[36px] sm:text-6xl md:text-7xl lg:text-8xl uppercase"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#4a1550', lineHeight: 1.05, letterSpacing: '0.04em' }}
          >
            Ivan Alexis
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

function App() {
  const [envelopeClicked, setEnvelopeClicked] = useState(false)
  const [introPage, setIntroPage] = useState(-1)
  const [showMain, setShowMain] = useState(false)

  const handleEnvelopeClick = () => {
    setEnvelopeClicked(true)
    setTimeout(() => setIntroPage(0), 700)
  }

  const handlePageDone = useCallback(() => {
    setIntroPage((prev) => {
      if (prev >= INTRO_PAGES.length - 1) {
        setShowMain(true)
        return prev
      }
      return prev + 1
    })
  }, [])

  return (
    <div
      className="min-h-dvh min-w-dvw relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 15% 30%, rgba(236,150,190,0.4) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 15%, rgba(200,130,210,0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 90%, rgba(240,170,200,0.3) 0%, transparent 55%),
          radial-gradient(ellipse at 75% 55%, rgba(220,160,210,0.25) 0%, transparent 45%),
          radial-gradient(ellipse at 30% 70%, rgba(250,180,210,0.2) 0%, transparent 40%),
          linear-gradient(155deg, #fdf2f8 0%, #f9d5e8 12%, #f0b8d8 25%, #dba8d0 35%, #d4a0d0 45%, #e0b0d8 55%, #f0c0e0 65%, #f5d0ea 75%, #fce7f3 88%, #fdf2f8 100%)
        `,
      }}
    >
      <SparkleCanvas />
      <FloatingDecor />
      {showMain && <MainHero />}

      {!showMain && (
        <AnimatePresence>
          {introPage >= 0 && introPage < INTRO_PAGES.length && (
            <IntroPage
              key={introPage}
              text={INTRO_PAGES[introPage].text}
              bg={INTRO_PAGES[introPage].bg}
              textColor={INTRO_PAGES[introPage].textColor}
              onDone={handlePageDone}
            />
          )}
        </AnimatePresence>
      )}

      {!showMain && introPage < 0 && (
        <div
          className={`min-h-dvh min-w-dvw flex items-center justify-center p-4 transition-opacity duration-700 ${envelopeClicked ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={`flex flex-col items-center gap-4 transition-opacity duration-700 ${envelopeClicked ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center gap-1">
              <motion.h1
                className="text-lg sm:text-4xl tracking-[0.1em] sm:tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#9e5783' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mariel Alyssa & Ivan Alexis
              </motion.h1>
              <motion.p
                className="text-xs sm:text-base tracking-wider italic whitespace-nowrap"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#9e5783' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                This is where our next era begins.
              </motion.p>
              <motion.p
                className="text-sm sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#9e5783' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                13 · 02 · 2027
              </motion.p>
            </div>
            <motion.img
              src={envelop}
              alt="Envelop"
              onClick={handleEnvelopeClick}
              className={`w-full max-w-[90vw] max-h-[60vh] sm:max-w-[60vw] object-contain 
                transition-all duration-500 ease-out
                hover:scale-105 hover:rotate-2
                hover:brightness-110
                hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]
                hover:drop-shadow-[0_0_60px_rgba(236,72,153,0.6)]
                hover:drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]
                cursor-pointer ${envelopeClicked ? 'scale-110 opacity-0' : ''}`}
              style={{ transitionDuration: envelopeClicked ? '700ms' : '500ms' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-sm sm:text-lg tracking-widest uppercase flex items-center gap-2 whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#7a3d63', textShadow: '0 1px 4px rgba(126,61,99,0.2)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <TbSparkles size={18} style={{ color: '#7a3d63' }} />
              Click the envelope to proceed
              <TbSparkles size={18} style={{ color: '#7a3d63' }} />
            </motion.p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
