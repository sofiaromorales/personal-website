import React from 'react'

import NavigationOptions from '../components/NavigationOptions'

const Hero = () => {
    return (
        <div className='Hero grid auto-rows-max h-screen px-24 py-12'>
            <div className='grid grid-cols-2 items-end'>
                <div>
                    <p className='font-sans text-5xl font-bold tracking-wide'>
                        {`Sofía Rodríguez`}
                    </p>
                </div>
                <NavigationOptions/>
            </div>
        </div>
    )
}

export default Hero
