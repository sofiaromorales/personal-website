import React from 'react'

const navigationOptions = [
    {
        title: 'About',
        link: ''
    },
    {
        title: 'Work',
        link: ''
    },
    {
        title: 'Awards',
        link: ''
    },
    {
        title: 'Blog',
        link: ''
    }
]

const NavigationOptions = () => {

    const renderNavigationOptions = () => {
        return navigationOptions.map(o => {
            return (
                <div className='sm:px-3 lg:px-8'>
                    <p className='font-sans text-xl'>
                        {o.title}
                    </p>
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
