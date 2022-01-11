import React from 'react'
import { Link } from 'react-router-dom'

import PostFooter from '../components/PostFooter'

const BACK_TO_POSTS = 'Back to posts'
const POST_LINK = '/posts/'

class PostContent extends React.Component {

    render() {
        return (
            <div className='PostContent grid grid-rows-max'>
                <div className='top-bar py-8 px-36'>
                    <p className='font-sans text-4xl font-bold tracking-wide'>
                        {`Sofía Rodríguez`}
                    </p>
                </div>
                <hr/>
                <div className='px-96 pt-10 mb-20'>
                    <Link to={POST_LINK}>
                        <p className='secondary-text text-lg'>
                            {BACK_TO_POSTS}
                        </p>
                    </Link>
                </div>
                <div className='px-96'>
                    <PostFooter/>
                </div>
                <div className='grid grid-flow-col auto-cols-max px-96 mt-20 justify-center'>
                    <Link to={POST_LINK}>
                        <div className='back-to-posts px-5 py-2 border rounded border-4'>
                            <p className='secondary-text font-extrabold text-center text-lg'>
                                {BACK_TO_POSTS}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PostContent
