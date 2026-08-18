import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbSparkles } from 'react-icons/tb'
import envelop from './assets/Envelop.webp'
import bg from './assets/bg.webp'
import photoIntro from './assets/PhotoIntro_opt.webp'
import chapel1 from './assets/chapel1.webp'
import reception from './assets/reception.webp'


const INTRO_PAGES = [
  {
    text: 'Every story has its beginning.',
    overlay: 'rgba(252,228,236,0.72)',
    textColor: '#ffffff',
  },
  {
    text: 'Every chapter has its own kind of magic.',
    overlay: 'rgba(232,234,246,0.78)',
    textColor: '#ffffff',
  },
  {
    text: 'Every era brought us closer to forever.',
    overlay: 'rgba(243,229,245,0.75)',
    textColor: '#ffffff',
  },
  {
    text: 'Now, our next era begins.',
    overlay: 'rgba(255,243,224,0.72)',
    textColor: '#ffffff',
  },
]

const TYPE_SPEED = 55
const TRANSITION_DELAY = 300

function SparkleCanvas() {
  const particles = useMemo(() =>
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5,
      gold: Math.random() > 0.35,
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
            background: p.gold
              ? `radial-gradient(circle, rgba(255,223,100,1), rgba(200,164,106,0.8))`
              : `radial-gradient(circle, rgba(255,255,255,1), rgba(255,200,220,0.8))`,
            boxShadow: p.gold
              ? `0 0 ${p.size * 4}px rgba(255,215,0,0.9), 0 0 ${p.size * 8}px rgba(200,164,106,0.6), 0 0 ${p.size * 14}px rgba(255,215,0,0.3)`
              : `0 0 ${p.size * 3}px rgba(255,255,255,0.8), 0 0 ${p.size * 7}px rgba(255,182,193,0.5)`,
          }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.3, p.opacity, 0],
            scale: [0, 1.3, 0.7, 1.1, 0],
            y: [0, -10, -25, -40, -55],
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
            color: 'rgba(200,164,106,0.5)',
            textShadow: '0 0 12px rgba(255,215,0,0.6), 0 0 24px rgba(200,164,106,0.3)',
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.3, 0.7, 0.3],
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

function IntroPage({ text, textColor, onDone }: { text: string; textColor: string; onDone: () => void }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center gap-4 max-w-2xl text-center">
        <motion.p
          className="text-xl sm:text-4xl md:text-6xl text-center whitespace-normal sm:whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontStyle: 'italic',
            color: textColor,
            letterSpacing: '0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)',
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

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date('2027-02-13T00:00:00').getTime()
    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, target - now)
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const labelStyle = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#a67c34', fontSize: '0.65rem', letterSpacing: '0.15em' }
  const numStyle = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#8a5a1e', textShadow: '0 0 15px rgba(200,164,106,0.2)' }

  const units = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' },
  ]

  return (
    <motion.div
      className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 w-full max-w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-1.5 sm:gap-3 md:gap-4 shrink-0">
          <div
            className="flex flex-col items-center justify-center px-2 py-1.5 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl sm:rounded-2xl border border-[#C8A46A33] bg-[#C8A46A08] backdrop-blur-sm"
            style={{ minWidth: '3rem', maxWidth: '5rem' }}
          >
            <span className="text-lg sm:text-4xl md:text-5xl leading-none" style={numStyle}>
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="text-[6px] sm:text-[10px] mt-1 uppercase leading-none" style={labelStyle}>{u.label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="text-sm sm:text-2xl shrink-0" style={{ color: '#a67c3499' }}>→</span>
          )}
        </div>
      ))}
    </motion.div>
  )
}

function MainHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 px-6">
        <motion.p
          className="text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] sm:tracking-[0.4em]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#8a5a1e', textShadow: '0 0 20px rgba(200,164,106,0.3)' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          You Are Invited
        </motion.p>
        <motion.div
          className="flex flex-col items-center mt-4 sm:mt-5 md:mt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        >
          <h1
            className="text-[38px] sm:text-6xl md:text-7xl lg:text-8xl text-center whitespace-nowrap"
            style={{ fontFamily: "'Allura', cursive", fontWeight: 400, color: '#8a5a1e', lineHeight: 1.15, textShadow: '0 0 30px rgba(200,164,106,0.2)' }}
          >
            Mariel Alyssa
          </h1>
          <span
            className="text-3xl sm:text-4xl md:text-5xl -my-1"
            style={{ fontFamily: "'Allura', cursive", color: '#a67c34', fontWeight: 400 }}
          >
            &
          </span>
          <h1
            className="text-[38px] sm:text-6xl md:text-7xl lg:text-8xl text-center whitespace-nowrap"
            style={{ fontFamily: "'Allura', cursive", fontWeight: 400, color: '#8a5a1e', lineHeight: 1.15, textShadow: '0 0 30px rgba(200,164,106,0.2)' }}
          >
            Ivan Alexis
          </h1>
        </motion.div>

        <motion.p
          className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.35em] text-center mt-5 sm:mt-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#8a5a1e', textShadow: '0 0 12px rgba(200,164,106,0.15)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          As We Begin Our Forever
        </motion.p>
      </div>
    </div>
  )
}

function CountdownSection() {
  return (
    <div className="relative w-full py-6 sm:py-8 px-4 sm:px-6 eras-satin-bg">
      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-5">
        <motion.p
          className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.35em] text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#8a5a1e' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Days Left Before We Say I Do
        </motion.p>
        <Countdown />
      </div>
    </div>
  )
}

