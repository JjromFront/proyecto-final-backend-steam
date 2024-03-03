import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { sequelize, sincronizarModelos, verificarConexion } from './db';
import router from './router/index';


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('¡Hola mundo desde Express con TypeScript!');
});

app.use(router)

verificarConexion();
sincronizarModelos();


app.listen(port, async () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
