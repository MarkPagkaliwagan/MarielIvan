import { motion, useReducedMotion, type Variants } from "framer-motion";
import BridesmaidsDetails from "./BridesmaidsDetails";
import drcTopPhoto from "../assets/DRC_Details/DRCTop.webp";
import fpssLadiesPhoto from "../assets/DRC_Details/FPSS_Ladies.webp";
import fpssGentsPhoto from "../assets/DRC_Details/FPSSE_Gents.webp";
import fgPhoto from "../assets/DRC_Details/FG_Ladies&Gents.webp";

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function DressCodeDetails() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.8, ease: EASE },
    },
  };

  return (
    <>
      <section
        aria-label="Dress code"
        className="relative w-full overflow-hidden pb-10 sm:pb-14"
      >
        <motion.img
          src={drcTopPhoto}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="block h-44 w-full object-cover sm:h-56"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduce ? 0.2 : 1,
            ease: EASE,
            delay: reduce ? 0 : 0.3,
          }}
        />
        <motion.div
          className="relative mx-auto w-full max-w-xl px-5 pt-5 sm:px-8 sm:pt-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="text-center">
            <p
              className="text-[10px] uppercase tracking-[0.35em] sm:text-[11px] sm:tracking-[0.4em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: MAUVE_DARK,
              }}
            >
              The Details
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-4 text-center leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: BURGUNDY,
              fontSize: "clamp(2rem,6.5vw,2.6rem)",
              letterSpacing: "0.02em",
            }}
          >
            Dress Code
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-md text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: MAUVE_DARK,
              textWrap: "balance",
            }}
          >
            At every table, we'll save you a seat. Join us as we celebrate our
            love story through the lens of eras: timeless, romantic, and a
            little whimsical. We invite you to dress in soft hues and elegant
            silhouettes that reflect the warmth, magic, and wonder of our
            celebration.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-center text-[clamp(0.95rem,3vw,0.95rem)] uppercase tracking-[0.22em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
            }}
          >
            Dress code: formal attire
          </motion.p>

          <motion.div variants={item} className="mt-4 text-center">
            <p
              className="text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: BURGUNDY,
              }}
            >
              For the Ladies:
            </p>
            <p
              className="mt-1.5 text-[clamp(0.8rem,3vw,0.95rem)] tracking-[0.14em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: MAUVE_DARK,
              }}
            >
              Family, Principal & Secondary Sponsors
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-md text-center text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: MAUVE_DARK,
              textWrap: "balance",
            }}
          >
            We kindly request our ninangs and family members to wear elegant
            long or midi dresses, preferably in soft and flowy fabrics such as
            chiffon, satin, or silk.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-center text-[clamp(0.7rem,3vw,0.95rem)] uppercase tracking-[0.28em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
            }}
          >
            Lilac | Lavender
          </motion.p>

          <motion.img
            src={fpssLadiesPhoto}
            alt="Suggested outfit for ninangs: an elegant long or midi dress in soft colors"
            loading="lazy"
            variants={item}
            className="mx-auto mt-3 block w-full rounded-sm"
          />

          <motion.div variants={item} className="mt-7 text-center">
            <p
              className="text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: BURGUNDY,
              }}
            >
              For the Gents:
            </p>
            <p
              className="mt-1.5 text-[clamp(0.8rem,3vw,0.95rem)] tracking-[0.14em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: MAUVE_DARK,
              }}
            >
              Family, Principal, Secondary Sponsors & Entourage
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-md text-center text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: MAUVE_DARK,
              textWrap: "balance",
            }}
          >
            We kindly request our ninongs and family members to wear a Barong
            Tagalog paired with black pants, keeping the look sharp and composed
            from the ceremony through the celebration.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-center text-[clamp(0.7rem,3vw,0.95rem)] uppercase tracking-[0.28em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
            }}
          >
            Cream | Off-White
          </motion.p>

          <motion.img
            src={fpssGentsPhoto}
            alt="Suggested outfit for the gents: a Barong Tagalog paired with black pants"
            loading="lazy"
            variants={item}
            className="mx-auto mt-3 block w-full rounded-sm"
          />
        </motion.div>
      </section>

      <BridesmaidsDetails />

      <section
        aria-label="Dress code for guests"
        className="relative w-full overflow-hidden py-6 sm:py-8"
      >
        <motion.div
          className="relative mx-auto w-full max-w-xl px-5 sm:px-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="text-center">
            <h2
              className="text-center leading-none"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: BURGUNDY,
                fontSize: "clamp(2rem,6.5vw,2.6rem)",
                letterSpacing: "0.02em",
              }}
            >
              For Our Friends and Guests
            </h2>
            <p
              className="mt-3 text-center text-[clamp(0.8rem,3vw,0.95rem)] uppercase tracking-[0.22em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: BURGUNDY,
              }}
            >
              Dress Code: Semi-Formal
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-md text-center text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: MAUVE_DARK,
              textWrap: "balance",
            }}
          >
            In honor of the bride's special day, we kindly ask our guests to
            refrain from wearing white, ivory, or bridal-inspired shades.
          </motion.p>

          <motion.div variants={item} className="mt-4 text-center">
            <p
              className="text-[clamp(0.85rem,3.2vw,1rem)] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: BURGUNDY,
              }}
            >
              Ladies
            </p>
            <p
              className="mx-auto mt-2 max-w-md text-center text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                color: MAUVE_DARK,
                textWrap: "balance",
              }}
            >
              Midi or long dresses in chiffon, satin, or tulle, cut in simple,
              soft silhouettes that move gracefully from the ceremony to the
              dance.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-4 text-center">
            <p
              className="text-[clamp(0.85rem,3.2vw,1rem)] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: BURGUNDY,
              }}
            >
              Gents
            </p>
            <p
              className="mx-auto mt-2 max-w-md text-center text-[clamp(0.95rem,3.6vw,1.08rem)] leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                color: MAUVE_DARK,
                textWrap: "balance",
              }}
            >
              Long-sleeved dress shirts in peach fuzz, champagne, or blush
              tones, paired with light-colored tailored trousers.
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 text-center text-[clamp(0.7rem,3vw,0.95rem)] uppercase tracking-[0.28em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
            }}
          >
            Peach Fuzz | Champagne Gold | Blush
          </motion.p>

          <motion.img
            src={fgPhoto}
            alt="Suggested outfits for friends and guests: ladies in chiffon, satin, or tulle dresses and gents in dress shirts with light tailored trousers"
            loading="lazy"
            variants={item}
            className="mx-auto mt-3 block w-full rounded-sm"
          />
        </motion.div>
      </section>
    </>
  );
}

export default DressCodeDetails;
