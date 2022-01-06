import React from 'react'

const SOFTSKILLSLIST = ['Fast Learner', 'Creative Person', 'Open Source Passionate', 'Accessibility Advocate', 'Full Stack web developer', 'Designing systems end to end']
const TECHNICALSKILLSLIST = ['Swift', 'Javascript', 'Git', 'UI & UX']
const TECHNOLOGIES = ['GraphQL', 'Redux', 'React', 'REST', 'GraphQL', 'Apollo', 'NodeJS', 'SwiftUI', 'Design Systems', 'Electron', 'Express', 'Sockets', 'SQL']

const renderSkillsList = (skills) => {
    return skills.map(skill => {
        return (
            <p className='py-3 font-sans text-lg'>
                { skill }
            </p>
        )
    })
}

const renderSkillsGrid = (skills) => {
    return skills.map(skill => {
        return (
            <div>
                { skill }
            </div>
        )
    })
}

const SkillsCard = () => {
    return (
        <div className='SkillsCard grid grid-cols-2 p-10 rounded-md'>
            <div className='grid auto-rows-max content-between'>
                { renderSkillsList(SOFTSKILLSLIST) }
            </div>
            <div className='grid auto-rows-max'>
                { renderSkillsList(TECHNICALSKILLSLIST) }
                <div className='grid auto-rows-max technologies-list'>
                    <div className='grid grid-cols-4 pt-3 pb-5'>
                        { renderSkillsGrid(TECHNOLOGIES.slice(0, 4)) }
                    </div>
                    <div className='grid grid-cols-3 px-20 pb-5'>
                        { renderSkillsGrid(TECHNOLOGIES.slice(4, 7)) }
                    </div>
                    <div className='grid grid-cols-4 pb-5'>
                        { renderSkillsGrid(TECHNOLOGIES.slice(7, 11)) }
                    </div>
                    <div className='grid grid-cols-2 px-20 pb-5'>
                        { renderSkillsGrid(TECHNOLOGIES.slice(11, 13)) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard