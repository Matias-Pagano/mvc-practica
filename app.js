const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const port = process.env.PORT

const rutaHome = require('./routes/main');

app.use('/', rutaHome);

const rutaAbout = require('./routes/about');

app.use('/about', rutaAbout);

app.listen(port || 5000, () => {
    if (port == undefined) {
        console.log('Servidor funcionando en el puerto 5000')
    } else {
        console.log('Servidor funcionando en el puerto ' + port)
    }
})