export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'Augest'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TSemester = 'Autumn' | 'Summar' | 'Fall';
export type TSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TSemester;
  code: TSemesterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TsemesterNameCodeMapper = {
  [key: string]: string;
};
