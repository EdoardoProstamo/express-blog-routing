const expressFile = require('express');
const app = expressFile();
const port = 2800;

//richiamo di routers
const dessertRouter = require('./routers/rotte.js');

//rotta '/rotte.js' richiamata da routers
app.use('/rotte.js', dessertRouter);
// asset statici
app.use(expressFile.static('public'));


// server
app.listen(port, () => {
    console.log('Attivazione del server sulla porta ' + port);
});