const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const newsRouter = require('./src/routes/news')

const PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.use(bodyParser.urlencoded({extended: true}))

//Templating engines
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Routes
app.use('/', newsRouter)
app.use('/article', newsRouter)


app.listen(PORT, () => console.log(`App is running on port ${PORT}`))