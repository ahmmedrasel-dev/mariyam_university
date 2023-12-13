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

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loaded Academic Semester!',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AcademicSemesterServices.getSingleSemesterFromDB(id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loaded single academic semester',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

export const AcademicController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
