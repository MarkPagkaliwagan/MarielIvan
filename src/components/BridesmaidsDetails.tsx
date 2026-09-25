import { motion, useReducedMotion } from "framer-motion";

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const BLUSH = "#F6D4C4";
const PEACH = "#F5C9A8";
const CHAMPAGNE_GOLD = "#EAD8B2";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const ERAS = [
  { name: "Very First", color: "#76A9A0" },
  { name: "Fearless", color: "#C9A64A" },
  { name: "Speak Now", color: "#8B7DCB" },
  { name: "Red", color: "#A51C30" },
  { name: "1989", color: "#88B2CC" },
  { name: "Reputation", color: "#2B2B2B" },
  { name: "Lover", color: "#F2A0B6" },
  { name: "Folklore", color: "#A8A49B" },
  { name: "Evermore", color: "#B08D6A" },
  { name: "Midnights", color: "#24305E" },
  { name: "The Tortured Poets Department", color: "#D8D5CD" },
];

function BridesmaidsDetails() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.2 : 0.8, ease: EASE }}
    >
      <div className="relative w-full overflow-hidden px-5 py-6 sm:px-8 sm:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.8,
            background: `linear-gradient(180deg, ${BLUSH} 0%, ${PEACH} 48%, ${CHAMPAGNE_GOLD} 100%)`,
          }}
        />
        <div className="venue-grain-overlay" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <p
            className="whitespace-nowrap text-[clamp(0.72rem,3vw,1rem)] uppercase tracking-[0.12em] sm:tracking-[0.18em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
            }}
          >
            For the Bridesmaids and Maid of Honor
          </p>

          <p
            className="mt-2 text-[clamp(0.8rem,3vw,0.95rem)] tracking-[0.16em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              color: MAUVE_DARK,
            }}
          >
            + Theme: Eras in Satin Silk +
          </p>

          <p
            className="mx-auto mt-4 max-w-md text-center text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: MAUVE_DARK,
              textWrap: "balance",
            }}
          >
Our bridesmaids will each carry a different era, a story told through
          color. Every gown draws from a single album, so together they walk
          through all of our Eras in order.
        </p>

          <ul
            className="mx-auto mt-6 flex max-w-xl flex-nowrap items-center justify-center gap-2.5"
            aria-label="The wedding eras each bridesmaid represents, in order: Very First Era, Fearless, Speak Now, Red, 1989, Reputation, Lover, Folklore, Evermore, Midnights, and The Tortured Poets Department"
          >
            {ERAS.map((era) => (
              <li key={era.name} title={era.name}>
                <span
                  aria-hidden="true"
                  className="block h-4 w-4 rounded-full sm:h-5 sm:w-5"
                  style={{
                    background: era.color,
                    boxShadow: "inset 0 0 0 1px rgba(109,52,61,0.35)",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default BridesmaidsDetails;
