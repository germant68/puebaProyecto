const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});

//envia el archivo al navegador
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})