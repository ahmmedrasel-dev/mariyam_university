import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import SendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserService.createStudentIntoDb(password, studentData);
    SendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Create Successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
