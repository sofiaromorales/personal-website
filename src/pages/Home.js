import React from 'react'

import AboutMe from '../sections/AboutMe'
import Hero from '../sections/Hero'

class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                <Hero/>
                <AboutMe/>
            </div>
        )
    }
}

export default Home
