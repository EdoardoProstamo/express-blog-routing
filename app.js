const expressFile = require('express');
const app = expressFile();
const port = 2800;

// server
app.listen(port, () => {
    console.log('Attivazione del server sulla porta ' + port);
});
