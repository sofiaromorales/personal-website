import React from 'react'

const AwardTile = (props) => {

    const {
        award
    } = props

    return (
        <div className='AwardTile grid auto-rows-max flex justify-center'>
            <div className='award-circle h-60 w-60 mx-auto'>
                <div className='h-full relative'>
                    <img
                        src={award.image}
                        alt='award'
                        className='award-image absolute w-6/12'
                    />
                </div>
            </div>
            <div className='award-title mt-10'>
                <p className='text-center text-xl font-medium tracking-widest'>
                    {award.title.toUpperCase()}
                </p>
            </div>
            <div className='award-description mt-10 mx-5'>
                <p className='text-center text-lg'>
                    {award.description}
                </p>
            </div>
        </div>
    )
}

export default AwardTile
