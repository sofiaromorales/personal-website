import React from 'react'

import AboutMe from '../sections/AboutMe'
import Awards from '../sections/Awards'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
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
            </div>
        )
    }
}

export default Home
