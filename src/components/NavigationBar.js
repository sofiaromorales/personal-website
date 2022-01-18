import React, { useEffect } from 'react'

const NAVIGATION_OPTIONS = [{
    name: 'About Me',
    link: '#AboutMe'
}, {
    name: 'Skills',
    link: '#Skills'
}, {
    name: 'Work',
    link: '#Work'
}, {
    name: 'Awards',
    link: '#Awards'
}, {
    name: 'Posts',
    link: '#Posts'
}]

const NavigationBar = () => {

    const renderNavigationOptions = () => {
        return (
            NAVIGATION_OPTIONS.map(opt => {
                return (
                    <div className='link-option'>
                        <a href={opt.link}>
                            <p className='tracking-widest font-semibold'>
                                {opt.name.toUpperCase()}
                            </p>
                        </a>
                    </div>
                )
            })
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight + 200 && window.location.pathname == '/') {
            document.getElementsByClassName('NavigationBar')[0].style.top = '0'
            document.getElementsByClassName('NavigationBar')[0].style.setProperty('--navigation-background', 'linear-gradient(180deg, rgba(255,255,255,0.365983893557423) 0%, rgba(255,255,255,0) 100%)');
        } else if (window.location.pathname == '/') {
            document.getElementsByClassName('NavigationBar')[0].style.top = '-100px';
            document.getElementsByClassName('NavigationBar')[0].style.setProperty('--navigation-background', 'black');
        }
    }

    return (
        <div
            className='
                NavigationBar
                grid
                grid-flow-col
                grid-cols-2
                h-20
                px-28
                gap-8
                content-center
            '
        >
            <div className='title'>
                <p className='font-sans text-3xl font-bold tracking-wide'>
                    Sofía Rodríguez
                </p>
            </div>
            <div className='
                grid
                grid-flow-col
                auto-cols-max
                gap-8
                justify-end
                content-center
            '>
                {renderNavigationOptions()}
            </div>
        </div>




    )
}

export default NavigationBar
