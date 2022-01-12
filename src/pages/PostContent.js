import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { API_ROOT } from '../constants'

import PostFooter from '../components/PostFooter'

const BACK_TO_POSTS = 'Back to posts'
const POST_LINK = '/posts/'

class PostContent extends React.Component {

    state = {
        post: null
    }

    componentDidMount(){
        console.log('this.props.match');
        console.log(this.props);
        if (this.props.match.params.id != null){
            fetch(`${API_ROOT}/post/${this.props.match.params.id}`)
                .then(response => {
                    if (response.ok){
                        return Promise.resolve(response)
                    }else{
                        throw new Error()
                    }
                })
                .then(response => response.text())
                .then(response => {
                    const post = response
                    this.setState({ post: post })
                    //this.setState({ title: this.props.match.params.id.slice(0, this.props.match.params.id.indexOf('_',1))})
                    //this.setState({date: this.props.match.params.id.slice(this.props.match.params.id.indexOf('_',1) + 1, -3)})
                    //this.setState({time: post.slice(0, post.indexOf('\n',1))})
                })
                .catch(error =>{
                    console.log('An error ocurred:');
                    console.log(error);
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
                                        style={{ maxWidth: 700, display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
                                    />
                                </div>
                            );
                        }
                        // Return default child if it's not an image
                        return <p>{children}</p>;
                    },
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
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
                <div className='px-96 pt-10 mb-20'>
                    {this.state.post &&
                        this.renderPost(this.state.post)
                    }
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
