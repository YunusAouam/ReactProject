import img1 from '../../images/BetWinner/image00001.jpeg'
import img2 from '../../images/BetWinner/image00002.jpeg'
import img3 from '../../images/BetWinner/image00003.jpeg'
const images = [
    {
      imageSrc: img1,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    },
    {
      imageSrc: img2,
      imageAlt: 'image 2 betwinner',
    },
    {
      imageSrc: img3,
      imageAlt: 'image 3 betwinner',
    },
  ]
  
export default function GalleryClient2() {
    return (
      <div className="w-screen bg-gray-900 mt-8 px-5 lg:px-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <div className="sm:max-w-xl lg:mt-2 mb-5">
                    <h1 className="text-2xl text-blue-400 font-semibold tracking-tight sm:text-2xl">
                        <span className="font-bold text-white">Client 2:</span> Betwinner Partnership: A Winning Bet in Sports Marketing
                    </h1>
                </div>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {images.map((image) => (
                <div key={image.imageAlt} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-900 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  