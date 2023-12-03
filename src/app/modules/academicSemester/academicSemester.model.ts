import { Schema, model } from 'mongoose';
import {
  TAcademicSemester,
  TMonths,
  TSemester,
  TSemesterCode,
} from './academicSemester.interface';

const Months: TMonths[] = [
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

const AcademicSemesterName: TSemester[] = ['Autum', 'Fall', 'Summar'];
const AcademicSemesterCode: TSemesterCode[] = ['01', '02', '03'];

const academicSemecterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
    },
    endMonth: {
      type: String,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemecterSchema,
);
