import React from 'react'
import '../styles/component/Dropdown.css'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {
  return (
    <>
    <div className="dpmain section">
      <p>FREQUENTLY ASKED QUESTIONS</p>
      <span>Here are the questions that people often ask about Boksa Pasal. If you need more information, browse our pages and categories to learn more about the project.</span>
      </div>
      <div className="dropdown-main">
        <div className="dropdown">
          <div className="w-full">
              <div className="w-full rounded-2xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                        <span>What is Boksa Pasal?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      Boksa Pasal is an open playground for lovers of Android games & apps.

  At Boksa Pasal, you can easily search and download thousands of MOD APK, Premium APK and Original APK games and apps for free. Use the search button to find what you’re looking for, or browse the pre-designed categories

  If you want to learn more about its history, development, future vision, etc., you can visit the introduction page.
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
                        <span>Is Boksa Pasal safe?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      SURE!

                      Boksa Pasal always uses the original APK from Google Play as the foundation for the birth of quality MOD versions. We even turn off unnecessary app permissions to optimize battery life and your privacy.

  DON’T WORRY if security apps on Android give warnings. The reason is only because the signature of the MOD version has been changed compared to the original.
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
                        <span>How does Boksa Pasal work?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      Boksa Pasal compiles and publishes the best games and apps based on trends and requests from users.

  You can then browse through the games and apps catalog to find the ones that suit your needs.

  Boksa Pasal takes feedback from you and other lovely users to continue to upgrade, improve the playing field as well as the quality of MOD versions posted in the future.
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
                        <span>What makes Boksa Pasal different from other websites?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      Free, simple and mindful.
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
                        <span>Does Boksa Pasal charge a fee?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      NO.

                      Boksa Pasal is completely free and always will be. We will try to maintain the project for as long as I can. If you love this project and want to be a part of it, we’d love to get your support.
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
                        <span>How to use Boksa Pasal?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      You browse this website, search for your favorites and then download them. It’s all simple.
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