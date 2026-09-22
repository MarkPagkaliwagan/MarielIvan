import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2027-02-13T00:00:00')

const BURGUNDY = '#6D343D'
const MAUVE_DARK = '#755961'
const GOLD = '#8a6a2f'

interface CountdownUnit {
  label: string
  value: number
}

function getUnits(): CountdownUnit[] {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]
}

function pad(value: number) {
  return value.toString().padStart(2, '0')
}

function Countdown() {
  const [units, setUnits] = useState<CountdownUnit[]>(() => getUnits())

  useEffect(() => {
    const id = window.setInterval(() => setUnits(getUnits()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div>
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em]"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: MAUVE_DARK }}
      >
        The Day We Say I Do
      </p>
      <p className="sr-only">
        The countdown to the wedding is {units[0].value} days, {units[1].value} hours, {units[2].value} minutes,
        and {units[3].value} seconds.
      </p>
      <div className="mt-4 flex items-start justify-center">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-start justify-center" role="group" aria-label={unit.label}>
            {i > 0 && (
              <span
                className="mx-2 sm:mx-3 mt-1.5 text-[8px] sm:text-[9px]"
                style={{ color: GOLD }}
                aria-hidden="true"
              >
                ✦
              </span>
            )}
            <div className="w-[52px] sm:w-[64px]">
              <div
                className="text-[clamp(1.3rem,6vw,1.9rem)]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  color: BURGUNDY,
                  fontVariantNumeric: 'tabular-nums',
                  lineHeight: 1.1,
                }}
              >
                {unit.label === 'Days' ? unit.value.toString() : pad(unit.value)}
              </div>
              <div
                className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.22em]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: MAUVE_DARK }}
              >
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown