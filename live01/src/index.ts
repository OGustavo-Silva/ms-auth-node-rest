
import express, {Request, Response, NextFunction} from 'express';
import usersRouter from './routes/users.route';

const app = express();

app.use(usersRouter);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'bar'})
});

app.listen(3000, () => {
    console.log('Aplicacao executando na porta 3000');
});

