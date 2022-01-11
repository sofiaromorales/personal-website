const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 4000;
// const whitelist = [
//     'http://localhost:3000',
//     'https://localhost:3000',
//     'http://localhost:4000',
//     'https://localhost:4000',
//     'https://www.sofiaro.com'
// ]
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, true)
    },
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,OPTIONS'],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control']
}

app.use(express.static(__dirname + '/build'))
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('*', function (req, res, next) {
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }
    fs.readFile(__dirname + '/build/index.html', 'utf8', function (err, text) {
        res.send(text);
    })
})

app.get('/api/all-posts', (req, res) => {
    const file = fs.readdirSync('./api/docs/posts/')
    const posts = []
    file.map(p => {
        const title = p.slice(0, p.indexOf('_',1))
        const date = p.slice(p.indexOf('_', 1) + 1, p.indexOf('_', p.indexOf('_', 1) + 2))
        const subject= p.slice(p.indexOf('_', p.indexOf('_', 1) + 2) + 1, -3)
        const post = {
            id: p,
            date,
            title,
            subject
        }
        posts.push(post)
    })
    res.send(posts)
})

app.get('/api/post/:id', (req, res) => {
    const file = fs.readFileSync(`./api/docs/posts/${req.params.id}`)
    req.send(file)
})

app.listen(port, () => {
  console.log(`App listening port:${port}`)
})
