import React from 'react'

const QUOTE1 = `I'm a Problem Solver`
const QUOTE2 = `I'm a Product Designer`
const QUOTE3 = `I'm a Problem Solver`

const renderQuotes = (quotes) => {
    return quotes.map(q => {
        return (
            <p className='font-sans font-bold text-5xl text-center pb-5'>
                {q}
            </p>
        )
    })
}

const AboutMe = (props) => {
    return (
        <div className='AboutMe h-screen grid grid-rows-2 pt-24'>
            <div className='grid grid-cols-3'>
                <div/>
                <div>
                    <div className='grid grid-flow-row auto-rows-max justify-center quote'>
                        { renderQuotes([QUOTE1, QUOTE2, QUOTE3]) }
                    </div>
                </div>
                <div/>
            </div>
        </div>
    )
}

export default AboutMe
