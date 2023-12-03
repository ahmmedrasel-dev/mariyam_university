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

export type TSemester = 'Autum' | 'Summar' | 'Fall';

export type TAcademicSemester = {
  name: TSemester;
  code: '01' | '02' | '03';
  year: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
