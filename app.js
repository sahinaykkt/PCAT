const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.get('/announcements', (req, res) => {
  const jsonData = fs.readFileSync('./data.json', 'utf8');

  res.send(jsonData);
});

app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
