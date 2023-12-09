import React from 'react'
import '../styles/component/Dropdown.css'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {
  return (
    <>
    <div className="dropdown-main section">
      <div className="dropdown">
        <div className="w-full">
            <div className="w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
        <div className="w-full  mt-5">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
        <div className="w-full  mt-5">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
        </div>
        <div className="dropdown">
        <div className="w-full single">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
        <div className="w-full  mt-5">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
        <div className="w-full  mt-5">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Dropdown