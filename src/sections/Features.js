import React from 'react'

import {
    FEATURED_ON,
    FEATURES
} from '../constants'

const Features = () => {

    const renderFeatures = () => {
        return FEATURES.map(feature => {
            return (
                <div className='justify-self-center'>
                    <a
                        href={feature.postUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={feature.imageUrl}
                            alt={feature.alt}
                            className='h-28'
                        />
                    </a>
                </div>
            )
        })
    }

    return (
        <div className='Features grid auto-rows-max py-24'>
            <div className='title pb-20'>
                <p className='text-center font-sans font-bold text-5xl'>
                    {FEATURED_ON}
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-48'>
                { renderFeatures() }
            </div>
        </div>
    )
}

export default Features
