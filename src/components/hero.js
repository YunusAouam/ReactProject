// import VideoThumb from '/public/images/hero-image.png';
import { Button, Grid } from '@mui/material';
import ModalVideo from './modal-video';

export default function Hero() {
  return (
    <section data-aos="fade-up" className="relative" style={{letterSpacing : "Poppins"}}>

      {/* Illustration behind hero content */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6x mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 flex justify-between pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="pb-12 md:pb-16 max-w-8xl mx-auto">
            <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl text-left md:text-8xl  font-extrabold leading-tighter tracking-wide mb-4" data-aos="zoom-y-out">We're Digital<span className="ms-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Creative Agency</span></h1>
              <p className="text-xl text-gray-600 my-8 text-left" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
              <Grid container spacing={2} width={"60%"}>
                <Grid item xs={12} md={6}>
                  <Button variant="contained" fullWidth>
                    Start free trial
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="contained" className='font-bold' style={{backgroundColor:"black"}} fullWidth>
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className='hidden md:block'>
              <img src="http://localhost:3000/images/cubes-hero-e376bb03.png" alt="img" />
          </div>

          {/* Hero image */}
        </div>
        {/* <ModalVideo
          thumb={"http://localhost:3000/images/features-bg.png"}
          thumbWidth={768}
          thumbHeight={432}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080} /> */}

      </div>
    </section>
  )
}