import React from 'react'

const PostTileLight = (props) => {

    const {
        post,
        subjectColor
    } = props

    return (
        <div className='PostTileLight grid rows-auto-max'>
            <div className='post-hero h-28'>
            </div>
            <div className='post-description rounded-b-lg'>
                <div className='grid rows-auto-max my-10 mx-10'>
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
        </div>
    )
}

export default PostTileLight
