
import express from 'express';
import statusRoute from './routes/status.route';
import usersRouter from './routes/users.route';

const app = express();

//Application settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes Settings
app.use(statusRoute);
app.use(usersRouter);

//Start Server
app.listen(3000, () => {
    console.log('Application running on port 3000');
});

