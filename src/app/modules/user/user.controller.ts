import { Request, Response } from 'express';
import studentValidationSchema from '../student/student.validation';
import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParseData = studentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDb(password, studentData);
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  createStudent,
};
