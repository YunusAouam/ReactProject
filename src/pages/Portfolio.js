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
        </section>
    )
}