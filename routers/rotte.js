const expressFile = require('express');
const router = expressFile.Router(); // eseguo 'Router' che esiste dentro express
const post = require('./data/script.js');


// rotta '/'
app.get('/', (req, res) => {
    res.send('Rotta principale');
});

// rotta '/dessert'
app.get('/dessert', (req, res) => {
    res.send('Rotta secondaria');
});


module.exports = router;// esporto router