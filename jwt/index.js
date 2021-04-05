require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const verifyToken = require('./middleware//auth')
const app = express()
const port = 3000

app.use(express.json())

let data = [
    {
        id: 1,
        username: 'hien',
        token: null
    },
    {
        id: 2,
        username: 'thai',
        token: null
    },
    {
        id: 3,
        username: 'nguyen',
        token: null
    },
]

const posts = [
    {
        userId: 1,
        post: 'post hien'
    },
    {
        userId: 2,
        post: 'post thai'
    },
    {
        userId: 1,
        post: 'post hien 2'
    },

]

app.get('/', verifyToken, (req, res) => {
    const post = posts.filter(post => post.userId === req.userId)
    res.json(post)
})

const updeteToken = (username, token) => {
    data = data.map(user => {
        if (user.username === username)
            return {
                ...user,
                token
            }

            return user
    })
}
app.post('/login', (req, res) => {
    const username1 = req.body.username
    const user = data.find(user => user.username === username1)
    if (!user) return res.sendStatus(401)
    const {id,username} = user
    
    

    //creacteJWt
    const accesstoken = jwt.sign({id, username}, process.env.ACCESS_TOKEN, { expiresIn: '20m' })
    updeteToken(username, accesstoken)
    console.log(data);
    res.json({ accesstoken })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})