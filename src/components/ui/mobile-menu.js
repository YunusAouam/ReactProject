'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex-col grow gap-16 justify-center flex-wrap items-start">
              <li>
                <Link to="/login" className="">Services</Link>
              </li>
              <li>
                <Link to="/login" className="">3 pages</Link>
              </li>
              <li>
                <Link to="/login" className="">Blogs</Link>
              </li>
              <li>
                <Link to="/login" className="">Portfolios</Link>
              </li>
            </ul>
          {/* <ul className="px-5 py-2">
            <li>
              <Link to="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
            </li>
            <li>
              <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" onClick={() => setMobileNavOpen(false)}>
                <span>Sign up</span>
                <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                </svg>
              </Link>
            </li>
          </ul>           */}
          <Grid container spacing={2}>
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
        </Transition>
      </div>
    </div>
  )
}
