import { useState, useEffect } from 'react'

import Logo from './logo'
// import Dropdown from './components/utils/dropdown';
import MobileMenu from './mobile-menu'
import { Link } from 'react-router-dom'
import SimpleMenuNav from '../utils/megaMenu'
// import Dropdown from '../utils/dropdown'

export default function Header() {

  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full flex items-center h-24 rounded-b-xl z-30 bg-transparent backdrop-filter backdrop-blur-2xl bg-opacity-30 transition duration-300 ease-in-out`}>
      <div className="w-full mx-auto px-5 sm:px-6">
        <div className="flex w-full items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          {/* <SimpleMenuNav /> */}
          {/* Desktop navigation */}
          <nav className="hidden md:flex w-5/6 md:justify-around">
            {/* Desktop sign in links */}
            {/* <ul className="flex grow gap-16 justify-center flex-wrap items-center">
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
            </ul> */}
            <SimpleMenuNav />
            <ul className='flex grow gap-5 justify-end flex-wrap items-center'>
              
              <li>
                  <Link to="/login" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="px-5 py-2 rounded-md text-white bg-blue-600 hover:bg-gray-800">
                    <span>Sign up</span>
                    {/* <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg> */}
                  </Link>
                </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
