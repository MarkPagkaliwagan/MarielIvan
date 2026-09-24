import { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import calendarPhoto from "../assets/Forcalendar.webp";

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";
const IVORY = "#F8F3EA";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TARGET = new Date("2027-02-13T00:00:00");
const TARGET_YEAR = TARGET.getFullYear();
const TARGET_MONTH = TARGET.getMonth();
const TARGET_DAY = TARGET.getDate();

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function buildCalendarCells(year: number, month: number): number[] {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: number[] = [];

  for (let i = 0; i < firstWeekday; i += 1) {
    cells.push(0);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push(d);
  }
  while (cells.length % 7 !== 0) {
    cells.push(0);
  }

  return cells;
}

function WeddingCalendar() {
  const reduce = useReducedMotion();

  const cells = useMemo(
    () => buildCalendarCells(TARGET_YEAR, TARGET_MONTH),
    [],
  );
  const weeks = useMemo(() => {
    const rows: number[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }
    return rows;
  }, [cells]);

  const reveal: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.9, ease: EASE },
    },
  };

  return (
    <section className="calendar-band relative w-full overflow-hidden py-6 sm:py-10">
      <div className="venue-grain-overlay" aria-hidden="true" />
      <div
        className="calendar-stardust pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-2 items-center gap-4 px-5 sm:px-8 md:gap-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduce ? 0 : 0.14,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <motion.div
          variants={reveal}
          className="w-full max-w-[400px] py-2 md:justify-self-end"
        >
          <h3
            className="text-center text-[clamp(0.95rem,3.2vw,1.4rem)] uppercase tracking-[0.14em] sm:tracking-[0.22em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: BURGUNDY,
            }}
          >
            {MONTH_LABELS[TARGET_MONTH]} {TARGET_YEAR}
          </h3>

          <p
            className="mt-2 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="section-divider-line" />
          </p>

          <div className="mx-auto mt-3 grid w-fit grid-cols-7 gap-0.5 pb-2 sm:gap-1">
            {WEEKDAY_LABELS.map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="flex h-6 w-5 items-center justify-center text-[8px] uppercase tracking-[0.1em] sm:w-8 sm:text-[9px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: MAUVE_DARK,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <table className="mx-auto w-fit border-collapse">
            <caption className="sr-only">
              {MONTH_LABELS[TARGET_MONTH]} {TARGET_YEAR} calendar, wedding day
              highlighted on {TARGET_YEAR}-
              {String(TARGET_MONTH + 1).padStart(2, "0")}-
              {String(TARGET_DAY).padStart(2, "0")}.
            </caption>
            <tbody>
              {weeks.map((week, wi) => (
                <tr key={wi}>
                  {week.map((day, di) => {
                    const isWeddingDay = day === TARGET_DAY;
                    const isWeekend = di === 0 || di === 6;

                    return (
                      <td key={di} className="p-0 sm:p-1">
                        {day === 0 ? (
                          <span
                            className="flex h-7 w-5 items-center justify-center sm:h-9 sm:w-8"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className={`flex h-7 w-5 items-center justify-center sm:h-9 sm:w-8 ${
                              isWeddingDay ? "rounded-full" : ""
                            }`}
                            style={
                              isWeddingDay
                                ? {
                                    background: BURGUNDY,
                                    color: IVORY,
                                    boxShadow: "0 0 0 1px rgba(181,154,99,0.6)",
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontWeight: 600,
                                  }
                                : {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontWeight: isWeekend ? 400 : 500,
                                    color: isWeekend ? "#A0858B" : MAUVE_DARK,
                                  }
                            }
                          >
                            {day}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          variants={reveal}
          className="relative h-64 w-full overflow-hidden sm:h-80 md:h-[440px]"
        >
          <div
            aria-hidden="true"
            className="animate-[none] pointer-events-none absolute inset-3 z-10 border border-[#B59A63]/40"
          />

          <motion.img
            src={calendarPhoto}
            alt="Mariel and Ivan"
            loading="lazy"
            className="venue-film-photo h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduce ? 0.2 : 1,
              ease: EASE,
              delay: reduce ? 0 : 0.35,
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F4ECDC]/70 via-transparent to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WeddingCalendar;
