import { motion, useReducedMotion } from "framer-motion";
import rmPhoto from "../assets/RM.webp";

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function GentleReminders() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Gentle reminders"
      className="relative w-full overflow-hidden"
    >
      <motion.img
        src={rmPhoto}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="block h-auto w-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduce ? 0.2 : 1,
          ease: EASE,
          delay: reduce ? 0 : 0.3,
        }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-xl px-5 py-6 sm:px-8 sm:py-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.2 : 0.8, ease: EASE }}
      >
        <h2
          className="text-center leading-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: BURGUNDY,
            fontSize: "clamp(1.9rem,6vw,2.6rem)",
            letterSpacing: "0.02em",
          }}
        >
          Gentle Reminders
        </h2>

        <p
          className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: MAUVE_DARK,
          }}
        >
          Wedding Gift Note
        </p>

        <p
          className="mt-4 text-center text-[clamp(0.95rem,3.4vw,1.1rem)] leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: BURGUNDY,
          }}
        >
          Your presence at our wedding is already more than enough. But if
          you'd like to help us begin our next era together, a monetary gift
          would be deeply appreciated.
        </p>
      </motion.div>
    </section>
  );
}

export default GentleReminders;