const SITE_ROOT = process.env.NODE_ENV == 'production'
    ? 'https://www.sofiaro.com'
    : 'http://localhost:4000'

export const API_ROOT = `${SITE_ROOT}/api`

export const ABOUT_ME_P1 = `Hi I'm Sofía`
export const ABOUT_ME_P2 ='I’m a iOS and web developer based in Caracas, Venezuela. I specialize in building beautifull products that makes a transparent impact in peoples life. I’m an open source advocate a technical writer in development.'
export const ABOUT_ME_P3 = 'I also like teaching, playing music and doing video content. I considre myself an Apple fan and very nerdy in what comes to software architectures.'

export const AWARDS_LIST = [{
    title: 'WWDC Award',
    description: 'WWDC Scholarship winner in 2016, 2017 and 2018. Invited by Apple to its annual iOS developer conference.',
    image: 'https://user-images.githubusercontent.com/49292858/148313211-17da788b-637c-461a-9c81-1598a3387d37.png'
}, {
    title: 'GITHUB CAMPUS EXPERT',
    description: 'Selected by GitHub in 2021 to represent GitHub Education in Venezuela',
    image: 'https://user-images.githubusercontent.com/49292858/148312513-0a1e6acc-726d-4c0c-84c0-5e5c64f044d5.png'
}, {
    title: 'HACKTOBERFEST WINNER',
    description: '2021 Open Source hacking event by Github DigitalOcean and DEV',
    image: 'https://user-images.githubusercontent.com/49292858/148312580-2972b86f-d176-47e5-8d67-67b53dad6acf.png'
}, {
    title: 'UCAB GLOCAL',
    description: 'Awarded by UCAB as a student that makes global impact and in local communities',
    image: 'https://user-images.githubusercontent.com/49292858/148312530-d7d82166-c603-462b-9ce4-c015ea98441c.png'
}]
export const BACKGROUND_COLORS = ['#5348cf', '#331454', '#3F45D2', '#B30FB0', '#E73C7E', '#EE7752', '#48cf8b', '#43BAA6',  '#3D488E', '#525fee']
export const FEATURES = [{
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148475832-c49b6420-3021-440b-bf10-50ac22c163bf.png',
    postUrl: 'https://es.abcufoundation.org/sofia-rodriguez/',
    alt:'ucabista'
}, {
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148474629-95d98b04-4255-44ba-92e2-60320cb7a60b.png',
    postUrl: 'https://elucabista.com/2018/07/11/sofia-rodriguez-futura-ingeniera-reconocida-por-apple/',
    alt: 'abcu foundation'
}]
export const LANGUAGE_COLORS = [
    {
        language:'Swift',
        color: 'bg-indigo-500'
    },
    {
        language:'Javascript',
        color: 'bg-green-500'
    }
]
export const MAIN_PROJECTS = [
    {
        description: 'WWDC21 Swift playground',
        language: 'Swift',
        name: 'Cellular Automata',
        image_url: 'https://user-images.githubusercontent.com/49292858/147419390-df73c586-2619-494d-8c4f-724a6b8667ac.png'
    },
    {
        description: 'TODO App',
        language: 'Javascript React Electron',
        name: 'Get Shit Done',
        image_url: 'https://user-images.githubusercontent.com/49292858/147419388-a09bc744-fa3a-4846-960e-ae7d7afcaa76.png'
    }
]
export const NAVIGATION_OPTIONS = [{
    name: 'About Me',
    link: '#AboutMe'
}, {
    name: 'Skills',
    link: '#Skills'
}, {
    name: 'Work',
    link: '#Work'
}, {
    name: 'Awards',
    link: '#Awards'
}, {
    name: 'Posts',
    link: '/posts/'
}]
export const SOCIALS = [{
    name: 'Polywork',
    link: 'https://www.polywork.com/sofiaromorales',
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148478675-7b51ca23-59f8-4caf-95be-e41b3f507e05.png'
}, {
    name: 'Twitter',
    link: 'https://twitter.com/sofiaromorales',
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148478680-ddb265f0-758e-4b5e-b7e0-99c03e990f86.png'
},{
    name: 'GitHub',
    link: 'https://github.com/sofiaromorales',
    imageUrl: 'https://user-images.githubusercontent.com/49292858/148478686-4087d173-9625-433b-9fec-99e6daf1962f.png'
}]
export const SOFTSKILLSLIST = ['Fast Learner', 'Open Source Passionate', 'Accessibility Advocate', 'Full Stack developer', 'Designing systems end to end']
export const TECHNICALSKILLSLIST = ['Swift', 'Javascript', 'Git', 'UI & UX']
export const TECHNOLOGIES = ['GraphQL', 'Redux', 'React', 'REST', 'UIKit', 'Apollo', 'NodeJS', 'SwiftUI', 'Design Systems', 'Electron', 'Express', 'Sockets', 'SQL']

export const MAIL_ADDRESS='sofiaromorales@gmail.com'
export const POSTS_LINK = '/posts/'
export const PROFILE_IMAGE_URL = 'https://user-images.githubusercontent.com/49292858/146709506-574c8cb4-e492-4252-a400-073b6aa590c9.png'
export const TWITTER_ADDRESS='https://twitter.com/sofiaromorales'

export const AWARDS = 'Awards'
export const BACK_TO_POSTS = 'Back to posts'
export const CHECK_ALL_POSTS = 'Check All Posts'
export const EMAIL = 'email'
export const FEATURED_ON = 'Featured On'
export const IF_YOU_LIKED = 'If you liked this post and wants to chat feel free to send me an '
export const LATEST_POSTS = 'Latest Posts'
export const LETS_CONNECT = `Let's Connect`
export const ME_AND_MY_THOUGHTS = 'Me & my thoughts'

export const MY_WORK = 'My Work'
export const OR_CONTACT_ME_VIA = ' or contact me via '
export const OTHERS = 'Others'
export const QUOTE1 = `I'm a Problem Solver`
export const QUOTE2 = `I'm a Product Designer`
export const QUOTE3 = `I'm a Problem Solver`
export const SOFIA_RODRIGUEZ = 'Sofía Rodríguez'
export const SKILLS = 'Skills'
export const TWITTER = 'Twitter'
export const WELCOME_TO_MY_BLOG = 'Welcome to my blog, here you will find some of my thoughts and experiences, some abouth tech some not.'
