import React from 'react'

const FEATURED_ON = 'Featured On'

const FEATURES = [{
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148475832-c49b6420-3021-440b-bf10-50ac22c163bf.png',
    postUrl: 'https://es.abcufoundation.org/sofia-rodriguez/',
    alt:'ucabista'
}, {
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148474629-95d98b04-4255-44ba-92e2-60320cb7a60b.png',
    postUrl: 'https://elucabista.com/2018/07/11/sofia-rodriguez-futura-ingeniera-reconocida-por-apple/',
    alt: 'abcu foundation'
}]

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
            <div className='grid grid-cols-2 gap-4 px-48'>
                { renderFeatures() }
            </div>
        </div>
    )
}

export default Features
