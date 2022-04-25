import React from 'react'

import PostHeader from '../components/PostHeader'
import PostSocialsFooter from '../components/PostSocialsFooter'
import PostTileLight from '../components/PostTileLight'

import {
    API_ROOT,
    BACKGROUND_COLORS,
    LANGUAGE_COLORS,
    ME_AND_MY_THOUGHTS,
    WELCOME_TO_MY_BLOG
} from '../constants'


class Posts extends React.Component {

    state = {
        posts: []
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
        return BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)]
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
            <div className='Posts'>
                <PostHeader />
                <hr />
                <div className='title px-8 md:px-20 xl:px-36 py-8'>
                    <p className='text-5xl font-semibold'>
                        {ME_AND_MY_THOUGHTS}
                    </p>
                </div>
                <div className='px-8 md:px-20 xl:px-36 pb-20'>
                    <p className='welcome text-2xl'>
                        {WELCOME_TO_MY_BLOG}
                    </p>
                </div>
                <div className='posts-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 md:px-20 xl:px-36'>
                    {renderPosts()}
                </div>
                <PostSocialsFooter/>
            </div>
        )
    }
}

export default Posts
