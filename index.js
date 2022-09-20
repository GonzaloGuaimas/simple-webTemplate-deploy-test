//----Encabezado
const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'))

//index.js
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})
// index.js
module.exports = app

/*
const bodyParser= require('body-parser')
const port = process.env.PORT || 3000

//----Express
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs') 
app.use(express.static(__dirname + '/public'))
app.listen(port, function() {
    console.log('Enlazado a Puerto')
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})
*/
