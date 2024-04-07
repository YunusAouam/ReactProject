import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'
import FootBallPlayer from '../../icons/FootBallPlayer.png';
import BrandIcon from '../../icons/brand-image.png';
import DigitalIcon from '../../icons/advertisig-agency.png'
const solutions = [
  { name: 'For Right Holders', description: 'Get a better understanding of your traffic', href: '#', imgicon: FootBallPlayer },
  { name: 'For Brands', description: 'Speak directly to your customers', href: '#', imgicon: BrandIcon  },
  { name: 'Digital and Broadcasting Services', description: "Your customers' data will be safe and secure", href: '#', imgicon: DigitalIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function ServicesLink() {
  return (
    <Popover className="relative">
  <Popover.Button className="inline-flex hover:text-indigo-400 transition duration-300 ease-in-out border-0 outline-none items-center text-md font-semibold text-white font-family-poppins">
    <span>Services</span>
    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
  </Popover.Button>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-200"
    enterFrom="opacity-0 translate-y-1"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 translate-y-1"
  >
    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-800 text-sm leading-6">
        <div className="p-4">
          {solutions.map((item) => (
            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-700">
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                <img className="h-8 w-8 text-gray-300 group-hover:text-indigo-400" src={item.imgicon} alt="footballplayer" />
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-300">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Popover.Panel>
  </Transition>
</Popover>
  )
}
