require('dotenv').config();
var hbs = require('hbs');
const express = require('express');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Barbara da Silva',
    titulo: 'Curso de Node'
  })
});

app.get('/generic', function (req, res) {
  //res.sendFile(__dirname + '/public/generic.html')
  res.render('generic', {
    nombre: 'Barbara da Silva',
    titulo: 'Curso de Node'
  })
});

app.get('/elements', function (req, res) {
  //res.sendFile(__dirname + '/public/elements.html')
  res.render('elements', {
    nombre: 'Barbara da Silva',
    titulo: 'Curso de Node'
  })
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  });

app.listen(port);

console.log("Escuchando el puerto",port);