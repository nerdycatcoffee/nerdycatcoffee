const express = require('express')
const app = express()
const port = process.env.PORT || 3081
const path = require('path');


app.use('/images',express.static(path.join(__dirname, '/src/images')));
app.use('/js',express.static(path.join(__dirname, '/src/js')));
app.use('/css',express.static(path.join(__dirname, '/src/css')));
app.use('/static',express.static(path.join(__dirname, '/src/static')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
})


app.get('/privacy.html', (req, res) => {
    res.sendFile(__dirname + '/src/privacy.html');
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})