import { useState } from 'react'
import { TbSparkles } from 'react-icons/tb'
import envelop from './assets/Envelop.png'
import bg from './assets/bg.webp'

function App() {
  const [clicked, setClicked] = useState(false)
  const [showMain, setShowMain] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setShowMain(true), 800)
  }

  if (showMain) {
    return (
      <div className="min-h-dvh min-w-dvw flex items-center justify-center bg-[#feede9] p-4">
        <h1 
          className="text-3xl sm:text-5xl tracking-widest uppercase animate-fade-in-down"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#9e5783' }}
        >
          Welcome to Our Era
        </h1>
      </div>
    )
  }

  return (
    <div
      className={`min-h-dvh min-w-dvw flex items-center justify-center p-4 transition-opacity duration-700 ${clicked ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={`flex flex-col items-center gap-4 transition-opacity duration-700 ${clicked ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center gap-1">
          <h1 
            className="text-lg sm:text-4xl tracking-[0.1em] sm:tracking-[0.15em] uppercase whitespace-nowrap animate-fade-in-down"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#9e5783', animationDelay: '0.2s' }}
          >
            Mariel Alyssa & Ivan Alexis
          </h1>
          <p 
            className="text-xs sm:text-base tracking-wider italic whitespace-nowrap animate-fade-in-down"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#9e5783', animationDelay: '0.5s' }}
          >
            This is where our next era begins.
          </p>
          <p 
            className="text-sm sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap animate-fade-in-down"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#9e5783', animationDelay: '0.8s' }}
          >
            13 · 02 · 2027
          </p>
        </div>
        <img
          src={envelop}
          alt="Envelop"
          onClick={handleClick}
          className={`w-full max-w-[90vw] max-h-[60vh] sm:max-w-[60vw] object-contain 
            transition-all duration-500 ease-out
            hover:scale-105 hover:rotate-2
            hover:brightness-110
            hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]
            hover:drop-shadow-[0_0_60px_rgba(236,72,153,0.6)]
            hover:drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]
            cursor-pointer animate-fade-in-up ${clicked ? 'scale-110 opacity-0' : ''}`}
          style={{ animationDelay: '0.4s', transitionDuration: clicked ? '700ms' : '500ms' }}
        />
        <p 
          className="text-sm sm:text-lg tracking-widest uppercase animate-fade-in-up flex items-center gap-2 whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#7a3d63', textShadow: '0 1px 4px rgba(126,61,99,0.2)', animationDelay: '1s' }}
        >
          <TbSparkles size={18} className="animate-shimmer" style={{ color: '#7a3d63' }} />
          Click the envelope to proceed
          <TbSparkles size={18} className="animate-shimmer" style={{ color: '#7a3d63', animationDelay: '0.3s' }} />
        </p>
      </div>
    </div>
  )
}

export default App
