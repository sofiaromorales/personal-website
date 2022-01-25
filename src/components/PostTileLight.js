import React from 'react'
import { Link } from 'react-router-dom'

const POST_LINK = '/posts/'

const PostTileLight = (props) => {

    const {
        post,
        subjectColor,
        color1,
        color2,
        color3
    } = props

    return (
        <div
            className='PostTileLight grid rows-auto-max'
        >
            <Link to={POST_LINK + `${post.id}/${color1.substring(1)}/${color2.substring(1)}/${color3.substring(1)}`}>
                <div
                    className='post-hero h-28'
                    style={{
                        background: `linear-gradient(-45deg, ${color1}, ${color2}, ${color3})`,
                        backgroundSize: `400% 400%`
                    }}
                >
                </div>
                <div className='post-description rounded-b-lg'>
                    <div className='grid rows-auto-max my-10 mx-10 truncate'>
                        <div className='post-date mb-4'>
                            <p className='font-medium tracking-widest'>
                                {post.date.toUpperCase()}
                            </p>
                        </div>
                        <div className='post-title mb-2'>
                            <p className='text-2xl'>
                                {post.title}
                            </p>
                        </div>
                        <div className='post-subject flex justify-start'>
                            <div className={`circle h-3 w-3 mr-5 my-auto ${subjectColor ?? 'bg-indigo-500'}`}>
                            </div>
                            <div>
                                <p>
                                    {post.subject.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PostTileLight
