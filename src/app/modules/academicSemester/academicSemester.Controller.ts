import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created successfully!',
    data: result,
  });
});

export const AcademicController = {
  createAcademicSemester,
};
