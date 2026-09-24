import { motion, useReducedMotion, type Variants } from "framer-motion";
import heroPhoto from "../assets/Invitationhero.webp";
import Countdown from "./Countdown";
import WeddingCalendar from "./WeddingCalendar";

const BURGUNDY = "#6D343D";
const MAUVE_TEXT = "#755961";
const GOLD_TEXT = "#7a5420";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function InvitationHero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.9, ease: EASE },
    },
  };

  return (
    <section className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden">
      <div className="venue-grain-overlay" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col px-6 sm:px-8 pt-7 sm:pt-9 pb-3 sm:pb-4 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mt-1 text-[clamp(0.95rem,4vw,1.35rem)] italic leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: MAUVE_TEXT,
            textWrap: "balance",
          }}
        >
          I don&rsquo;t know how it gets better than this....
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 text-[clamp(0.62rem,2.6vw,0.85rem)] uppercase tracking-[0.3em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
          }}
        >
          Together with their families
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 sm:mt-5 text-[clamp(2.5rem,11.5vw,5rem)] leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
            lineHeight: 1.05,
            letterSpacing: "0.01em",
            textWrap: "balance",
          }}
        >
          Mariel Alyssa
        </motion.h1>

        <motion.div
          variants={item}
          className="my-1"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: GOLD_TEXT,
            fontSize: "clamp(1.6rem,5.5vw,2.4rem)",
            lineHeight: 1,
          }}
        >
          <span aria-hidden="true">and</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-[clamp(2.5rem,11.5vw,5rem)] leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
            lineHeight: 1.05,
            letterSpacing: "0.01em",
            textWrap: "balance",
          }}
        >
          Ivan Alexis
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-4 sm:mt-5 max-w-lg text-[clamp(0.95rem,4vw,1.3rem)] italic leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: MAUVE_TEXT,
            textWrap: "balance",
          }}
        >
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              color: GOLD_TEXT,
              fontSize: "1.35em",
              fontStyle: "normal",
            }}
          >
            This Love Is Ours.
          </span>{" "}
          Every love story has its chapters. this is where our next era begins.
        </motion.p>
      </motion.div>

      <motion.img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="venue-film-photo block w-full h-52 sm:h-72 md:h-80 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduce ? 0.2 : 1,
          ease: EASE,
          delay: reduce ? 0 : 0.4,
        }}
      />

      <Countdown />
      <WeddingCalendar />
    </section>
  );
}

export default InvitationHero;
