const expressFile = require('express');
const app = expressFile();
const port = 2800;

// server
app.listen(port, () => {
    console.log('Attivazione del server sulla porta ' + port);
});

//richiamo di routers
const dessertRouter = require('./routers/posts.js');
//rotta '/posts.js' richiamata da routers
app.use('posts/');

// asset statici
app.use(expressFile.static('public'));