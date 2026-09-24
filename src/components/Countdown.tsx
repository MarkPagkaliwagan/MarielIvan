import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2027-02-13T00:00:00");

const BURGUNDY = "#6D343D";
const MAUVE_DARK = "#755961";

interface CountdownUnit {
  label: string;
  value: number;
}

function getUnits(): CountdownUnit[] {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function Countdown() {
  const [units, setUnits] = useState<CountdownUnit[]>(() => getUnits());

  useEffect(() => {
    const id = window.setInterval(() => {
      setUnits(getUnits());
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex w-full justify-center px-2 py-4 text-center sm:px-4 sm:py-6">
      <div className="w-full max-w-3xl">
        <p
          className="text-[12px] uppercase tracking-[0.26em] sm:text-[14px] sm:tracking-[0.3em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: MAUVE_DARK,
          }}
        >
          Days Before we Say &ldquo;I Do&rdquo;
        </p>

        <p className="sr-only">
          The countdown to the wedding is {units[0].value} days,{" "}
          {units[1].value} hours, {units[2].value} minutes, and {units[3].value}{" "}
          seconds.
        </p>

        <div className="mt-5 flex items-start justify-center">
          {units.map((unit, i) => (
            <div
              key={unit.label}
              className="flex items-start justify-center"
              role="group"
              aria-label={unit.label}
            >
              <div className="flex min-w-0 flex-col items-center">
                <div
                  className="text-[clamp(2rem,9.5vw,3.4rem)]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: BURGUNDY,
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 0.95,
                  }}
                >
                  {unit.label === "Days" ? unit.value : pad(unit.value)}
                </div>

                <div
                  className="mt-2 text-[9px] uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.24em]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: MAUVE_DARK,
                  }}
                >
                  {unit.label}
                </div>
              </div>

              {i < units.length - 1 && (
                <span
                  className="mx-1.5 mt-1 text-[clamp(1.6rem,6vw,2.4rem)] leading-none opacity-60 sm:mx-2.5 sm:mt-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: MAUVE_DARK,
                  }}
                  aria-hidden="true"
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countdown;
