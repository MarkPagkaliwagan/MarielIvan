import { motion, useReducedMotion, type Variants } from "framer-motion";

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const ANTIQUE_GOLD = "#8A6A2F";
const BLUSH = "#F6D4C4";
const PEACH = "#F5C9A8";
const CHAMPAGNE_GOLD = "#EAD8B2";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const STROKE = { stroke: ANTIQUE_GOLD, strokeWidth: 1.5, fill: "none" };
const ICON_PROPS = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

interface TimelineItem {
  time: string;
  name: string;
  icon: "rings" | "camera" | "cake" | "disco";
}

// Sample schedule; replace times and events with the final one.
const MONO =
  "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

const TIMELINE: TimelineItem[] = [
  { time: "12:00 PM", name: "Ceremony", icon: "rings" },
  { time: "1:00 PM", name: "Photo Session", icon: "camera" },
  { time: "2:00 PM", name: "Reception & Lunch", icon: "cake" },
  { time: "4:00 PM", name: "After Party", icon: "disco" },
];

function RingsIcon() {
  return (
    <svg {...ICON_PROPS} {...STROKE} strokeLinecap="round">
      <circle cx="19" cy="24" r="9.5" />
      <circle cx="29" cy="24" r="9.5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      {...ICON_PROPS}
      {...STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="17" width="30" height="19" rx="2.5" />
      <rect x="19" y="12" width="10" height="6" rx="1.5" />
      <circle cx="24" cy="26.5" r="6" />
      <circle cx="24" cy="26.5" r="1.6" />
      <circle cx="33" cy="20" r="1.2" />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg
      {...ICON_PROPS}
      {...STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="12.5" y="30" width="23" height="13" rx="1" />
      <rect x="17" y="20" width="14" height="11" rx="1" />
      <path d="M24 10v10" />
      <circle cx="24" cy="7.5" r="1.4" />
      <circle cx="18" cy="35" r="0.8" />
      <circle cx="30" cy="35" r="0.8" />
    </svg>
  );
}

function DiscoIcon() {
  return (
    <svg {...ICON_PROPS} {...STROKE} strokeLinecap="round">
      <path d="M19.5 4h9" />
      <path d="M24 4v13" />
      <circle cx="24" cy="28" r="11" />
      <path d="M18 22l6 2 6-2" />
      <path d="M17.5 26l6.5 1 6.5-1" />
      <path d="M19 30l5 1.8 5-1.8" />
    </svg>
  );
}

const ICONS: Record<TimelineItem["icon"], () => React.ReactElement> = {
  rings: RingsIcon,
  camera: CameraIcon,
  cake: CakeIcon,
  disco: DiscoIcon,
};

function WeddingTimeline() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.9, ease: EASE },
    },
  };

  const labelClass =
    "text-[10px] uppercase tracking-[0.4em] sm:text-[11px] sm:tracking-[0.45em]";

  return (
    <section
      aria-label="Wedding day schedule"
      className="relative w-full overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${BLUSH} 0%, ${PEACH} 48%, ${CHAMPAGNE_GOLD} 100%)`,
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="venue-grain-overlay" aria-hidden="true" />
      <div
        className="calendar-stardust pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 sm:h-96"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 0%, rgba(255,250,242,0.5), transparent 72%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl px-6 py-6 sm:px-8 sm:py-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          variants={item}
          className="text-center leading-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: BURGUNDY,
            fontSize: "clamp(2rem,6.5vw,2.7rem)",
            letterSpacing: "0.02em",
          }}
        >
          Wedding Day
        </motion.h2>

        <motion.p
          variants={item}
          className={`mt-2 text-center ${labelClass}`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: MAUVE_DARK,
          }}
        >
          Timeline
        </motion.p>

        <ul className="mt-5 flex w-full items-start justify-between gap-1.5 sm:mt-10 sm:gap-3">
          {TIMELINE.map((event) => {
            const Icon = ICONS[event.icon];

            return (
              <motion.li
                key={event.name}
                variants={item}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <span
                  className="h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                  aria-hidden="true"
                >
                  <Icon />
                </span>

                <span
                  className="mt-3 text-[0.7rem] tabular-nums sm:text-[clamp(0.75rem,1.7vw,0.95rem)]"
                  style={{
                    fontFamily: MONO,
                    fontWeight: 500,
                    color: BURGUNDY,
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "0.01em",
                  }}
                >
                  {event.time}
                </span>

                <span
                  className="text-[8px] uppercase leading-[1.1] sm:text-[10px] lg:text-[12px]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: MAUVE_DARK,
                    letterSpacing: "0.06em",
                  }}
                >
                  {event.name}
                </span>
              </motion.li>
            );
          })}
        </ul>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-xl text-center"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: BURGUNDY,
            fontSize: "clamp(1.05rem,3.4vw,1.35rem)",
            lineHeight: 1.7,
            textWrap: "balance",
          }}
        >
          Every moment of the day is something we&rsquo;ve been dreaming of, and
          we&rsquo;re grateful that you will be experiencing it with us.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default WeddingTimeline;
