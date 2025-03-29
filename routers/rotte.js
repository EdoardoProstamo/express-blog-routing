const posts = require('./data/lista-dessert.js');
const router = expressFile.Router();
const expressFile = require('express');

// rotta '/'  (index)
router.get('/', (req, res) => {
    res.send('Lista dei dessert disponibili');
});



// rotta '/dessert' + json
app.get('/dessert', (req, res) => {
    res.json(posts);
});





module.exports = router;// esporto router