import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);
app.use('/api/v1/', routes);

// testing
app.get('/', async () => {
  throw new Error('testing error logger');
});

app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'APi Not found',
      },
    ],
  });
  next();
});

export default app;
