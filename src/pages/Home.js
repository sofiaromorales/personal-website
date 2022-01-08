import React from 'react'

import AboutMe from '../sections/AboutMe'
import Awards from '../sections/Awards'
import Features from '../sections/Features'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import LatestPosts from '../sections/LatestPosts'
import Skills from '../sections/Skills'
import Socials from '../sections/Socials'
import Work from '../sections/Work'

class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                <Hero/>
                <AboutMe/>
                <Skills/>
                <Work/>
                <Awards/>
                <LatestPosts/>
                <Features/>
                <Socials/>
                <Footer/>
            </div>
        )
    }
}

export default Home
