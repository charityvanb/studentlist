const express = require('express')
const app = express()
const port = process.env.PORT || 3003

app.listen (port, () => {
    console.log(`listening on ${port}`)
})


app.get('/', (req, res) =>{
    res.send("The route worked!")
})

