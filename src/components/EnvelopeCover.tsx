import { motion, useReducedMotion, type Variants } from "framer-motion";
import envelop from "../assets/Envelope.webp";
import envelopeBg from "../assets/BG/EnvelopBG.webp";

const BURGUNDY = "#6D343D";
const MAUVE = "#755961";
const GOLD_TEXT = "#7a5420";
const GOLD_LINE = "#8a6a2f";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function EnvelopeCover({
  clicked,
  onOpen,
}: {
  clicked: boolean;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.16,
        delayChildren: reduce ? 0 : 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.9, ease: EASE },
    },
  };

  const envelopeTap = reduce
    ? undefined
    : {
        scale: 1.07,
        y: -14,
        rotate: -3,
        transition: { duration: 0.6, ease: EASE },
      };

  return (
    <div
      className={`relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 pt-safe pb-safe transition-opacity duration-700 ${clicked ? "opacity-0" : "opacity-100"}`}
    >
      <img
        src={envelopeBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#261511]/8" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 40%, rgba(247,241,231,0.5) 0%, rgba(252,249,244,0.22) 55%, rgba(38,22,17,0.14) 100%)",
        }}
      />

      <motion.main
        className="relative z-10 w-full max-w-md flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="uppercase text-[clamp(0.7rem,2.8vw,0.85rem)]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: MAUVE,
            letterSpacing: "0.3em",
          }}
        >
          You Are Invited
        </motion.p>

        <motion.div
          variants={item}
          className="my-4 sm:my-5 w-14 h-px"
          aria-hidden="true"
        >
          <span
            className="block w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(181,154,99,0.6), transparent)",
            }}
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="px-3 text-[clamp(1.4rem,6.4vw,2.7rem)] italic leading-snug"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            color: BURGUNDY,
            textWrap: "balance",
          }}
        >
          Mariel Alyssa{" "}
          <span
            className="not-italic"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              color: GOLD_LINE,
            }}
          >
            &amp;
          </span>{" "}
          Ivan Alexis
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-[clamp(1.2rem,5vw,1.7rem)] leading-snug"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontWeight: 400,
            color: GOLD_TEXT,
          }}
        >
          This is where our next era begins.
        </motion.p>

        <motion.button
          type="button"
          onClick={onOpen}
          aria-label="Open the invitation"
          className="tap-target relative mt-8 sm:mt-10 flex cursor-pointer flex-col items-center gap-4 bg-transparent p-0"
          variants={item}
          animate={clicked ? envelopeTap : undefined}
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[38%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(181,154,99,0.5) 0%, rgba(247,241,231,0.35) 45%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={clicked ? { opacity: 1, scale: 1.25 } : undefined}
            transition={{ duration: 0.7, ease: EASE }}
          />
          <motion.img
            src={envelop}
            alt="Open the invitation"
            className="w-[min(82vw,340px)] h-auto object-contain"
            style={{ filter: "drop-shadow(0 18px 30px rgba(38,22,17,0.25))" }}
          />
          <motion.p
            className="text-[clamp(0.8rem,3.4vw,1rem)] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: MAUVE,
            }}
          >
            tap the envelope to open
          </motion.p>
        </motion.button>
      </motion.main>
    </div>
  );
}

export default EnvelopeCover;
