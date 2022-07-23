import { combineReducers } from 'redux';

import readmissionReducer from './readmission.reducer';
import applicantReducer from './applicant.reducer';
import studentReducer from './student.reducer';
import withdrawalReducer from './withdrawal.reducer';
import addReducer from './add.reducer';
import course_breakdownReducer from './course_breakdown.reducer';
import course_offeringReducer from './course_offering.reducer';
import course_registrationReducer from './course_registration.reducer';
import curriculumReducer from './curriculum.reducer';
import departmentReducer from './department.reducer';
import dropReducer from './drop.reducer';
import staffReducer from './staff.reducer';
import student_course_registrationReducer from './student_course_registration.reducer';
import course_designReducer from './course_design.reducer';
import slipReducer from './slip.reducer';
import semester_gradeReducer from './semester_grade.reducer';
import totalsReducer from './totals.reducer';
import applicationReducer from './application.reducer';

export const reducers = combineReducers({
    readmissionReducer,
    applicantReducer,
    studentReducer,
    withdrawalReducer,
    addReducer,
    course_breakdownReducer,
    course_offeringReducer,
    course_registrationReducer,
    curriculumReducer,
    departmentReducer,
    dropReducer,
    staffReducer,
    student_course_registrationReducer,
    course_designReducer,
    slipReducer,
    semester_gradeReducer,
    totalsReducer,
    applicationReducer
});