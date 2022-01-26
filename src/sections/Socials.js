import React from 'react'

import {
    LETS_CONNECT,
    SOCIALS
} from '../constants'

const Socials = () => {

    const renderSocials = () => {
        return SOCIALS.map(social => {
            return (
                <div className='justify-self-center grow-0'>
                    <a
                        href={social.link}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={social.imageUrl}
                            alt={social.name}
                            className='h-14'
                        />
                    </a>
                </div>
            )
        })
    }

    return (
        <div className='Socials grid auto-rows-max py-24'>
            <div className='title px-60 pb-10'>
                <p className='text-center tracking-widest font-sans text-2xl'>
                    {LETS_CONNECT.toUpperCase()}
                </p>
            </div>
            <div className='grid grid-flow-col auto-cols-max gap-20 px-48 pb-40 justify-center'>
                {renderSocials()}
            </div>
        </div>
    )
}

export default Socials
