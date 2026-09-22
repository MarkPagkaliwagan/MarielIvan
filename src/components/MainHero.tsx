import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Countdown from './Countdown'

const BURGUNDY = '#6D343D'
const MAUVE_TEXT = '#755961'
const GOLD_TEXT = '#7a5420'
const GOLD_LINE = '#B59A63'
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

function MainHero() {
  const reduce = useReducedMotion()

  const container: Variants = {
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  }

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.9, ease: EASE },
    },
  }

  const corner = {
    className: 'absolute w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-[8px] sm:text-[10px]',
    color: GOLD_TEXT,
  }

  return (
    <section className="relative w-full overflow-hidden min-h-dvh flex flex-col">
      <div className="venue-grain-overlay" />

      <div
        className="pointer-events-none absolute inset-3 sm:inset-6 rounded-[2px] border border-[#B59A63]/25"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-[10px] sm:inset-3 rounded-[2px] border border-[#B59A63]/10" />
        <span className={`${corner.className} top-0 left-0 border-t border-l border-[#B59A63]/50`} style={{ color: corner.color }}>✦</span>
        <span className={`${corner.className} top-0 right-0 border-t border-r border-[#B59A63]/50`} style={{ color: corner.color }}>✦</span>
        <span className={`${corner.className} bottom-0 left-0 border-b border-l border-[#B59A63]/50`} style={{ color: corner.color }}>✦</span>
        <span className={`${corner.className} bottom-0 right-0 border-b border-r border-[#B59A63]/50`} style={{ color: corner.color }}>✦</span>
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col px-7 sm:px-10 pt-4 pb-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: MAUVE_TEXT }}
        >
          The Beginning of Forever
        </motion.p>

        <div className="flex flex-1 flex-col items-center justify-center py-6">
          <motion.h1
            variants={item}
            className="text-[clamp(2.5rem,11vw,4.5rem)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
              lineHeight: 1.08,
              letterSpacing: '0.01em',
              textWrap: 'balance',
            }}
          >
            Mariel Alyssa
          </motion.h1>

          <motion.div
            variants={item}
            className="my-1 sm:my-2"
            style={{ fontFamily: "'Great Vibes', cursive", color: GOLD_TEXT, fontSize: 'clamp(1.6rem,6vw,2.3rem)', lineHeight: 1 }}
          >
            <span aria-hidden="true">&amp;</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[clamp(2.5rem,11vw,4.5rem)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
              lineHeight: 1.08,
              letterSpacing: '0.01em',
              textWrap: 'balance',
            }}
          >
            Ivan Alexis
          </motion.h1>

          <motion.div variants={item} className="flex items-center justify-center gap-3 mt-6 sm:mt-7" aria-hidden="true">
            <span className="section-divider-line" />
            <span className="text-[10px]" style={{ color: GOLD_LINE }}>✦</span>
            <span className="section-divider-line" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl tracking-[0.25em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: GOLD_TEXT }}
          >
            13 · 02 · 2027
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: MAUVE_TEXT }}
          >
            Lipa City, Batangas
          </motion.p>
        </div>

        <motion.div variants={item} className="mb-5 sm:mb-6">
          <Countdown />
        </motion.div>

        <motion.p
          variants={item}
          className="text-sm sm:text-base italic"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: MAUVE_TEXT }}
        >
          As We Begin Our Forever
        </motion.p>
      </motion.div>
    </section>
  )
}

export default MainHero