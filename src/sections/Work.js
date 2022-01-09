import React from 'react'

import ProjectCard from '../components/ProjectCard'

const MY_WORK = 'My Work'
const OTHERS = 'Others'
const MAIN_PROJECTS = [
    {
        description: 'WWDC21 Swift playground',
        language: 'Swift',
        name: 'Cellular Automata',
        image_url: 'https://user-images.githubusercontent.com/49292858/147419390-df73c586-2619-494d-8c4f-724a6b8667ac.png'
    },
    {
        description: 'TODO App',
        language: 'Javascript React Electron',
        name: 'Get Shit Done',
        image_url: 'https://user-images.githubusercontent.com/49292858/147419388-a09bc744-fa3a-4846-960e-ae7d7afcaa76.png'
    }
]

const LANGUAGE_COLORS = [
    {
        language:'Swift',
        color: 'bg-indigo-500'
    },
    {
        language:'Javascript',
        color: 'bg-green-500'
    }
]

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
            <div className='px-48'>
                <p className='subtitle font-medium text-lg tracking-widest'>
                    {`${OTHERS.toUpperCase()}`}
                </p>
            </div>
        </div>
    )
}

export default Work
