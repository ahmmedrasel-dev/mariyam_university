import { UserService } from './user.service';
import SendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

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
