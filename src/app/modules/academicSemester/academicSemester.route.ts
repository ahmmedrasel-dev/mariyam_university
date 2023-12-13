import express from 'express';
import { AcademicController } from './academicSemester.Controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.AcademicSemesterVelidationSchema),
  AcademicController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
