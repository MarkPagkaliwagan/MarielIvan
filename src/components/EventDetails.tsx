import { motion, useReducedMotion, type Variants } from "framer-motion";
import bothsentiPhoto from "../assets/EventDetails/bothsenti.webp";
import churchPhoto from "../assets/EventDetails/Church.webp";
import receptionPhoto from "../assets/EventDetails/1022.webp";
const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function PhotoCard({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 z-10 border border-[#B59A63]/40"
      />

      {src ? (
        <img
          src={src}
          alt={alt ?? ""}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="h-full w-full"
          style={{ background: "#EFE4D2" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function EventDetails() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.1 },
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

  const labelClass =
    "text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]";
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: MAUVE_DARK,
  };

  return (
    <section
      aria-label="Wedding day details"
      className="relative w-full overflow-hidden"
      style={{ background: "#F8F3EA" }}
    >
      <div className="venue-grain-overlay" aria-hidden="true" />

      <motion.img
        src={bothsentiPhoto}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="venue-film-photo block w-full h-52 sm:h-72 md:h-80 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduce ? 0.2 : 1,
          ease: EASE,
          delay: reduce ? 0 : 0.3,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-12 sm:gap-16">
          <motion.div
            variants={item}
            className="grid w-full grid-cols-2 items-center gap-4 sm:gap-8 md:gap-10"
          >
            <div className="w-full max-w-100 py-2 md:justify-self-end">
              <p className={labelClass} style={labelStyle}>
                The Ceremony
              </p>

              <p
                className="mt-3 text-[clamp(1.2rem,4.5vw,1.6rem)] uppercase tracking-[0.12em] sm:tracking-[0.16em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: BURGUNDY,
                  lineHeight: 1.2,
                  textWrap: "balance",
                }}
              >
                St. Therese of the Child Jesus and the Holy Face Parish Church
              </p>

              <p
                className="mt-4 text-[clamp(0.85rem,3.4vw,1.05rem)] leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  color: MAUVE_DARK,
                  textWrap: "balance",
                }}
              >
                Sto. Tomas–Lipa Rd, Brgy. Alisay, Lipa City, Batangas
              </p>
            </div>

            <PhotoCard src={churchPhoto} alt="The ceremony church" />
          </motion.div>

          <motion.div
            variants={item}
            className="grid w-full grid-cols-2 items-center gap-4 sm:gap-8 md:gap-10"
          >
            <div className="order-2 md:order-1">
              <PhotoCard src={receptionPhoto} alt="The reception venue" />
            </div>

            <div className="flex flex-col items-start text-left order-1 md:order-2 md:justify-self-start">
              <p className={labelClass} style={labelStyle}>
                Reception to follow
              </p>

              <p
                className="mt-3 text-[clamp(1.2rem,4.5vw,1.6rem)] uppercase tracking-[0.12em] sm:tracking-[0.16em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: BURGUNDY,
                  lineHeight: 1.2,
                  textWrap: "balance",
                }}
              >
                Casa 10 22 Lipa
              </p>

              <p
                className="mt-4 text-[clamp(0.85rem,3.4vw,1.05rem)] leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  color: MAUVE_DARK,
                  textWrap: "balance",
                }}
              >
                Lipa–Alaminos Road, Brgy. Lumbang, Lipa City, Batangas
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default EventDetails;
