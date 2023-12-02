import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import SendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sucess!',
    data: result,
  });
});

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Success!',
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Success!',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
