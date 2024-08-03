import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3030, (error) => {
    if (error) {
        console.log(error)
    }
    console.log('Run Server...');
})