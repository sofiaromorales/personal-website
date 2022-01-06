import React from 'react'

import AwardTile from '../components/AwardTile'

const AWARDS = 'Awards'
const awardsList = [{
    title: 'WWDC Award',
    description: 'WWDC Scholarship winner in 2016, 2017 and 2018. Invited by Apple to its annual iOS developer conference.',
    image: 'https://user-images.githubusercontent.com/49292858/148313211-17da788b-637c-461a-9c81-1598a3387d37.png'
}, {
    title: 'GITHUB CAMPUS EXPERT',
    description: 'Selected by GitHub in 2021 to represent GitHub Education in Venezuela',
    image: 'https://user-images.githubusercontent.com/49292858/148312513-0a1e6acc-726d-4c0c-84c0-5e5c64f044d5.png'
}, {
    title: 'HACKTOBERFEST WINNER',
    description: '2021 Open Source hacking event by Github DigitalOcean and DEV',
    image: 'https://user-images.githubusercontent.com/49292858/148312580-2972b86f-d176-47e5-8d67-67b53dad6acf.png'
}, {
    title: 'UCAB GLOCAL',
    description: 'Awarded by UCAB as a student that makes global impact and in local communities',
    image: 'https://user-images.githubusercontent.com/49292858/148312530-d7d82166-c603-462b-9ce4-c015ea98441c.png'
}]

const Awards = () => {

    const renderAwards = () => {
        return awardsList.map(award => {
            return (
                <div>
                    <AwardTile
                        award={award}
                    />
                </div>
            )
        })
    }


    return (
        <div className='Awards grid auto-rows-max py-24'>
            <div className='px-60'>
                <p className='title font-sans font-bold text-5xl pb-20'>
                    {AWARDS}
                </p>
            </div>
            <div className='px-48'>
                <div className='grid grid-cols-4 gap-10'>
                    {renderAwards()}
                </div>
            </div>
        </div>
    )
}

export default Awards
