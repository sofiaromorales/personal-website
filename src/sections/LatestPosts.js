import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import PostTile from '../components/PostTile'

import {
    API_ROOT,
    BACKGROUND_COLORS,
    CHECK_ALL_POSTS,
    LANGUAGE_COLORS,
    LATEST_POSTS,
    POSTS_LINK
} from '../constants'

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
        return BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)]
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
            <div className='px-48 grid grid-cols-2 xl:grid-cols-3 gap-10 pb-20'>
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
