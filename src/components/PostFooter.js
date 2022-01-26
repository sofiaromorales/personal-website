import React from 'react'

import {
    EMAIL,
    IF_YOU_LIKED,
    MAIL_ADDRESS,
    OR_CONTACT_ME_VIA,
    TWITTER,
    TWITTER_ADDRESS
} from '../constants'

const PostFooter = () => {
    return (
        <div className='PostFooter border-dashed border-2 rounded py-10'>
            <p className='text-center text-lg'>
                {IF_YOU_LIKED}
                <a href={`mailto:${MAIL_ADDRESS}`}>
                    {EMAIL}
                </a>
                {OR_CONTACT_ME_VIA}
                <a href={TWITTER_ADDRESS} target='_blank' rel='noreferrer'>
                    {TWITTER}
                </a> 💜
            </p>
        </div>
    )
}

export default PostFooter
