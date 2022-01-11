import React from 'react'

import PostTileLight from '../components/PostTileLight'

import { API_ROOT } from '../constants'

const ME_AND_MY_THOUGHTS = 'Me & my thoughts'
const WELCOME_TO_MY_BLOG = 'Welcome to my blog, here you will find some of my thoughts and experiences, some abouth tech some not.'

// const posts = [{
//     date: 'OCT 31, 2021',
//     title: 'SOLID Principles',
//     subject: 'SOFTWARE AND SYSTEMS'
// }, {
//     date: 'OCT 31, 2021',
//     title: 'SOLID Principles',
//     subject: 'SOFTWARE AND SYSTEMS'
// }, {
//     date: 'OCT 31, 2021',
//     title: 'SOLID Principles',
//     subject: 'SOFTWARE AND SYSTEMS'
// }]

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

class Posts extends React.Component {

    state = {
        posts: [],
    }

    componentDidMount(){
        fetch(`${API_ROOT}/all-posts`)
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
            this.setState({ posts: posts })
        })
        .catch(error => {
            console.log('an error occurred:');
            console.log(error);
        })
    }

    render() {

        const {
            posts
        } = this.state

        const renderPosts = () => {
            return posts.map(post => {

                const subjectColor = LANGUAGE_COLORS.find(color => (
                    color.language == post.subject.split(' ')[0]
                ))
                return (
                    <div>
                        <PostTileLight
                            post={post}
                            subjectColor={subjectColor}
                        />
                    </div>
                )
            })
        }

        return (
            <div className='Posts grid auto-rows-max'>
                <div className='top-bar py-8 px-36'>
                    <p className='font-sans text-4xl font-bold tracking-wide'>
                        {`Sofía Rodríguez`}
                    </p>
                </div>
                <hr />
                <div className='title px-36 py-8'>
                    <p className='text-5xl font-semibold'>
                        {ME_AND_MY_THOUGHTS}
                    </p>
                </div>
                <div className='px-36 pb-20'>
                    <p className='welcome text-2xl'>
                        {WELCOME_TO_MY_BLOG}
                    </p>
                </div>
                <div className='posts-list grid grid-cols-3 gap-8 px-36'>
                    {renderPosts()}
                </div>
            </div>
        )
    }
}

export default Posts
