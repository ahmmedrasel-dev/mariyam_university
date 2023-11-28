import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import globalErrHandler from './app/middlewares/globalErrHandler';
import NotFound from './app/middlewares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);
// app.use('/api/v1/users', UserRoute);

app.use(globalErrHandler);
app.use(NotFound);

export default app;
