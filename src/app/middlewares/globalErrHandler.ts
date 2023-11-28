/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const msg = err.message || 'Something Went Wrong!';

  return res.status(statusCode).json({
    success: true,
    message: msg,
    error: err,
  });
};

export default globalErrHandler;
