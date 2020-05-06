const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Mostrar contenido estatico con express
app.use(express.static( __dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); 

// Solicitud GET cuando el path sea un slash
app.get('/', (req, res) => {
    // res.send('Hola mundo en espaniol :v');
    // Se renderiza los archivos HBS dentro de views, por defecto es views
    res.render('home', {
        nombre: 'david rios',
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
    });
})

app.get('/data', (req, res) => {   
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});