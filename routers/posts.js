const expressFile = require('express');
const router = expressFile.Router();
//array posts
const dessers = require('../data/lista-dessert.js');

// rotta '/'  (index)
router.get('/', (req, res) => {
    res.send('Lista dei dessert disponibili');
});

//rotta /:id (show) 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Dessert con id ${id}`);
});

//destroy
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Elimino il dessert con l'id ${id}`);
});

// rotta / (store)
router.post('/', (req, res) => {
    res.send(`Aggiungo un nuovo dessert `);
});

// rotta /:id (modify)
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Modifica dessert con id ${id}`);
});

// rotta /:id (update)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Modifico il dessert con id ${id}`);
});
  

  





module.exports = router;// esporto router