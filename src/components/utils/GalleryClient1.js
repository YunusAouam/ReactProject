import { useState } from 'react';
import ModalGallery from './ModalGallery';
const GalleryClient1 = () => {
    const [img, setImg] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <>
            <ModalGallery img = {img} open = {isOpen} setIsOpen={setIsOpen} />
            <div className="w-screen mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="sm:max-w-xl lg:mt-2 mb-5">
                    <h1 className="text-2xl text-blue-400 font-semibold tracking-tight sm:text-2xl">
                        <span className="font-bold text-white">Client 1:</span> inDrive Sports Marketing Collaboration: Driving Success
                    </h1>
                </div>
                <div className="-m-1 w-full flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center hover:opacity-25 cursor-pointer"
                                src={'images/Indrive/image00005.jpeg'} 
                                onClick={(event) => {
                                    setImg(event.target.src);
                                    setIsOpen(true);
                                }}
                                loading='lazy'
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center hover:opacity-25 cursor-pointer"
                                src={'images/Indrive/image00004.jpeg'} 
                                
                                onClick={(event) => {
                                    setImg(event.target.src);
                                    setIsOpen(true);
                                }}
                                loading='lazy'
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center hover:opacity-25 cursor-pointer"
                                src={'images/Indrive/image00001.jpeg'} 
                                
                                onClick={(event) => {
                                    setImg(event.target.src);
                                    setIsOpen(true);
                                }}
                                loading='lazy'
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:opacity-25 cursor-pointer"
                            src={'images/Indrive/image00006.jpeg'} 
                            
                            onClick={(event) => {
                                setImg(event.target.src);
                                setIsOpen(true);
                            }}
                            loading='lazy'
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:opacity-25 cursor-pointer"
                            src={'images/Indrive/image00008.jpeg'} 
                            
                            onClick={(event) => {
                                setImg(event.target.src);
                                setIsOpen(true);
                            }}
                            loading='lazy'
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center hover:opacity-25 cursor-pointer"
                            src={'images/Indrive/image00001.jpeg'} 
                            
                            onClick={(event) => {
                                setImg(event.target.src);
                                setIsOpen(true);
                            }}
                            loading='lazy'
                        />
                    </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default GalleryClient1;