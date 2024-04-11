'use client'

import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './logo'

const navigation = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/', sublinks : ['For Right Holdes', 'For brands', 'Digital and Broadcasting services']  },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]
export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  // // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileMenuOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileMenuOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileMenuOpen || keyCode !== 27) return;
      setMobileMenuOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <>
     <button
          ref={trigger}
          className={`lg:hidden hamburger ${mobileMenuOpen && 'active'}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg className="w-6 h-6 fill-current text-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
    </button>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  <div className="fixed inset-0 z-50" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        {/* <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        /> */}
        <Logo />
      </a>
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-300"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-700">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            !item.sublinks ? 
            <Link 
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
            >
              {item.name}
            </Link>
            :
            
          <Accordion  sx={{ backgroundColor: 'rgb(17, 24, 39)', color: '#fff' }}>
              <AccordionSummary expandIcon={<ArrowDownwardIcon sx={{ color: '#fff' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ backgroundColor:  'rgb(17, 24, 39)' }}
              >
                <Typography  sx={{ color: 'rgb(209, 213, 219)', fontWeight:"600" }}>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails  sx={{ backgroundColor:  'rgb(17, 24, 39)', color: '#fff' }}>
                <Typography>
                  {
                    
                    item.sublinks.map((sublink) => (
                        
                        <Link 
                          key={sublink}
                          to={sublink}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-300 hover:bg-gray-800"
                        >
                          {sublink}
                        </Link>
                    ))
                  }
                </Typography>
              </AccordionDetails>
          </Accordion>
          ))}
        </div>
        {/* <div className="py-6">
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
          >
            Log in
          </a>
        </div> */}
      </div>
    </div>
  </Dialog.Panel>
</Dialog>

    </>
  )
}
