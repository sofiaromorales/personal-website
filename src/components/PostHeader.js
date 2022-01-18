import React from 'react'
import { Link } from 'react-router-dom'

const HOME_LINK = '/'

const PostHeader = () => {
    return (
        <div className='PostHeader grid auto-rows-max'>
            <div className='top-bar py-8 px-36'>
                <Link to={HOME_LINK}>
                    <p className='font-sans text-4xl font-bold tracking-wide'>
                        {`Sofía Rodríguez`}
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default PostHeader
