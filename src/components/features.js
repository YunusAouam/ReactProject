'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import FootBallPlayer from '../icons/football-player1.png'
import BrandIcon from '../icons/brand-image1.png'
import DigitalIcon from '../icons/advertisig-agency1.png'
export default function Features() {
  
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative -top-8 isolate overflow-hidden bg-gray-900 sm:py-24 lg:py-2">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-4xl lg:text-6xl text-gray-100 font-semibold font-family-poppins">Our Services</h1>
            <p className="text-md lg:text-xl text-gray-200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-16">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div> */}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex bg-blue-500 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'shadow-md  opacity-25  border-gray-200 hover:shadow-lg' : ' border-transparent'}`}
                  href="#0"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setTab(1); 
                    // const topOffset = tabs.current.getBoundingClientRect().top;
                    // window.scrollTo({
                    //   top: window.pageYOffset + topOffset,
                    //   behavior: 'smooth'
                    // });
                  }}
                >
                  <div>
                    <div className="font-bold text-white leading-snug tracking-tight mb-1">For Right Holders</div>
                    <div className="text-gray-200">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      <img className="w-6 h-6 fill-current" src={FootBallPlayer} alt="footballPlayer" />
                  </div>
                </a>
                <a
                  className={`flex bg-blue-500 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'opacity-25  shadow-md border-gray-200 hover:shadow-lg' : 'border-transparent'}`}
                  href="#0"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setTab(2); 
                    // const topOffset = tabs.current.getBoundingClientRect().top;
                    // window.scrollTo({
                    //   top: window.pageYOffset + topOffset,
                    //   behavior: 'smooth'
                    // });
                  }}
                >
                  <div>
                    <div className="font-bold text-white leading-snug tracking-tight mb-1">For Brands</div>
                    <div className="text-gray-200">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    {/* <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg> */}
                      <img className="w-6 h-6 fill-current" src={BrandIcon} alt="BrandIcon" />
                  </div>
                </a>
                <a
                  className={`flex bg-blue-500 items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? '  opacity-25  shadow-md border-gray-200 hover:shadow-lg' : 'border-transparent'}`}
                  href="#0"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setTab(3); 
                    // const topOffset = tabs.current.getBoundingClientRect().top;
                    // window.scrollTo({
                    //   top: window.pageYOffset + topOffset,
                    //   behavior: 'smooth'
                    // });
                  }}
                >
                  <div>
                    <div className="font-bold text-white leading-snug tracking-tight mb-1">Digital and Broadcasting Services</div>
                    <div className="text-gray-200">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    {/* <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg> */}
                      <img className="w-6 h-6 fill-current" src={DigitalIcon} alt="Digital and broadcasting" />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <h1 align="center" className='text-4xl text-left font-bold text-blue-400 font-family-poppins mt-5'>For Right Holders</h1>
                      <p className='mt-5 text-left text-lg text-gray-100 font-family-poppins leading-8'>
                        Goleador Sport Consulting maximizes the commercial potential of your sports 
                        organization by offering strategic marketing, restructuring of assets, and securing 
                        lucrative partnerships.
                      </p>
                      {/* <img className="md:max-w-none mx-auto rounded mt-5" src={"http://localhost:3000/images/features-bg.png"} width={500} height="462" alt="Features bg" />
                      <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={"http://localhost:3000/images/features-element.png"} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <h1 align="center" className='text-4xl text-left font-bold text-blue-400 font-family-poppins mt-5'>For Brands</h1>
                      <p className='mt-5 text-left text-lg text-gray-100 font-family-poppins leading-8'>
                          Our sports marketing consulting enhances brand visibility through strategic partnerships 
                          and engaging campaigns. We prioritize creating memorable brand experiences at live 
                          events while optimizing budget allocation. Our goal is to establish a strong and cost-effective presence for your brand in the sports industry
                      </p>
                      {/* <img className="md:max-w-none mx-auto rounded mt-5" src={"http://localhost:3000/images/features-bg.png"} width={500} height="462" alt="Features bg" />
                      <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={"http://localhost:3000/images/features-element.png"} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <h1 align="center" className='text-4xl text-left font-bold text-blue-400 font-family-poppins mt-5'>Digital and Broadcasting Services</h1>
                      <p className='mt-5 text-left text-lg text-gray-100 font-family-poppins leading-8'>
                        Elevate your sports content with Goleador's Digital & Broadcasting Services. From 
                        seamless TV distribution and marketing of broadcasting rights to cutting-edge graphics 
                        and advanced sports data, we transform your digital presence, engage audiences, and 
                        amplify the impact of your broadcasts.
                      </p>
                      {/* <img className="md:max-w-none mx-auto rounded mt-5" src={"http://localhost:3000/images/features-bg.png"} width={500} height="462" alt="Features bg" />
                      <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={"http://localhost:3000/images/features-element.png"} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

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
    </section>
  )
}