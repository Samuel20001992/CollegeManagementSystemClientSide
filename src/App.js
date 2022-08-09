import { Routes, Route } from 'react-router-dom';
import View_Student from './student/View_Student';
import View_Applicant from './applicant/View_Applicant';
import View_Withdrawal from './withdrawal/View_Withdrawal';
import View_Readmission from './readmission/View_Readmission';
import Add_Applicant from './applicant/Add_Applicant';
import View_Section from './section/View_Section';
import Add_Section from './section/Add_Section';
import Add_Staff from './staff/Add_Staff';
import Add_Add from './add/Add_Add';
import Add_Table from './add/Add_Table';
import View_Add from './add/View_Add';
import Add_Course_Breakdown from './course_breakdown/Add_Couse_Breakdown';
import View_CourseBreakdown from './course_breakdown/View_CouseBreakdown';
import View_Course_Offering from './course_offering/View_Course_Offering';
import Add_Course from './course_registration/Add_Course';
import View_Course from './course_registration/View_Course';
import Add_Curriculum from './curriculum/Add_Curriculum';
import View_Curriculum from './curriculum/View_Curriculum';
import Add_Department from './department/Add_Department';
import View_Department from './department/View_Department';
import Add_Drop from './drop/Add_Drop';
import View_Drop from './drop/View_Drop';
import Add_Student_Course_Registration from './student_course_registration/Add_Student_Course_Registration';
import Add_Course_Offering from './course_offering/Add_Course_Offering';
import View_Staff from './staff/View_Staff';
import View_Student_Course_Registration from './student_course_registration/View_Student_Course_Registration';
import Add_Readmission from './withdrawal/Add_Readmission';
import Add_Withdrawal from './withdrawal/Add_Withdrawal';
import ImageUpload from './trial/imageUpload';
import Grade_Report from './grade_report/Grade_Report';
import View_Grade_Report from './grade_report/View_Grade_Report';
import Assessment_Table from './assessment/Assessment_Table';
import Add_Course_Design from './course_design/Add_Course_Design';
import Add_Instructor_Course from './instructor_course/Add_Instructor_Course';
import View_Instructor_Course from './instructor_course/View_Instructor_Course';
import Student_Course_Registration_Table from './student_course_registration/Student_Course_Registration_Table';
import Slip from './student_course_registration/Slip';
import View_Assessment from './assessment/View_Assessment';
import Add_Semester_Grade from './semester_grade/Add_Semester_Grade';
import Add_Semester_Grade_Table from './semester_grade/Add_Semester_Grade_Table';
import Graduate_Students from './graduate_students/Graduate_Students';
import View_Graduate from './graduate_students/View_Graduate';
import View_Summary_Table from './graduate_students/View_Summary_Table';
import View_Graduate_Summary from './graduate_students/View_Graduate_Summary';
import Enrollment from './enrollement/Enrollement';
import View_Enrollement from './enrollement/View_Enrollement';
import View_Application from './application_for_incomplete/View_Application';
import View_Clearance from './clearance/View_Clearance';
import Academic_Calander from './academic_calander/Academic_Calander';
import Design_Assessment from './assessment/Design_Assessment';
import UI from './others/UI';
import Applicant_Container from './others/Applicant_Container';
import Section_Container from './others/Section_Container';
import Sidebar from './dashboard/component/Sidebar';
import './dashboard/component/sidebar.css';
import Student_Course_Registration_Container from './others/Student_Course_Registration_Container';
import Withdrawal_and_Readmission_Container from './others/Withdrawal_and_Readmission_Container';
import Course_Design_Countainer from './others/Course_Design_Container';
import Instructor_Course_Container from './others/Instructor_Course_Container';
import Add_Container from './others/Add_Container';
import Drop_Container from './others/Drop_Container';
import Course_Container from './others/Course_Container';
import Course_Breakdown_Container from './others/Course_Breakdown_Container';
import Course_Offering_Container from './others/Course_Offering_Container';
import Staff_Container from './others/Staff_Container';
import Curriculum_Container from './others/Curriculum_Container';
import Department_Container from './others/Department_Container';
import Enrollement_Container from './others/Enrollement_Container';
import Academic_Calander_Container from './others/Academic_Calander_Container';
import Clearance from './clearance/Clearance';
import Clearance_Container from './others/Clearance_Container';
import Assessment_Container from './others/Assessment_Container';
import Student_Container from './others/Student_Container';
import Graduate_Container from './others/Graduate_Container';
import Add_Section_Container from './others/Add_Section_Container';
import Semester_Grade_Container from './others/Semester_Grade_Container';
import Attendance_Container from './others/Attendance_Container';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar/>} />
        <Route path="/Applicant" element={<Applicant_Container/>} />
        <Route path="/Student_Course_Registration" element={<Student_Course_Registration_Container/>} />
        <Route path="/Withdrawal_and_Readmission" element={<Withdrawal_and_Readmission_Container/>} />
        <Route path="/Course_Design" element={<Course_Design_Countainer/>} />
        <Route path="/Instructor_Course" element={<Instructor_Course_Container/>} />
        <Route path="/Add" element={<Add_Container/>} />
        <Route path="/Drop" element={<Drop_Container/>} />
        <Route path="/Course" element={<Course_Container/>} />
        <Route path="/Course_Breakdown" element={<Course_Breakdown_Container/>} />
        <Route path="/Course_Offering" element={<Course_Offering_Container/>} />
        <Route path="/Staff" element={<Staff_Container/>} />
        <Route path="/Academic_Calander" element={<Academic_Calander_Container/>} />
        <Route path="/Curriculum" element={<Curriculum_Container/>} />
        <Route path="/Department" element={<Department_Container/>} />
        <Route path="/Enrollement" element={<Enrollement_Container/>} />
        <Route path="/Clearance" element={<Clearance_Container/>} />
        <Route path="/Student_Course_Registration" element={<Student_Course_Registration_Container/>} />
        <Route path="/Section" element={<Section_Container/>} />
        <Route path="/Assessment" element={<Assessment_Container/>} />
        <Route path="/Student" element={<Student_Container/>} />
        <Route path="/Graduate" element={<Graduate_Container/>} />
        <Route path="/AddSection" element={<Add_Section_Container/>} />
        <Route path="/SemesterGrade" element={<Semester_Grade_Container/>} />
        <Route path="/Attendance" element={<Attendance_Container/>} />


        <Route path="/Add_Course" element={<Add_Course />} />
        <Route path="/View_Course" element={<View_Course />} />
        <Route path="/Add_Curriculum" element={<Add_Curriculum />} />
        <Route path="/View_Curriculum" element={<View_Curriculum />} />
        <Route path="/View_Department" element={<View_Department />} />
        <Route path="/Add_Department" element={<Add_Department />} />
        <Route path="/Add_Student_Course_Registration" element={<Add_Student_Course_Registration />} />
        <Route path="/View_Student_Course_Registration" element={<View_Student_Course_Registration />} />
        <Route path="/Grade_Report" element={<Grade_Report />} />
        <Route path="/Add_Instructor_Course" element={<Add_Instructor_Course />} />
        <Route path="/Slip" element={<Slip />} />
        <Route path="/Add_Academic_Calander" element={<Academic_Calander />} />
        <Route path="/Application" element={<View_Application />} />
        <Route path="/Add_Course_Design" element={<Add_Course_Design />} />
        <Route path="/View_Assessment" element={<View_Assessment />} />
        <Route path="/View_Clearance" element={<View_Clearance />} />
        <Route path="/View_Enrollment" element={<View_Enrollement />} />
        <Route path="/View_Graduate" element={<View_Graduate />} />
        <Route path="/View_Graduate_Summary" element={<View_Graduate_Summary />} />
        <Route path="/View_Summary_Table" element={<View_Summary_Table />} />
        <Route path="/View_Instructor_Course" element={<View_Instructor_Course />} />
        <Route path="/Add_Semester_Grade" element={<Add_Semester_Grade />} />
        <Route path="/Add_Instructor_Course" element={<Add_Instructor_Course />} />
        {/* <Route path="/View_Semester_Grade" element={<View_Semester_Grade />} /> */}
        
        
      </Routes>
    </div>
  );
}

export default App;
