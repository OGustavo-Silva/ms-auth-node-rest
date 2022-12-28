
import express, {Request, Response, NextFunction} from 'express';
import usersRouter from './routes/users.route';

const app = express();

//Application settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes Settings
app.use(usersRouter);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'bar'});
});

//Start Server
app.listen(3000, () => {
    console.log('Application running on port 3000');
});

