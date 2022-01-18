import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { API_ROOT } from '../constants'

import PostTile from '../components/PostTile'

const LATEST_POSTS = 'Latest Posts'
const CHECK_ALL_POSTS = 'Check All Posts'
const backgroundColors = ['#5348cf', '#331454', '#3F45D2', '#B30FB0', '#E73C7E', '#EE7752', '#48cf8b', '#43BAA6',  '#3D488E', '#525fee']
const POSTS_LINK = 'posts/'

const latestPosts = [{
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

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`${API_ROOT}/latest-posts`)
        .then(response => {
            if (response.ok){
                return Promise.resolve(response)
            } else {
                throw new Error(response)
            }
        })
        .then(response => response.json())
        .then(response => {
            const posts = response
            setPosts(posts)
        })
        .catch(error => {
            console.log('An error occurred:');
            console.log(error);
        })
    }, [])

    const getRandomColor = () => {
        return backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    }

    const renderPosts = () => {
        return posts.map(post => {
            const subjectColor = LANGUAGE_COLORS.find(color => (
                color.language == post.subject.split(' ')[0]
            ))
            const color1 = getRandomColor()
            const color2 = getRandomColor()
            const color3 = getRandomColor()
            return (
                <div>
                    <PostTile
                        color1={color1}
                        color2={color2}
                        color3={color3}
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
                <Link to={POSTS_LINK}>
                    <p className='text-xl tracking-widest text-center'>
                        {CHECK_ALL_POSTS.toUpperCase()}
                    </p>
                </Link>
            </div>
        </div>
    )
}
export default LatestPosts
