import React from 'react'

import {
    SOCIALS
} from '../constants'

const PostSocialsFooter = () => {

    const renderSocials = () => {
        return SOCIALS.map(social => {
            return (
                <div className='social'>
                    <a href={social.link} target='_blank' rel='noreferrer'>
                        <p>
                            {social.name}
                        </p>
                    </a>
                </div>
            )
        })
    }

    return (
        <div className='PostSocialsFooter mb-20'>
            <div className='px-36 mt-20'>
                <hr/>
            </div>
            <div className='grid grid-flow-col auto-cols-max justify-center gap-8 px-36 mt-5'>
                { renderSocials() }
            </div>
        </div>
    )
}

export default PostSocialsFooter
