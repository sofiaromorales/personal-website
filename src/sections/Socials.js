import React from 'react'

const LETS_CONNECT = `Let's Connect`

const SOCIALS = [{
    name: 'Polywork',
    link: 'https://www.polywork.com/sofiaromorales',
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148478675-7b51ca23-59f8-4caf-95be-e41b3f507e05.png'
}, {
    name: 'Twitter',
    link: 'https://twitter.com/sofiaromorales',
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148478680-ddb265f0-758e-4b5e-b7e0-99c03e990f86.png'
},{
    name: 'GitHub',
    link: 'https://github.com/sofiaromorales',
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148478686-4087d173-9625-433b-9fec-99e6daf1962f.png'
}]

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
            <div className='grid grid-flow-col auto-cols-max gap-20 px-48 pb-20 justify-center'>
                {renderSocials()}
            </div>
        </div>
    )
}

export default Socials
