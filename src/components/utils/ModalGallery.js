import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ModalGallery({img, open, setIsOpen}) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" initialFocus={cancelButtonRef} onClose={setIsOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-500"
        enterFrom="backdrop-blur-md"
        enterTo="backdrop-blur-md"
        leave="ease-in duration-500"
        leaveFrom="backdrop-blur-md"
        leaveTo="backdrop-blur-md"
      >
          <div className="fixed inset-0 bg-transparent backdrop-filter backdrop-blur-md bg-opacity-75 transition-backdrop-filter" />
      </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              // enter="ease-out duration-300"
              // enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              // enterTo="opacity-100 translate-y-0 sm:scale-100"
              // leave="ease-in duration-200"
              // leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              // leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              
              enter="ease-out duration-500"
              enterFrom="backdrop-blur-md"
              enterTo="backdrop-blur-md"
              leave="ease-in duration-500"
              leaveFrom="backdrop-blur-md"
              leaveTo="backdrop-blur-md"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-white">
                          Image
                      </Dialog.Title>
                      <div className="mt-2">
                          <img className='rounded-md' src={img} alt="imageModal" loading='lazy' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
