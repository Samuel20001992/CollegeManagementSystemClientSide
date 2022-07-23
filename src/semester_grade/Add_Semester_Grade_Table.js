import React,{useState, useEffect} from 'react'
import Table from "@material-ui/core/Table";
import {Box} from '@material-ui/core';
import {Modal} from '@material-ui/core';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStudent } from "../action/student_course_registration.action";
import { createSemester_Grade } from '../action/semester_grade.action';
import { createTotal, getTotal, updateTotal } from '../action/totals.action';
import Grade_Report from '../grade_report/Grade_Report';
function Add_Semester_Grade_Table(props) {
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

    const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getOneStudent(props.attendance_year, props.semester, props.student_id));
  }, [currentId, dispatch]);

  const courseRows =  useSelector((state) => state.student_course_registrationReducer);

  const rows = courseRows;


  const totals = props.totals;

  const [gradeReport, setGradeReport] = useState({
    student_id:'',
    attendance_year: '',
    semester:'',
    previous_GPA:'',
    previous_total_credit:'',
    previous_total_point:'',
    current_total_credit:'',
    current_total_point:'',
    GPA:'',
    CGPA: '',
    MGPA: ''
  })

  const [total, setTotal] = useState({
    total_credit: '',
    total_point: '',
    total_mpa_point: '',
    total_mpa_credit:''
  })
  let total_gradePoint = 0;
  let total_credit = 0;
  let gpa;
  let mpa;
  let total_major_grade_point = 0;
  let total_major_credit_hour = 0;
  const handleGrade_Report = () => {
    
    rows.map((row) => {
       console.log("jjf " + parseFloat(row.grade_point))
      total_gradePoint += parseFloat(row.grade_point) * parseFloat(row.credit_hour);
      total_credit += parseFloat(row.credit_hour);

      console.log("uuu " + total_gradePoint.toString())
      if (row.course_category_option == "Major Course") {
        total_major_grade_point += parseFloat(row.grade_point);
        total_major_credit_hour += parseFloat(row.credit_hour);
      }
    gradeReport.semester = row.semester;
    gradeReport.student_id = row.student_id;
    gradeReport.attendance_year = row.attendance_year;
      
    })

    gpa = total_gradePoint / total_credit;
    mpa = total_major_grade_point / total_major_credit_hour;

    gradeReport.current_total_point = total_gradePoint.toString();
    gradeReport.current_total_credit = total_credit.toString();
    gradeReport.GPA = gpa.toString();
 
    // if (totals[0].total_point == 0) {
    //   total.total_point = gradeReport.current_total_point;
    //   total.total_credit = gradeReport.current_total_credit;
    //   total.total_mpa_credit = total_major_credit_hour.toString();
    //   total.total_mpa_point = total_major_grade_point.toString();

    let p_credit = 100;
    let p_point = 350;
      gradeReport.previous_total_credit = p_credit.toString();
      gradeReport.previous_total_point = p_point.toString();

    
    let credit = total_credit + p_credit;
    let g_Point = total_gradePoint + p_point;
    let cgpa = g_Point / credit;
    
      gradeReport.CGPA = cgpa.toString();
      gradeReport.MGPA = mpa;

    //   console.log("yello")
    //   dispatch(updateTotal(totals[0]._id,total));
    // } else {
      // let x = 0;
      // x += parseFloat(total.total_credit) + total_credit;
      // total.total_credit = x.toString();

      // let y = 0;
      // y += parseFloat(total.total_point) + total_credit;
      // total.total_point = y.toString();

      // let z = 0;
      // z += parseFloat(total.total_mpa_credit) + total_major_credit_hour;
      // total.total_mpa_credit = z.toString();

      // let w = 0;
      // w += parseFloat(total.total_mpa_point) + total_major_grade_point;
      // total.total_mpa_point = w.toString();

      // gradeReport.CGPA = y / x;
      // gradeReport.MGPA = w / z;
    //  console.log("hello")
    //   dispatch(updateTotal(totals[0]._id, total));
    // }
    

    let t = 0;
      t += parseFloat(gradeReport.previous_total_point) / parseFloat(gradeReport.previous_total_credit);
      gradeReport.previous_GPA = t.toString();

    console.log('gpa ' + total_gradePoint);
  dispatch(createSemester_Grade(gradeReport))
  }



  return (
      <div>
           <Table aria-label="caption table">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left">Student Id</TableCell>
            <TableCell align="left">Course Code</TableCell>
            <TableCell align="left">Credit Hour</TableCell>
            <TableCell align="left">Assessment 1</TableCell>
            <TableCell align="left">Assessment 2</TableCell>
            <TableCell align="left">Assessment 3</TableCell>
            <TableCell align="left">Assessment 4</TableCell>
            <TableCell align="left">Assessment 5</TableCell>
            <TableCell align="left">Final</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Letter Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.student_id}</TableCell>
              <TableCell>{row.course_code}</TableCell>
              <TableCell>{row.credit_hour}</TableCell>
              <TableCell >{row.first_assessment}</TableCell>
              <TableCell >{row.second_assessment}</TableCell>
              <TableCell >{row.third_assessment}</TableCell>
              <TableCell >{row.fourth_assessment}</TableCell>
              <TableCell >{row.fifth_assessment}</TableCell>
              <TableCell >{row.final_assessment}</TableCell>
              <TableCell >{row.total}</TableCell>
              <TableCell >{row.letter_grade}</TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
      <Grid item xs={12} md={12} sm={12}>
          <center>
                  <Button variant="contained" color='primary' onClick={(e) => {         
            handleGrade_Report()
            setOpen(true)
                  }
                  } style={{ width: '100px' }}>Create</Button>
          </center>
      </Grid>
      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style} style={{width:'1000px', height:'600px'}}>
            <Grade_Report rows={rows} />
          </Box>
        </div>
        </Modal>
    </div>
  )
}

export default Add_Semester_Grade_Table