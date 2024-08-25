import React from 'react'
import '../styles/pages/About.css'
import Banner from '../../../atoms/Banner'
import Footer from '../../ee/Footer'

const About = () => {
  return (
    <>
        <div className="about container">
            <div className="about-banner">
                <Banner />
                <p className='mt-10'>It was the mission of Boksa Pasal when it was born. We do not want to be the most visited website or the quickest. We want to become a very private space, with lots of interesting things to read, and where everyone is welcome.
                </p><br />
                <p>Do you believe? We, young people with passion and enthusiasm, have researched and built this website starting with the number zero. And we have worked hard, dedicating time and money to build a common playground for you, also for ourselves.</p><br />
                <h1>Just for fun</h1>
                <p>APKMODY is set up with the main criterion is Fun, so the articles on the website always featured the fun, humor. During the reading, if you see the negative articles & negative contents, please report to ours. We would like to read all your comments and feedback, so your voices will be heard.</p><br />
                <h1>Creative, simple, and mindful</h1>
                <p>You can see, APKMODY simple from the interface. We want to bring you the best information quickly, so we always try to ensure:</p><br />
                <ul className='container'>
                    <li>Information must be authentic</li>
                    <li>Content goes straight to the problem, not rampant</li>
                    <li>Centralized presentation and enhance the content</li>
                    <li>Speed is the top priority</li>
                </ul><br />
                <h1>Always welcome new members</h1>
                <p>From the day of establishment, APKMODY Team consists of 4 – 5 peoples. We know that only we are not enough to create an open and private space as a mission, so APKMODY always needs contributions from the community. APKMODY always welcomes those who love writing, love the technology to develop APKMODY with us. With APKMODY, you will also have your own space and open to express your own personality in the most comfortable way. You will never have to write an order, in a conventional structure or manner.</p><br />
                <h1>Just the beginning</h1>
                <p>From now on, we know that it is difficult to operate and develop a website. However, this is just the beginning. We hope this road will be a little bit thorny (though know very much) but hopefully, every compliment, encouragement like “your interface is pretty” or simply a comment is enough energy for us to continue this journey.</p><br />
                <p>Hey! Reading from the beginning to the end is tired or not?</p>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About