import { useState, useEffect } from "react";
import EnvelopeCover from "./components/EnvelopeCover";
import InvitationHero from "./components/InvitationHero";
import WeddingTimeline from "./components/WeddingTimeline";
import DressCodeDetails from "./components/DressCodeDetails";
import EntourageDetails from "./components/EntourageDetails";
import GentleReminders from "./components/GentleReminders";
import EventDetails from "./components/EventDetails";
import DesktopGate from "./components/DesktopGate";
import entireBg from "./assets/BG/Entirebg.webp";

function App() {
  const [envelopeClicked, setEnvelopeClicked] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleEnvelopeClick = () => {
    setEnvelopeClicked(true);
    setTimeout(() => setShowMain(true), 700);
  };

  if (isDesktop === null) {
    return (
      <div className="min-h-dvh w-full relative overflow-hidden">
        <div className="fixed inset-0 dreamy-bg" />
        <img
          src={entireBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-1 h-full w-full object-cover opacity-[0.15] mix-blend-multiply"
        />
      </div>
    );
  }

  return (
    <div className="min-h-dvh w-full relative z-10 overflow-hidden">
      <div className="fixed inset-0 dreamy-bg" />
      <img
        src={entireBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-1 h-full w-full object-cover opacity-[0.15] mix-blend-multiply"
      />
      {isDesktop ? (
        <DesktopGate />
      ) : (
        <>
          {showMain && (
            <div className="relative z-10 w-full">
              <InvitationHero />
              <EventDetails />
              <WeddingTimeline />
              <DressCodeDetails />
              <EntourageDetails />
              <GentleReminders />
            </div>
          )}

          {!showMain && (
            <div className="relative z-10 w-full">
              <EnvelopeCover
                clicked={envelopeClicked}
                onOpen={handleEnvelopeClick}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
