import React from 'react'

const ME_AND_MY_THOUGHTS = 'Me & my thoughts'
const WELCOME_TO_MY_BLOG = 'Welcome to my blog, here you will find some of my thoughts and experiences, some abouth tech some not.'

class Posts extends React.Component {
    render() {
        return (
            <div className='Posts grid auto-rows-max px-28'>
                <div className='top-bar'>
                    <p>
                        {`Sofía Rodríguez`}
                    </p>
                </div>
                <div className='title'>
                    <p>
                        {ME_AND_MY_THOUGHTS}
                    </p>
                </div>
                <div>
                    {WELCOME_TO_MY_BLOG}
                </div>
                <div className='posts-list'>
                </div>
            </div>
        )
    }
}

export default Posts
