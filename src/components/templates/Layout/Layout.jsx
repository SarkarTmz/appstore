import React from 'react'
import MobileNav from '../../molecules/MobileNav/MobileNav'
import Header from '../../molecules/Header/Header'
import Footer from '../../molecules/Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <div className="flex flex-col">
            <MobileNav/>
            <Header />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    </>
  )
}

export default Layout