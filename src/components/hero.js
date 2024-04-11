export default function Hero() {
  return (
    <div style={{heigh:"400px"}} className="relative sm:top-32 lg:top-0 isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto mt-16 lg:mt-2 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 style={{fontFamily:"Poppins"}} className="text-6xl lg:text-8xl md:text-8xl font-bold tracking-wide text-white sm:text-3xl">We're Digital Creative Agency</h2>
            <p className="mt-8 text-xl leading-8 text-gray-300">
                Be in the Heart of the Game with Goleador
            </p>
          </div>
          <div className='hidden md:block'>
             <img src={"images/cubes-hero-e376bb03.png"} className="rounded-lg" alt="img" />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    
  )
}