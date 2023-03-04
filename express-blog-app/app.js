const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.urlencoded({extended: false}))

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'post.html'))
})

app.post('/post', (req, res) => {
    const blogsPath = path.join(__dirname, 'data', 'blogs.json')

    fs.readFile(blogsPath, (err, blogs) => {
        const updatedBlogs = [...JSON.parse(blogs), req.body]
        fs.writeFile(blogsPath, JSON.stringify(updatedBlogs), () => {
            res.redirect("/post");
        })
    })
})

app.listen(5000);