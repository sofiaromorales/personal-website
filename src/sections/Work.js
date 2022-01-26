import React from 'react'

import ProjectCard from '../components/ProjectCard'

import {
    OTHERS,
    LANGUAGE_COLORS,
    MAIN_PROJECTS,
    MY_WORK
} from '../constants'


const renderMainProjects = () => {
    return MAIN_PROJECTS.map(p => {
        const languageColor = LANGUAGE_COLORS.find(color => (
            color.language == p.language.split(' ')[0]
        ))
        return (
            <div>
                <ProjectCard
                    description={p.description}
                    imageUrl={p.image_url}
                    language={p.language}
                    languageColor={languageColor.color}
                    name={p.name}
                />
            </div>
        )
    })
}

const Work = () => {
    return (
        <div
            id='Work'
            className='Work grid auto-rows-max py-24'
        >
            <div className='px-60 pb-20'>
                <p className='title font-sans font-bold text-5xl'>
                    {`${MY_WORK}`}
                </p>
            </div>
            <div className='grid grid-cols-2 px-48 gap-8 pb-20'>
                {renderMainProjects()}
            </div>
            {// <div className='px-48'>
            //     <p className='subtitle font-medium text-lg tracking-widest'>
            //         {`${OTHERS.toUpperCase()}`}
            //     </p>
            // </div>
        }
        </div>
    )
}

export default Work
