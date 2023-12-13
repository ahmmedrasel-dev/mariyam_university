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
router.get('/get-all-semster', AcademicController.getAllAcademicSemester);
router.get(
  '/get-single-semester/:id',
  AcademicController.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicController.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
