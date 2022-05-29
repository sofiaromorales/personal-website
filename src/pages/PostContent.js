import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import moment from 'moment'

import { API_ROOT } from '../constants'

import PostHeader from '../components/PostHeader'
import PostFooter from '../components/PostFooter'
import PostSocialsFooter from '../components/PostSocialsFooter'

import {
    BACK_TO_POSTS,
    POSTS_LINK
} from '../constants'

class PostContent extends React.Component {

    state = {
        date: null,
        post: null,
        time: null,
        title: null
    }

    componentDidMount() {
        
        if (this.props.match.params.id != null) {
            fetch(`${API_ROOT}/post/${this.props.match.params.id}`)
                .then(response => {
                    if (response.ok) {
                        return Promise.resolve(response)
                    } else {
                        throw new Error()
                    }
                })
                .then(response => response.text())
                .then(response => {
                    const post = response
                    this.setState({ post: post })
                    this.setState({ title: this.props.match.params.id.slice(0, this.props.match.params.id.indexOf('_',1)) })
                    this.setState({
                        date: this.props.match.params.id.slice(
                                this.props.match.params.id.indexOf('_',1) + 1,
                                this.props.match.params.id.indexOf('_', this.props.match.params.id.indexOf('_',1) + 2)
                            )
                    })
                    this.setState({ time: post.slice(0, post.indexOf('\n',1)) })
                })
                .catch(error => {
                    console.log('An error ocurred:' + error);
                })
        }
        
    }

    renderPost = (post) => {
        return (
            <ReactMarkdown
                children={this.state.post.slice(post.indexOf('\n',1))}
                components={{
                    p: ({ node, children }) => {
                        if (node.children[0].tagName === 'img') {
                            const image: any = node.children[0];
                            return (
                                <div className='image'>
                                    <img
                                        src={image.properties.src}
                                        alt={image.properties.alt}
                                        style={{ width: 'auto',maxWidth: 700, display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
                                    />
                                </div>
                            );
                        }
                        return (
                            <div className='my-2'>
                                <p className='text-md leading-loose'>
                                    {children}
                                </p>
                            </div>
                        )
                    },
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dracula}
                                language={match[1]}
                                PreTag='div'
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        )
    }

    render() {

        const {
            color1,
            color2,
            color3
        } = this.props.match.params

        return (
            <div className='PostContent'>
                <PostHeader />
                <hr/>
                <div
                    className='post-hero h-72 grid grid-cols-max justify-center content-center'
                    style={{
                        background: `linear-gradient(-45deg, #${color1}, #${color2}, #${color3})`,
                        backgroundSize: `400% 400%`
                    }}
                >
                    <div className='post-title'>
                        <p className='text-4xl font-bold tracking-wide'>
                            {this.state.title}
                        </p>
                    </div>
                </div>
                <div className='px-8 md:px-60 pt-10'>
                    <Link to={POSTS_LINK}>
                        <p className='secondary-text text-lg'>
                            {BACK_TO_POSTS}
                        </p>
                    </Link>
                </div>
                <div className='px-8 md:px-60 pt-10 mb-20'>
                    <p className='mb-10'>
                        {`${moment(this.state.date).format('MMMM Do YYYY')}  🔥 ${this.state.time}  🔥`}
                    </p>
                    <p className='text-5xl'>
                        {this.state.title}
                    </p>
                    {this.state.post &&
                        this.renderPost(this.state.post)
                    }
                </div>
                <div className='px-8 md:px-60'>
                    <PostFooter/>
                </div>
                <div className='grid grid-flow-col auto-cols-max px-8 md:px-60 mt-20 justify-center mb-20'>
                    <Link to={POSTS_LINK}>
                        <div className='back-to-posts px-5 py-2 border rounded border-4'>
                            <p className='secondary-text font-extrabold text-center text-lg'>
                                {BACK_TO_POSTS}
                            </p>
                        </div>
                    </Link>
                </div>
                <PostSocialsFooter/>
            </div>
        )
    }
}

export default PostContent
