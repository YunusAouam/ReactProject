// import VideoThumb from '/public/images/hero-image.png';
import { Button, Grid } from '@mui/material';
// import ModalVideo from './modal-video';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div style={{heigh:"400px"}} className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 style={{fontFamily:"Poppins"}} className="text-3xl md:text-8xl font-bold tracking-wide text-white sm:text-4xl">We're Digital Creative Agency</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className='hidden md:block'>
             <img src="http://localhost:3000/images/cubes-hero-e376bb03.png" alt="img" />
          </div>
          {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl> */}
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
    // <section data-aos="fade-up" className="relative bg-black" style={{letterSpacing : "Poppins"}}>

    //   {/* Illustration behind hero content */}
    //   {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
    //     <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
    //       <defs>
    //         <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
    //           <stop stopColor="#FFF" offset="0%" />
    //           <stop stopColor="#EAEAEA" offset="77.402%" />
    //           <stop stopColor="#DFDFDF" offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <g fill="url(#illustration-01)" fillRule="evenodd">
    //         <circle cx="1232" cy="128" r="128" />
    //         <circle cx="155" cy="443" r="64" />
    //       </g>
    //     </svg>
    //   </div> */}

    //   <div className="max-w-6x mx-auto px-4 sm:px-6">

    //     {/* Hero content */}
    //     <div className="pt-32 flex justify-between pb-12 md:pt-40 md:pb-20">

    //       {/* Section header */}
    //       <div className="pb-12 md:pb-16 max-w-8xl mx-auto">
    //         <div className="max-w-3xl mx-auto">
    //         <h1 className="text-5xl text-left md:text-8xl  font-extrabold leading-tighter tracking-wide mb-4 text-white" data-aos="zoom-y-out">We're Digital<span className="ms-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Creative Agency</span></h1>
    //           <p className="text-xl text-gray-600 my-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
    //           {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
    //             <div>
    //               <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
    //             </div>
    //             <div>
    //               <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
    //             </div>
    //           </div> */}
    //           <Grid container spacing={2} width={"60%"}>
    //             <Grid item xs={12} md={6}>
    //               <Button variant="contained" fullWidth>
    //                 Start free trial
    //               </Button>
    //             </Grid>
    //             <Grid item xs={12} md={6}>
    //               <Button variant="contained" className='font-bold' style={{backgroundColor:"black"}} fullWidth>
    //                 Learn more
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </div>
    //       </div>
    //       <div className='hidden md:block'>
    //           <img src="http://localhost:3000/images/cubes-hero-e376bb03.png" alt="img" />
    //       </div>

    //       <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    //     <div
    //       className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
    //       style={{
    //         clipPath:
    //           'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //       }}
    //     />
    //   </div>
    //       {/* Hero image */}
    //     </div>
    //     {/* <ModalVideo
    //       thumb={"http://localhost:3000/images/features-bg.png"}
    //       thumbWidth={768}
    //       thumbHeight={432}
    //       thumbAlt="Modal video thumbnail"
    //       video="/videos/video.mp4"
    //       videoWidth={1920}
    //       videoHeight={1080} /> */}

    //   </div>
    // </section>
  )
}