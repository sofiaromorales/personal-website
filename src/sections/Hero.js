import React from 'react'

const Hero = () => {
    return (
        <div className='Hero grid grid-cols-8 h-screen'>
            <div className='col-start-2 col-span-4'>
                <div className='grid grid-cols-3 h-screen'>
                    <div className='col-span-2'>
                        {`Sofía Rodríguez`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
