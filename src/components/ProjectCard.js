import React from 'react'

const ProjectCard = (props) => {

    const {
        description,
        imageUrl,
        language,
        languageColor,
        name
    } = props
    
    return (
        <div className='ProjectCard grid auto-rows-max rounded-md p-6'>
            <div className='grid auto-rows-max gap-4'>
                <div className='project-description'>
                    <p className='tracking-widest'>
                        {description.toUpperCase()}
                    </p>
                </div>
                <div className='project-name'>
                    <p className='font-bold text-3xl'>
                        {name}
                    </p>
                </div>
                <div className='project-languaje flex justify-start'>
                    <div className={`circle h-3 w-3 mr-5 my-auto ${languageColor}`}>
                    </div>
                    <div>
                        <p>
                            {language.toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-4'>
                <img
                    src={imageUrl}
                    alt={name}
                    className='h-40'
                />
            </div>

        </div>
    )
}

export default ProjectCard
