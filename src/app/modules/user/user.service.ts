import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  // Create User Object
  const userDate: Partial<TUser> = {};
  // If Pasword not given set default password
  userDate.password = password || (config.default_pass as string);

  // Set Student Roll
  userDate.role = 'student';

  //set Manually generated Id
  userDate.id = '203010001';

  //Create User
  const newUser = await User.create(userDate);

  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDb,
};
