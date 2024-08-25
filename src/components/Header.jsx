import React from 'react'
import {Link} from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";

import '../styles/component/Header.css'
import logo from '../images/logo.jpg'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <>
      <div className="header container">
        <Link to="/"><img src={logo} alt="" /></Link>
        <ul>
          <div className="ul">
            <Link to="/">Home</Link>
            <Link to="games" >Games</Link>
            <Link to="apps" >Apps</Link>
            <Link to="psp-games" >PSP Games</Link>
          </div>
            <Disclosure as="nav" className="dis">
              {({ open }) => (
                <>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                          <div>
                            <Menu.Button className="">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <HiMiniBars3 />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none black"> 
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm')}
                                  >
                                    Your Profile
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Settings
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sign out
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                </>
              )}
            </Disclosure>
        </ul>
      </div>
      </>
  )
}

export default Navbar