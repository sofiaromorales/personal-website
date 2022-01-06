import React from 'react'

import PostTile from '../components/PostTile'

const LATEST_POSTS = 'Latest Posts'
const CHECK_ALL_POSTS = 'Check All Posts'

const posts = [{
    date: 'OCT 31, 2021',
    title: 'SOLID Principles',
    subject: 'SOFTWARE AND SYSTEMS'
}, {
    date: 'OCT 31, 2021',
    title: 'SOLID Principles',
    subject: 'SOFTWARE AND SYSTEMS'
}, {
    date: 'OCT 31, 2021',
    title: 'SOLID Principles',
    subject: 'SOFTWARE AND SYSTEMS'
}]

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

const LatestPosts = () => {

    const renderPosts = () => {
        return posts.map(post => {
            const subjectColor = LANGUAGE_COLORS.find(color => (
                color.language == post.subject.split(' ')[0]
            ))
            return (
                <div>
                <PostTile
                    post={post}
                    subjectColor={subjectColor}
                />
                </div>
            )
        })
    }

    return (
        <div className='LatestPosts grid auto-rows-max py-24'>
            <div className='px-60'>
                <p className='title font-sans font-bold text-5xl pb-20'>
                    {LATEST_POSTS}
                </p>
            </div>
            <div className='px-48 grid grid-cols-3 gap-10 pb-20'>
                {renderPosts()}
            </div>
            <div className='posts-all px-48'>
                <p className='text-xl tracking-widest text-center'>
                    {CHECK_ALL_POSTS.toUpperCase()}
                </p>
            </div>
        </div>
    )
}
export default LatestPosts
