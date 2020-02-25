import { Request, Response, ErrorRequestHandler, NextFunction } from 'express'

export function errorHandlerApp(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.error(`APP error handler foi executado:  ${err}`);
  res.status(500).json({
    errorCode: 'ERR-001',
    message: 'Internal Server Error'
  });
  
  next();
}