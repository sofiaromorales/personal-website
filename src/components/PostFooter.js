import React from 'react'

const EMAIL = 'email'
const IF_YOU_LIKED = 'If you liked this post and wants to chat feel free to send me an '
const OR_CONTACT_ME_VIA = ' or contact me via '
const TWITTER = 'Twitter'
const MAIL_ADDRESS='sofiaromorales@gmail.com'
const TWITTER_ADDRESS='https://twitter.com/sofiaromorales'

const PostFooter = () => {
    return (
        <div className='PostFooter border-dashed border-2 rounded py-10'>
            <p className='text-center text-lg'>
                {IF_YOU_LIKED}
                <a href={`mailto:${MAIL_ADDRESS}`}>
                    {EMAIL}
                </a>
                {OR_CONTACT_ME_VIA}
                <a href={TWITTER_ADDRESS}>
                    {TWITTER}
                </a> 💜
            </p>

        </div>
    )
}

export default PostFooter