function VenueSection() {
  return (
    <div className="venue-section relative w-full py-10 sm:py-14 md:py-20 px-5 sm:px-8 md:px-14 lg:px-20">
      <div className="venue-grain-overlay" />

      {/* Section Intro */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#a67c34' }}
          >
            ✦ Our Next Era ✦
          </span>
          <div className="venue-divider-long" />
          <p
            className="text-sm sm:text-base italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#8a7a5e', letterSpacing: '0.04em' }}
          >
            Where our forever begins.
          </p>
        </motion.div>
      </div>

      {/* Row 01 — Ceremony: Photo Left, Text Right */}
      <div className="relative max-w-5xl mx-auto flex items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
        {/* Photo — Left */}
        <motion.div
          className="venue-photo-wrapper shrink-0 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 aspect-square rounded-md overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={chapel1}
            alt="St. Therese of the Child Jesus and the Holy Face Parish Church"
            className="venue-film-photo"
          />
        </motion.div>

        {/* Text — Right */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <span
            className="w-full text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#a67c34' }}
          >
            01 · The Ceremony
          </span>
          <div className="venue-divider mb-4 sm:mb-5" />
          <h2
            className="text-xl sm:text-2xl md:text-3xl leading-snug mb-3 sm:mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#5a3e1b', letterSpacing: '0.01em' }}
          >
            St. Therese of the Child Jesus{' '}
            <span className="block mt-0.5">&amp; the Holy Face Parish Church</span>
          </h2>
          <div className="flex flex-col gap-0.5">
            <p
              className="text-[11px] sm:text-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#8a7a5e', letterSpacing: '0.03em' }}
            >
              Santo Tomas–Lipa Road
            </p>
            <p
              className="text-[11px] sm:text-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#8a7a5e', letterSpacing: '0.03em' }}
            >
              Talisay, Lipa City, Batangas
            </p>
          </div>
        </motion.div>
      </div>

      {/* Row 02 — Reception: Photo Left, Text Right */}
      <div className="relative max-w-5xl mx-auto flex items-center gap-6 sm:gap-8 md:gap-12">
        {/* Photo — Left */}
        <motion.div
          className="venue-photo-wrapper shrink-0 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 aspect-square rounded-md overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={reception}
            alt="Reception venue"
            className="venue-film-photo"
          />
        </motion.div>

        {/* Text — Right */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <span
            className="w-full text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#a67c34' }}
          >
            02 · The Reception
          </span>
          <div className="venue-divider mb-4 sm:mb-5" />
          <h2
            className="text-xl sm:text-2xl md:text-3xl leading-snug mb-3 sm:mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#5a3e1b', letterSpacing: '0.01em' }}
          >
            The Reception
            <span className="block text-base sm:text-lg md:text-xl mt-0.5 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#7a6a4e' }}>
              Lumbang, Lipa City
            </span>
          </h2>
          <div className="flex flex-col gap-0.5">
            <p
              className="text-[11px] sm:text-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#8a7a5e', letterSpacing: '0.03em' }}
            >
              Lipa–Alaminos Road
            </p>
            <p
              className="text-[11px] sm:text-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#8a7a5e', letterSpacing: '0.03em' }}
            >
              Brgy. Lumbang, Lipa City, Batangas
            </p>
            <p
              className="text-[11px] sm:text-xs italic mt-0.5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: '#a09070', letterSpacing: '0.03em' }}
            >
              Lipa City, Batangas
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ErasParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => {
      const eraColors = [
        'rgba(255,215,0,0.9)',
        'rgba(255,182,193,0.8)',
        'rgba(192,132,252,0.8)',
        'rgba(236,72,153,0.7)',
        'rgba(200,164,106,0.9)',
        'rgba(255,255,255,0.8)',
        'rgba(185,167,190,0.8)',
        'rgba(239,215,208,0.85)',
      ]
      const color = eraColors[i % eraColors.length]
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.6 + 0.4,
        color,
        drift: (Math.random() - 0.5) * 80,
      }
    }), [])

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
            background: `radial-gradient(circle, ${p.color}, transparent)`,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 8}px ${p.color}`,
          }}
          animate={{
            y: [0, -40, -80, -120, -160],
            x: [0, p.drift * 0.3, p.drift * 0.6, p.drift * 0.8, p.drift],
            opacity: [0, p.opacity, p.opacity, p.opacity * 0.4, 0],
            scale: [0.3, 1.2, 1, 0.8, 0.2],
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
      <div className="min-h-dvh w-full relative z-10 overflow-hidden">
      <div className="fixed inset-0 dreamy-bg" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ErasParticles />
      </div>
      <SparkleCanvas />
      <FloatingDecor />
      {showMain && (
        <>
          <MainHero />
          <CountdownSection />
          <VenueSection />
        </>
      )}

      {!showMain && introPage >= 0 && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${photoIntro})` }}
          />
          <div className="absolute inset-0 page-glitter" />
        </div>
      )}

      {!showMain && introPage >= 0 && (
        <AnimatePresence>
          <IntroPage
            key={introPage}
            text={INTRO_PAGES[Math.min(introPage, INTRO_PAGES.length - 1)].text}
            textColor={INTRO_PAGES[Math.min(introPage, INTRO_PAGES.length - 1)].textColor}
            onDone={handlePageDone}
          />
        </AnimatePresence>
      )}

      {!showMain && introPage < 0 && (
        <div
          className={`min-h-dvh w-full flex items-center justify-center p-4 transition-opacity duration-700 ${envelopeClicked ? 'opacity-0' : 'opacity-100'}`}
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
                className="text-lg sm:text-4xl tracking-[0.1em] sm:tracking-[0.15em] uppercase text-center whitespace-normal sm:whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#9e5783' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mariel Alyssa & Ivan Alexis
              </motion.h1>
              <motion.p
                className="text-xs sm:text-base tracking-wider italic text-center whitespace-normal sm:whitespace-nowrap"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#9e5783' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                This is where our next era begins.
              </motion.p>
              <motion.p
                className="text-sm sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-center whitespace-normal sm:whitespace-nowrap"
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
