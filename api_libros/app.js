const express = require('express');
const app = express();
app.use(express.json());

//Importamos le ROuter de Libros
const librosRouter = require('./routes/libros');

//IMportamos el MIddleware Error Handler
const errorHander = require('./middlewares/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHander);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});