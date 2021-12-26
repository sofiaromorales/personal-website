import React from 'react'

import AboutMe from '../sections/AboutMe'
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
            </div>
        )
    }
}

export default Home
