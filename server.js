var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
    res.send("<h1>Home Page</h1>")
})

app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})