import { useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import rsvpPhoto from "../assets/RSVP.webp";

const BURGUNDY = "#6D343D";
const BLUSH = "#F6D4C4";
const MAUVE_DARK = "#755961";
const CHAMPAGNE = "#EAD8B2";
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const GOOGLE_SCRIPT_URL =
  (import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined)?.trim() ?? "";

type Attendance = "" | "accepts" | "declines";

const label: CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 600,
  color: MAUVE_DARK,
};

const labelClass =
  "block text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]";

const fieldClass =
  "w-full rounded-sm border border-[#EAD8B2] bg-white/55 px-3.5 py-2.5 outline-none transition-colors placeholder:text-[#A89991] focus:border-[#6D343D] focus:ring-1 focus:ring-[#6D343D]/30";

const fieldStyle: CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1rem",
  color: BURGUNDY,
};

const fieldLabel: CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 600,
  fontSize: "0.95rem",
  color: MAUVE_DARK,
};

const panelStyle: CSSProperties = {
  backgroundColor: "rgba(248, 243, 234, 0.6)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(234, 216, 178, 0.6)",
  boxShadow: "0 10px 30px rgba(33, 27, 29, 0.08)",
  borderRadius: 4,
};

function Rsvp() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [attending, setAttending] = useState<Attendance>("");
  const [guests, setGuests] = useState(1);
  const [companionName, setCompanionName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const accepting = attending === "accepts";

  const handleSubmit = async () => {
    if (!fullName.trim() || attending === "") {
      setError("Please enter your name and choose a response.");
      return;
    }

    if (submitting) {
      return;
    }

    setError("");
    setSubmitting(true);

    if (!GOOGLE_SCRIPT_URL) {
      setError("RSVP is not configured yet. Please try again later.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          attending:
            attending === "accepts"
              ? "I'll be there"
              : "I'll be there in spirit",
          guests: accepting ? guests : 0,
          companionName: accepting ? companionName.trim() : "",
          message: message.trim(),
        }),
      });

      let result: { success?: boolean; error?: string } | null = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok || !result?.success) {
        setError(
          result?.error ??
            "We could not send your RSVP. Please try again in a moment.",
        );
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "We could not reach the RSVP service. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section aria-label="RSVP" className="relative w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: BLUSH, opacity: 0.6 }}
      />

      <motion.img
        src={rsvpPhoto}
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

      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl px-5 py-6 sm:px-8 sm:py-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.2 : 0.8, ease: EASE }}
      >
        <p
          className="text-center uppercase tracking-[0.3em] sm:tracking-[0.34em]"
          style={{
            ...label,
            fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
            fontWeight: 500,
          }}
        >
          The R.S.V.P
        </p>
        <p
          className="mt-0 text-center text-[clamp(1rem,3.4vw,1.15rem)] italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: MAUVE_DARK,
          }}
        >
          Répondez s'il vous plaît
        </p>
        <p
          className="mx-auto mt-4 max-w-sm text-center text-[clamp(0.95rem,3.4vw,1.1rem)] leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: BURGUNDY,
          }}
        >
          As we begin this beautiful new chapter together, it would mean so much
          to celebrate this special day with the people dearest to our hearts.
          Kindly take a moment to complete our RSVP form. Your response will
          help us prepare with love and care.
        </p>

        <div
          className="mx-auto mt-7 w-full max-w-sm p-6 sm:p-8"
          style={panelStyle}
        >
          {submitted ? (
            <div className="text-center">
              <p
                className="text-center text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.34em]"
                style={label}
              >
                RSVP Received
              </p>
              <h2
                className="mt-4 text-center leading-none"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: BURGUNDY,
                  fontSize: "clamp(1.9rem,6vw,2.6rem)",
                  letterSpacing: "0.02em",
                }}
              >
                Thank You
              </h2>
              <p
                className="mx-auto mt-5 max-w-xs text-center text-[clamp(0.95rem,3.4vw,1.1rem)] leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  color: BURGUNDY,
                }}
              >
                Thank you for confirming your RSVP. Your response has been
                received, and we look forward to celebrating this special day
                with you.
              </p>
              <p
                className="mt-7 text-center text-[clamp(0.95rem,3.4vw,1.15rem)] uppercase tracking-[0.18em]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  color: BURGUNDY,
                }}
              >
                Mariel Alyssa &amp; Ivan Alexis
              </p>
              <p
                className="mt-3 text-center text-sm italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  color: MAUVE_DARK,
                }}
              >
                Our next era begins.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              noValidate
            >
              <div>
                <label htmlFor="full-name" className="block" style={fieldLabel}>
                  Your Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Enter your full name"
                  className={`${fieldClass} mt-2`}
                  style={fieldStyle}
                />
              </div>

              <div>
                <span className="block" style={fieldLabel}>
                  Will you be part of our next era?
                </span>
                <div className="mt-2 space-y-2.5">
                  {(
                    [
                      ["accepts", "I'll be there"],
                      ["declines", "I'll be there in spirit"],
                    ] as const
                  ).map(([value, display]) => {
                    const selected = attending === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => setAttending(value)}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-sm border px-3.5 text-left transition-colors focus:outline-none focus:ring-1 focus:ring-[#6D343D]"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: selected ? 700 : 500,
                          fontSize: "0.95rem",
                          color: BURGUNDY,
                          borderColor: selected ? BURGUNDY : CHAMPAGNE,
                          backgroundColor: selected
                            ? "rgba(248, 243, 234, 0.75)"
                            : "transparent",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                          style={{
                            borderColor: selected ? BURGUNDY : "#C4B6AE",
                          }}
                        >
                          {selected && (
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: BURGUNDY }}
                            />
                          )}
                        </span>
                        {display}
                      </button>
                    );
                  })}
                </div>
              </div>

              {accepting && (
                <div className="space-y-5">
                  <div>
                    <span className="block" style={fieldLabel}>
                      Who will be joining you for this era?
                    </span>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        color: MAUVE_DARK,
                      }}
                    >
                      Number of guests
                    </p>
                    <div
                      className="mt-2 grid grid-cols-[40px_1fr_40px] items-center gap-2 sm:max-w-[190px]"
                      aria-label="Number of guests"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setGuests((value) => Math.max(1, value - 1))
                        }
                        aria-label="Decrease number of guests"
                        className="flex h-10 w-full items-center justify-center rounded-sm border border-[#EAD8B2] text-lg transition-colors focus:outline-none focus:ring-1 focus:ring-[#6D343D]"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          color: BURGUNDY,
                        }}
                      >
                        -
                      </button>
                      <div
                        className="flex h-10 items-center justify-center text-center text-base"
                        aria-live="polite"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          color: BURGUNDY,
                        }}
                      >
                        {guests}
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setGuests((value) => Math.min(9, value + 1))
                        }
                        aria-label="Increase number of guests"
                        className="flex h-10 w-full items-center justify-center rounded-sm border border-[#EAD8B2] text-lg transition-colors focus:outline-none focus:ring-1 focus:ring-[#6D343D]"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          color: BURGUNDY,
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="companion-name"
                      className={labelClass}
                      style={fieldLabel}
                    >
                      Guest Name/s
                    </label>
                    <input
                      id="companion-name"
                      type="text"
                      value={companionName}
                      onChange={(event) => setCompanionName(event.target.value)}
                      placeholder="Enter companion name"
                      className={`${fieldClass} mt-2`}
                      style={fieldStyle}
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block" style={fieldLabel}>
                  A little note for the couple (optional)
                </label>
                <textarea
                  id="message"
                  rows={2}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Leave a message..."
                  className={`${fieldClass} mt-2 resize-none`}
                  style={fieldStyle}
                />
              </div>

              {error && (
                <p
                  className="text-center text-sm"
                  role="alert"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: "#A4373F",
                  }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mx-auto flex min-h-[44px] w-auto items-center justify-center rounded-sm px-8 uppercase tracking-[0.18em] transition-opacity focus:outline-none focus:ring-2 focus:ring-[#6D343D] focus:ring-offset-2 disabled:opacity-70 active:opacity-80"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  color: "#F8F3EA",
                  backgroundColor: BURGUNDY,
                  letterSpacing: "0.18em",
                  boxShadow: "0 6px 16px rgba(109, 52, 61, 0.25)",
                }}
              >
                {submitting ? "Sending RSVP..." : "Confirm RSVP"}
              </button>

              <p
                className="text-center text-xs"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: MAUVE_DARK,
                }}
              >
                Kindly respond by end of December.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Rsvp;
