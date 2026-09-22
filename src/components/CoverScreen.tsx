import { motion } from 'framer-motion'
import { TbSparkles } from 'react-icons/tb'
import envelop from '../assets/Envelop.webp'
import bg from '../assets/bg.webp'

function CoverScreen({ clicked, onOpen }: { clicked: boolean; onOpen: () => void }) {
  return (
    <div
      className={`min-h-dvh w-full flex items-center justify-center px-4 pt-safe pb-safe transition-opacity duration-700 ${clicked ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={`flex flex-col items-center gap-4 transition-opacity duration-700 ${clicked ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center gap-1">
          <motion.h1
            className="text-[clamp(1.15rem,5vw,2.5rem)] tracking-[0.12em] uppercase text-center"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#6D343D' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mariel Alyssa &amp; Ivan Alexis
          </motion.h1>
          <motion.p
            className="text-[clamp(0.75rem,3vw,1rem)] tracking-wider italic text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#7a5f66' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            This is where our next era begins.
          </motion.p>
          <motion.p
            className="text-[clamp(0.85rem,4vw,1.75rem)] tracking-[0.2em] text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#6D343D' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            13 · 02 · 2027
          </motion.p>
        </div>
        <motion.button
          type="button"
          onClick={onOpen}
          aria-label="Open the invitation"
          className="flex flex-col items-center gap-4 bg-transparent border-none cursor-pointer tap-target p-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={envelop}
            alt="Open the invitation"
            className="w-full max-w-[min(80vw,280px)] h-auto object-contain
              transition-transform duration-500 ease-out
              hover:scale-[1.04] hover:rotate-2"
            style={{ transitionDuration: clicked ? '700ms' : '500ms' }}
            animate={{ scale: clicked ? 1.1 : 1 }}
          />
          <motion.p
            className="text-[clamp(0.7rem,3vw,0.95rem)] tracking-widest uppercase flex items-center justify-center gap-2 flex-wrap text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#7a5f66' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TbSparkles size={16} style={{ color: '#8a6a2f' }} aria-hidden="true" />
            Click the envelope to proceed
            <TbSparkles size={16} style={{ color: '#8a6a2f' }} aria-hidden="true" />
          </motion.p>
        </motion.button>
      </div>
    </div>
  )
}

export default CoverScreen