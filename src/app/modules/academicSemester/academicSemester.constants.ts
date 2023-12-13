import {
  TMonths,
  TSemester,
  TSemesterCode,
  TsemesterNameCodeMapper,
} from './academicSemester.interface';

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augest',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterName: TSemester[] = ['Autumn', 'Fall', 'Summar'];
export const AcademicSemesterCode: TSemesterCode[] = ['01', '02', '03'];

export const semesterNameCodeMapper: TsemesterNameCodeMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
