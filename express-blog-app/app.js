const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.urlencoded({extended: false}))

const blogsPath = path.join(__dirname, 'data', 'blogs.json')

app.get('/post', (req, res) => {

})

app.post('/post', (req, res) => {
    const blog = req.body
})

app.listen(5000);