import React from 'react'

import SkillsCard from '../components/SkillsCard'

import { SKILLS } from '../constants'

const Skills = () => {
    return (
        <div
            id='Skills'
            className='Skills grid auto-rows-max py-24'
        >
            <div className='px-8 md:px-60'>
                <p className='title font-sans font-bold text-5xl pb-20'>
                    {`${SKILLS}`}
                </p>
            </div>
            <div className='px-8 md:px-48'>
                <SkillsCard/>
            </div>
        </div>
    )
}

export default Skills
