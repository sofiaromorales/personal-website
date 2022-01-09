import React from 'react'

import SkillsCard from '../components/SkillsCard'

const SKILLS = 'Skills'

const Skills = () => {
    return (
        <div
            id='Skills'
            className='Skills grid auto-rows-max py-24'
        >
            <div className='px-60'>
                <p className='title font-sans font-bold text-5xl pb-20'>
                    {`${SKILLS}`}
                </p>
            </div>
            <div className='px-48'>
                <SkillsCard/>
            </div>
        </div>
    )
}

export default Skills
