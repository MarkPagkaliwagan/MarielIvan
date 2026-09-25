import { motion, useReducedMotion } from "framer-motion";
import ltbgPhoto from "../assets/LTBG.webp";

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const PARENT_COLUMNS = [
  {
    label: "Parents of the Groom",
    names: ["Mr. Enrico M. Dimaano", "Mrs. Agnes M. Dimaano"],
  },
  {
    label: "Parents of the Bride",
    names: ["Mr. Renner M. Dela Cruz", "Mrs. Melissa Marsha A. Dela Cruz"],
  },
];

const SPONSOR_COLUMNS = [
  {
    label: "Ninongs",
    names: [
      "Mr. John Edward Canta",
      "Mr. Joseph Orense",
      "Mr. John Michael Agustin",
      "Mr. Ryan Dela Cruz",
      "Mr. Ernesto Mendoza",
      "Mr. Noel Olan",
      "Mr. Marvin Lee Diaz",
      "Mr. Ludenario Novicio",
      "Mr. Pampilo Magsino",
    ],
  },
  {
    label: "Ninangs",
    names: [
      "Mrs. Reena Canta",
      "Mrs. Glenda Orense",
      "Ms. Hershey Sanchez",
      "Mrs. Abbeygale Nilayan",
      "Mrs. Dolores Orillaza",
      "Mrs. Lucy Mosca",
      "Mrs. Julie Diaz",
      "Mrs. Raquel Novicio",
      "Mrs. Joyce Magsino",
    ],
  },
];

const HONOR_ROLES = [
  {
    label: "Best Man",
    names: ["Vian Irix D. Dimaano"],
  },
  {
    label: "Maid of Honor",
    names: ["Krizzia D. Virtucio"],
  },
];

const SUPPORT_SPONSORS = [
  {
    label: "Candle",
    names: ["Rizalyn Ebreo", "John Patrick Ebreo"],
  },
  {
    label: "Veil",
    names: ["Shereen Grace Barachina", "Symon Martin Barachina"],
  },
  {
    label: "Cord",
    names: ["Eliza Maryse Dimaano", "Mario Dimaano Jr."],
  },
];

const SECONDARY_SPONSOR_COLUMNS = [
  {
    label: "Groomsmen",
    names: [
      "Paul Lemuel Agustin",
      "Mark Lester Dimaano",
      "Marc Lorenze Dimaano",
      "Kevin Kristoffer Evangelista",
      "Francis Anthony Eusebio",
      "Eidnar Clifford Dimaano",
      "Christian Joseph Orense",
      "Reilly Dela Cruz",
      "Ryu Ramzy Dela Cruz",
      "Ren Russty Dela Cruz",
      "Martin Joseph Orense",
    ],
  },
  {
    label: "Bridesmaid",
    names: [
      "Ma. Mikhaela Agustin",
      "Wilyn Balitaan",
      "Guilia Pauline Dimaano",
      "Aina Ciara Dimaano",
      "Micah Celine Juan",
      "Jeanah Danielle Dela Cruz",
      "Julien Chloe Dimaano",
      "Rhenee Angeline Canta",
      "Melshey Lou Bezzy Sanchez",
      "Albbey Melvhert Nilayan",
      "Anadel Clarence Alivia",
    ],
  },
];

const LITTLE_SPONSORS = [
  {
    label: "Ring Bearer",
    names: ["Calix Nathan Dimaano"],
  },
  {
    label: "Bible Bearer",
    names: ["Anthony Miguel Agustin"],
  },
  {
    label: "Coin Bearer",
    names: ["Roshan Louw Xerxes Sanchez"],
  },
  {
    label: "Flower Girls",
    names: [
      "Amelia Angelie Canta",
      "Samantha Nicole Barachina",
      "Athenna Rhyme Cadayona",
      "Selena Kurssel Xiomara Austral",
    ],
  },
];

function EntourageDetails() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Wedding entourage"
      className="relative w-full overflow-hidden"
    >
      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "#D8CCE8", opacity: 0.5 }}
        />

        <motion.img
          src={ltbgPhoto}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="relative z-10 block h-auto w-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduce ? 0.2 : 1,
            ease: EASE,
            delay: reduce ? 0 : 0.3,
          }}
        />
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-xl px-5 py-6 sm:px-8 sm:py-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.2 : 0.8, ease: EASE }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "#D8CCE8", opacity: 0.5, zIndex: -1 }}
        />

        <p
          className="text-center text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
          }}
        >
          The Entourage
        </p>

        <h2
          className="mt-4 whitespace-nowrap text-center leading-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: BURGUNDY,
            fontSize: "clamp(1.9rem,6vw,2.6rem)",
            letterSpacing: "0.02em",
          }}
        >
          Together With Their Parents
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
          {PARENT_COLUMNS.map((column) => (
            <div key={column.label} className="text-center">
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="mt-7 text-center text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
          }}
        >
          Principal Sponsors
        </p>

        <div className="mt-4 grid grid-cols-2 items-start gap-6">
          {SPONSOR_COLUMNS.map((column) => (
            <div key={column.label} className="text-center">
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 items-start gap-6">
          {HONOR_ROLES.map((column) => (
            <div key={column.label} className="text-center">
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 items-start gap-6">
          {SUPPORT_SPONSORS.slice(0, 2).map((column) => (
            <div key={column.label} className="text-center">
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center">
          {SUPPORT_SPONSORS.slice(2, 3).map((column) => (
            <div key={column.label}>
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="mt-7 text-center text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
          }}
        >
          Secondary Sponsors
        </p>

        <div className="mt-4 grid grid-cols-2 items-start gap-6">
          {SECONDARY_SPONSOR_COLUMNS.map((column) => (
            <div key={column.label} className="text-center">
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="mt-7 text-center text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: BURGUNDY,
          }}
        >
          Little Sponsors
        </p>

        <div className="mt-4 grid grid-cols-2 items-start gap-6">
          <div className="space-y-7">
            {LITTLE_SPONSORS.slice(0, 2).map((column) => (
              <div key={column.label} className="text-center">
                <p
                  className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: MAUVE_DARK,
                  }}
                >
                  {column.label}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {column.names.map((name) => (
                    <li
                      key={name}
                      className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        color: BURGUNDY,
                      }}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            {LITTLE_SPONSORS.slice(3, 4).map((column) => (
              <div key={column.label} className="text-center">
                <p
                  className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: MAUVE_DARK,
                  }}
                >
                  {column.label}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {column.names.map((name) => (
                    <li
                      key={name}
                      className="whitespace-nowrap text-[clamp(0.8rem,3vw,0.95rem)] leading-snug"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        color: BURGUNDY,
                      }}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 text-center">
          {LITTLE_SPONSORS.slice(2, 3).map((column) => (
            <div key={column.label}>
              <p
                className="text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.names.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap text-[clamp(0.9rem,3.4vw,1.05rem)] leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      color: BURGUNDY,
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default EntourageDetails;
