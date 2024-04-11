function VedioHome() {
  return (
    <>
    
    <div
      className="bg-gray-900 w-full grid grid-cols-23 text-hero-left-content z-0 [&>*]:text-left grid-rows-[1fr_auto] gap-y-4 md:gap-y-10 md:relative md:min-h-[41rem] black [&>*:first-child]:md:pt-16 [&>.cta-list]:md:pb-16 col-span-23 col-start-2 row-start-1"
      style={{ aspectRatio: "16/9" }}
    >
      {/* <div className="row-[1_/_span_1] col-[2_/_span_21] flex flex-col gap-4 justify-end pointer-events-none md:min-h-[unset] [&>*:last-child]:pb-14 min-h-[41.875rem] md:!col-[2_/_span_13] md:[&>*:last-child]:pb-0 pointer-events-none">
        <h1 className="w-full md:w-[calc((13/21)*100%)] md:max-w-[36.25rem] pointer-events-auto">
          Video simplified
        </h1>
        <p className="text-body-1 md:text-hero-left-sub-content w-full whitespace-pre-line md:pb-0 md:w-[calc((8/13)*100%)] pointer-events-auto">
          Everything you need to make, manage, and share brilliant videos.
        </p>
      </div> */}
      {/* <div className="row-[2_/_span_1] flex flex-col gap-4 md:flex-row md:justify-between md:col-[2_/_span_21] col-[1_/_span_22] pb-4">
        <ul className="cta-list flex flex-col gap-2 md:flex-row h-fit">
          <li>
            <a
              href="/upgrade"
              target="_blank"
              className="box-border button bg-transparent border-none no-underline black group p-0 w-full text-left"
            >
              <span className='cursor-pointer w-full md:w-fit button-inner max-w-full border-0 p-0 inline-flex items-center justify-between font-sans font-medium text-body-2 no-underline rounded-xl w-full rounded-xl relative overflow-hidden gap-4 py-3.5 px-5 z-0  group-focus-within:outline-btn-focus-outline before:content-[""] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:bg-btn-background before:transition-all motion-reduce:before:transition-none before:delay-0 before:duration-0 before:-z-20 after:content-[""] after:absolute after:left-full after:top-0 after:h-full after:w-full after:rounded-xl after:border after:border-btn-hover-background after:bg-btn-hover-background after:transition-all motion-reduce:after:transition-none after:ease-in-out after:duration-350 after:-z-10 group-hover:before:bg-btn-hover-background group-hover:before:delay-350 group-hover:after:left-0'>
                <span className="button-title leading-body-1 text-btn-content transition-all motion-reduce:transition-none ease-in-out duration-500 group-hover:text-btn-hover-content">
                  See plans
                </span>
                <span className="button-icon-container overflow-hidden flex justify-start transition-all motion-reduce:transition-none duration-500 ease-in-out gap-3 py-1 px-3.5 rounded-md w-12 bg-btn-icon-container group-hover:bg-btn-hover-icon-container group-focus-within:bg-btn-hover-icon-container">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 fill-btn-hover-content transition-all motion-reduce:transition-none duration-500 ease-in-out group-hover:ml-0 -ml-8 mr-0"
                  >
                    <g fill="inherit">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"
                      />
                    </g>
                  </svg>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mx-0 fill-btn-content"
                  >
                    <g fill="inherit">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"
                      />
                    </g>
                  </svg>
                </span>
              </span>
            </a>
          </li>
          <li>
            <button className="box-border button bg-transparent border-none no-underline black group p-0 w-full text-left">
              <span className='cursor-pointer w-full md:w-fit button-inner max-w-full border-0 p-0 inline-flex items-center justify-between font-sans font-medium text-body-2 no-underline rounded-xl w-full rounded-xl relative overflow-hidden gap-4 py-3.5 px-5 z-0  group-focus-within:outline-btn-focus-outline before:content-[""] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:bg-btn-background before:transition-all motion-reduce:before:transition-none before:delay-0 before:duration-0 before:-z-20 after:content-[""] after:absolute after:left-full after:top-0 after:h-full after:w-full after:rounded-xl after:border after:border-btn-hover-background after:bg-btn-hover-background after:transition-all motion-reduce:after:transition-none after:ease-in-out after:duration-350 after:-z-10 group-hover:before:bg-btn-hover-background group-hover:before:delay-350 group-hover:after:left-0'>
                <span className="button-title leading-body-1 text-btn-content transition-all motion-reduce:transition-none ease-in-out duration-500 group-hover:text-btn-hover-content">
                  Join for free
                </span>
                <span className="button-icon-container overflow-hidden flex justify-start transition-all motion-reduce:transition-none duration-500 ease-in-out gap-3 py-1 px-3.5 rounded-md w-12 bg-btn-icon-container group-hover:bg-btn-hover-icon-container group-focus-within:bg-btn-hover-icon-container">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 fill-btn-hover-content transition-all motion-reduce:transition-none duration-500 ease-in-out group-hover:ml-0 -ml-8 mr-0"
                  >
                    <g fill="inherit">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"
                      />
                    </g>
                  </svg>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mx-0 fill-btn-content"
                  >
                    <g fill="inherit">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.085 10.8333L9.42356 14.5731C9.04929 14.9553 9.04929 15.5667 9.42356 15.949C9.8092 16.3429 10.4433 16.3429 10.8289 15.949L15.965 10.703C16.345 10.3148 16.345 9.68553 15.965 9.29737L10.8289 4.05105C10.4433 3.65715 9.80921 3.65713 9.42356 4.05101C9.04928 4.43328 9.04926 5.04462 9.42352 5.42691L13.0847 9.16666L4.58333 9.16666C4.1231 9.16666 3.75 9.53976 3.75 10C3.75 10.4602 4.1231 10.8333 4.58333 10.8333L13.085 10.8333Z"
                      />
                    </g>
                  </svg>
                </span>
              </span>
            </button>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row md:items-center p-8 gap-3 md:gap-5 rounded-3.5xl h-fit text-generic-card-content w-full bg-pearl-black md:w-[unset] md:max-w-[27.75rem] md:bg-opacity-30 md:backdrop-blur-2xl pointer-events-none bg-black">
          <div className="text-display-5 md:text-display-6" />
          <div className="text-body-2 md:text-generic-card-sub-content">
            287 million creatives, entrepreneurs, and businesses trust Vimeo
          </div>
        </div>
      </div> */}
      <div className="w-full rounded-2xl md:rounded-3.5xl -z-[1] col-[1_/_span_23] p-0 md:absolute md:w-5/6 md:left-32 md:h-220 row-[1_/_span_1] md:row-[1_/_span_2]">
        <div className="w-full h-full relative hidden md:block z-0">
          <video
            className="relative z-[1] inline w-full h-full rounded-2xl md:rounded-3.5xl w-full h-full object-center object-cover  rounded-2xl md:rounded-3.5xl"
            preload="metadata"
            data-src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"
            loop
            playsInline
            autoPlay
            aria-hidden="false"
            id="hero-v3-asset-d0.2595185407285845"
            src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"
          />
          <video
            className="hidden filter-[unset] w-full h-full md:transform-gpu md:translate-x-0 md:translate-y-0 md:absolute md:z-0 md:inline md:top-0 md:left-0 rounded-2xl md:rounded-3.5xl w-full h-full object-center object-cover md:blur-2xl"
            preload="none"
            aria-hidden="false"
            data-src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"
            loop
            playsInline
            autoPlay
            id="hero-v3-asset-d0.2595185407285845"
            src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"
          />
        </div>
        <div className="w-5/6 m-auto h-full relative block md:hidden z-0">
          <video
            className="relative z-[1] inline rounded-2xl md:rounded-3.5xl w-full h-full object-center object-cover md:rounded-3.5xl"
            preload="metadata"
            data-src="https://player.vimeo.com/progressive_redirect/playback/844715170/rendition/360p/file.mp4?loc=external&signature=dc53d02bb919cc3f758c0b75bd454fcdc9a32c17757eac4b5c8131ed32e80674"
            loop
            playsInline
            autoPlay
            aria-hidden="false"
            id="hero-v3-asset-d0.2595185407285845"
          />
          {/* <video className="hidden filter-[unset] w-full h-full md:transform-gpu md:translate-x-0 md:translate-y-0 md:absolute md:z-0 md:inline md:top-0 md:left-0 rounded-2xl md:rounded-3.5xl w-full h-full object-center object-cover md:blur-2xl" preload="none" aria-hidden="false" data-src="https://player.vimeo.com/progressive_redirect/playback/844715170/rendition/360p/file.mp4?loc=external&signature=dc53d02bb919cc3f758c0b75bd454fcdc9a32c17757eac4b5c8131ed32e80674" loop playsInline autoPlay id="hero-v3-asset-d0.2595185407285845" /> */}
        </div>
      </div>
      {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </div>
    </>
  );
}

export default VedioHome;
