import 'dotenv/config';
import express from 'express';
import routesOrdenes from './routes/ordenesMantenimiento.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/ordenes', routesOrdenes);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto '+ PORT))
}catch (e) {
    console.log('error')
    console.log(e);
}
