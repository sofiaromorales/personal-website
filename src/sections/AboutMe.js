import React from 'react'

import {
    ABOUT_ME_P1,
    ABOUT_ME_P2,
    ABOUT_ME_P3,
    PROFILE_IMAGE_URL,
    QUOTE1,
    QUOTE2,
    QUOTE3
} from '../constants'

const renderQuotes = (quotes) => {
    return quotes.map(q => {
        return (
            <p className='font-sans font-bold text-5xl text-center pb-5'>
                { q }
            </p>
        )
    })
}

const AboutMe = (props) => {
    return (
        <div
            id='AboutMe'
            className='AboutMe grid auto-rows-max py-24'
        >
            <div className='grid grid-cols-1'>
                <div>
                    <div className='grid grid-flow-row auto-rows-max justify-center quote'>
                        { renderQuotes([QUOTE1, QUOTE2, QUOTE3]) }
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 px-48 mt-24 '>
                <div className='circle h-96 w-96 mx-auto'>
                    <div className='h-full relative'>
                        <img
                            src={PROFILE_IMAGE_URL}
                            alt='profile'
                            className='profile-image absolute w-6/12'
                        />
                    </div>
                </div>
                <div className='grid auto-rows-max mx-auto space-y-8 self-center text-lg'>
                    <div className='paragraph tracking-widest'>
                        <p className='text-xl'>
                            { ABOUT_ME_P1.toUpperCase() }
                        </p>
                    </div>
                    <div className='paragraph'>
                        <p className='text-xl'>
                            { ABOUT_ME_P2 }
                        </p>
                    </div>
                    <div className='paragraph'>
                        <p className='text-xl'>
                            { ABOUT_ME_P3 }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
