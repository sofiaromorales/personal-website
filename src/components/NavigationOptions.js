import React from 'react'

const navigationOptions = [
    {
        title: 'About',
        link: '#AboutMe'
    },
    {
        title: 'Skills',
        link: '#Skills'
    },
    {
        title: 'Work',
        link: '#Work'
    },
    {
        title: 'Awards',
        link: '#Awards'
    },
    {
        title: 'Blog',
        link: '/posts/'
    }
]

const NavigationOptions = () => {

    const renderNavigationOptions = () => {
        return navigationOptions.map(o => {
            return (
                <div className='sm:px-3 lg:px-8'>
                    <a href={o.link}>
                        <p className='font-sans text-xl'>
                            {o.title}
                        </p>
                    </a>
                </div>
            )
        })
    }

    return (
        <div className='NavigationOptions grid grid-flow-col'>
            {renderNavigationOptions()}
        </div>
    )
}

export default NavigationOptions
