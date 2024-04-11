import GalleryClient1 from "../components/utils/GalleryClient1";
import GalleryClient2 from "../components/utils/GalleryClient2";

export default function Portfolio() {
    return (
        <section className="relative sm:top-32 lg:top-0 isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 font-family-poppins">
            <div className="sm:max-w-4xl mt-16 lg:mt-2 px-6 lg:px-32">
                <h1 className="text-4xl text-white font-bold tracking-wide text-gray-900 sm:text-4xl">
                    <span className="text-blue-400"> Client Journeys:</span> Stories of Partnership and Achievement
                </h1>
                <p className="mt-4 text-xl text-gray-100">
                    Together We Build Success, One Story at a Time
                </p>
            </div>
            <GalleryClient1 />
            <GalleryClient2 />
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
        </section>
    )
}