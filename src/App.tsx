import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import CoverScreen from './components/CoverScreen'
import PhotoIntro from './components/PhotoIntro'
import MainStage from './components/MainStage'
import IntroSequence from './components/IntroSequence'
import DesktopGate from './components/DesktopGate'

function App() {
  const [envelopeClicked, setEnvelopeClicked] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [showMain, setShowMain] = useState(false)
  const [introFading, setIntroFading] = useState(false)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (pointer: fine)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const handleEnvelopeClick = () => {
    setEnvelopeClicked(true)
    setTimeout(() => setShowIntro(true), 700)
  }

  const handleIntroDone = useCallback(() => {
    setIntroFading(true)
    setTimeout(() => {
      setShowMain(true)
      setTimeout(() => setShowIntro(false), 800)
    }, 500)
  }, [])

  if (isDesktop === null) {
    return (
      <div className="min-h-dvh w-full relative overflow-hidden">
        <div className="fixed inset-0 dreamy-bg" />
      </div>
    )
  }

  return (
    <div className="min-h-dvh w-full relative z-10 overflow-hidden">
      <div className="fixed inset-0 dreamy-bg" />
      {isDesktop ? (
        <DesktopGate />
      ) : (
        <>
          {showMain && <MainStage />}

          {showIntro && <PhotoIntro fading={introFading} />}

          {!showMain && showIntro && (
            <AnimatePresence>
              <IntroSequence onDone={handleIntroDone} fading={introFading} />
            </AnimatePresence>
          )}

          {!showMain && !showIntro && (
            <CoverScreen clicked={envelopeClicked} onOpen={handleEnvelopeClick} />
          )}
        </>
      )}
    </div>
  )
}

export default App