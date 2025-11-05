import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import { applicationRoutes } from './app/routes';

const app: Application = express();

app.use(
  cors({
    origin: [
      'http://localhost:4173',
      'http://localhost:5173',
      'https://legal-document.netlify.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

//parser
app.use(express.json());
app.use(
  express.urlencoded({ parameterLimit: 100000, limit: '50mb', extended: true }),
);

app.use(express.json());

// root route
app.get('/', (req: Request, res: Response) => {
  res.send(':) server working successfully');
});

app.use('/api', applicationRoutes);

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not Found',
    statusCode: httpStatus.NOT_FOUND,
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
