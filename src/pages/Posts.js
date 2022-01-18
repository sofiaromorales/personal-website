import React from 'react'

import PostHeader from '../components/PostHeader'
import PostSocialsFooter from '../components/PostSocialsFooter'
import PostTileLight from '../components/PostTileLight'

import { API_ROOT } from '../constants'

const ME_AND_MY_THOUGHTS = 'Me & my thoughts'

const WELCOME_TO_MY_BLOG = 'Welcome to my blog, here you will find some of my thoughts and experiences, some abouth tech some not.'

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

const backgroundColors = ['#5348cf', '#331454', '#3F45D2', '#B30FB0', '#E73C7E', '#EE7752', '#48cf8b', '#43BAA6',  '#3D488E', '#525fee']


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
            console.log('An error occurred:');
            console.log(error);
        })
    }

    getRandomColor = () => {
        return backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
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
                const color1 = this.getRandomColor()
                const color2 = this.getRandomColor()
                const color3 = this.getRandomColor()
                return (
                    <div>
                        <PostTileLight
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
            <div className='Posts grid auto-rows-max'>
                <PostHeader />
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
                <PostSocialsFooter/>
            </div>
        )
    }
}

export default Posts
