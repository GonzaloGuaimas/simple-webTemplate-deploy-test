//----Encabezado
const express = require('express');
const app = express();
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
  //res.render('index.ejs')
  req.setEncoding("hola mundo")
})
