import photoIntro from '../assets/PhotoIntro_opt.webp'

function PhotoIntro({ fading }: { fading: boolean }) {
  return (
    <div
      className="fixed inset-0 z-40 transition-opacity duration-700"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photoIntro})` }}
      />
      <div className="absolute inset-0 page-glitter" />
    </div>
  )
}

export default PhotoIntro