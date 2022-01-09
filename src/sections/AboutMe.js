import React from 'react'

const QUOTE1 = `I'm a Problem Solver`
const QUOTE2 = `I'm a Product Designer`
const QUOTE3 = `I'm a Problem Solver`
const PROFILE_IMAGE_URL = 'https://user-images.githubusercontent.com/49292858/146709506-574c8cb4-e492-4252-a400-073b6aa590c9.png'
const ABOUT_ME_P1 = `Hi I'm Sofía`
const ABOUT_ME_P2 ='I’m a iOS and web developer based in Caracas, Venezuela. I specialize in building beautifull products that makes a transparent impact in peoples life. I’m an open source advocate a technical writer in development.'
const ABOUT_ME_P3 = 'I also like teaching, playing music and doing video content. I considre myself an Apple fan and very nerdy in what comes to software architectures.'

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
                        { ABOUT_ME_P1.toUpperCase() }
                    </div>
                    <div className='paragraph'>
                        { ABOUT_ME_P2 }
                    </div>
                    <div className='paragraph'>
                        { ABOUT_ME_P3 }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
