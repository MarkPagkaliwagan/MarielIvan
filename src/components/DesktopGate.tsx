import { useEffect, useState } from 'react'
import { TbDeviceMobile } from 'react-icons/tb'

const BURGUNDY = '#6D343D'
const MAUVE = '#7a5f66'
const GOLD = '#8a6a2f'
const GOLD_TEXT = '#7a5420'

function DesktopGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (pointer: fine)')
    const update = () => setShow(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (!show) return null

  return (
    <div className="min-h-dvh w-full flex items-center justify-center px-6 pt-safe pb-safe">
      <div className="flex flex-col items-center text-center max-w-md">
        <div aria-hidden="true" className="flex items-center justify-center w-16 h-16 rounded-full border border-[#B59A63]/40 bg-[#C8A46A08]">
          <TbDeviceMobile size={28} style={{ color: GOLD }} />
        </div>
        <div className="mt-6 text-[clamp(0.7rem,2vw,1rem)] tracking-[0.35em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: BURGUNDY }}>
          Mariel Alyssa &amp; Ivan Alexis
        </div>
        <div className="my-4 w-14 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(181,154,99,0.55), transparent)' }} aria-hidden="true" />
        <h1 className="text-[clamp(1.1rem,4vw,1.9rem)] leading-snug" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: BURGUNDY, textWrap: 'balance' }}>
          Please open this invitation on your mobile phone.
        </h1>
        <p className="mt-3 text-sm sm:text-base italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: MAUVE }}>
          This invitation is made for the palm of your hand, so view it on your phone for the full experience.
        </p>
        <p className="mt-6 text-sm tracking-[0.25em]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: GOLD_TEXT }}>
          13 · 02 · 2027
        </p>
      </div>
    </div>
  )
}

export default DesktopGate