import config from '../../config';
import { TStudent } from '../student/student.interface';
import { NewUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  // Create User Object
  const user: NewUser = {};
  // If Pasword not given set default password
  user.password = password || (config.default_pass as string);

  // Set Student Roll
  user.role = 'student';

  //set Manually generated Id
  user.id = '';

  //Create User
  const result = await User.create(user);

  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;
  }

  //Create Student
  return result;
};

export const UserService = {
  createStudentIntoDb,
};
