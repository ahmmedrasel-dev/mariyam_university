import { RequestHandler, Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import SendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  const result = await UserService.createStudentIntoDb(password, studentData);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Create Successfully!',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
