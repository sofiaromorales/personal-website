import React from 'react'

import AwardTile from '../components/AwardTile'

import {
    AWARDS,
    AWARDS_LIST,
} from '../constants'

const Awards = () => {

    const renderAwards = () => {
        return AWARDS_LIST.map(award => {
            return (
                <div>
                    <AwardTile award={award}/>
                </div>
            )
        })
    }

    return (
        <div
            id='Awards'
            className='Awards grid auto-rows-max pb-24'
        >
            <div className='px-8 md:px-60'>
                <p className='title font-sans font-bold text-5xl pb-20'>
                    {AWARDS}
                </p>
            </div>
            <div className='px-8 md:px-48'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                    {renderAwards()}
                </div>
            </div>
        </div>
    )
}

export default Awards
