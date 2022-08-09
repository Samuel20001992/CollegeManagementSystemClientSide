
import React,{useEffect,  useState} from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from "@mui/icons-material/EditOutlined";
import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
import RevertIcon from "@mui/icons-material/Cancel";
import { getStudent_Course_Registrations, updateStudent_Course_Registration } from '../action/student_course_registration.action';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  selectTableCell: {
    width: 60
  },
  tableCell: {
    width: 130,
    height: 40
  },
  input: {
    width: 130,
    height: 40
  }
}));

// const CustomTableCell = ({ row, name, onChange }) => {
//   const classes = useStyles();
  
//   return (
//     <TableCell align="left" className={classes.tableCell}>
//       {isEditMode ? (
//         <Input
//           value={row[name]}
//           name={name}
//           onChange={e => onChange(e, row)}
//           className={classes.input}
//         />
//       ) : (
//         row[name]
//       )}
//     </TableCell>
//   );
// };

function Assessment_Table() {
  const [editMode, setEditMode] = useState(false);
  const [assessment, setAssessment] = useState({
    student_id:'',
    course_offering_id:'',
    course_code:'',
    accademic_year:'',
    semester:'',
    instructor_id:'',
    first_assessment:'',
    second_assessment:'',
    third_assessment:'',
    fourth_assessment:'',
    fifth_assessment:'',
    final_assessment:'',
    total:'',
    letter_grade: '',
    grade_point: '',
    date:'',
    advisor:'',
    registered_by:''
  });

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getStudent_Course_Registrations());
  }, [currentId, dispatch]);

  const courseRows =  useSelector((state) => state.student_course_registrationReducer);

  const rows = courseRows;


  // const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  // const onToggleEditMode = id => {
   
  // };



  // const onChange = (e, row) => {
  //   if (!previous[row.id]) {
  //     setPrevious(state => ({ ...state, [row.id]: row }));
  //   }
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   const { id } = row;
  //   const newRows = rows.map(row => {
  //     if (row.id === id) {
  //       return { ...row, [name]: value };
  //     }
  //     return row;
  //   });
  //   setRows(newRows);
  // };

 

  const handleSubmit = (row) => {
    assessment.student_id = row.student_id;
    assessment.course_offering_id = row.course_offering_id;
    assessment.course_code = row.course_code;
    assessment.accademic_year = row.accademic_year;
    assessment.semester = row.semester;
    assessment.instructor_id = row.instructor_id;

    let value = 0;

    if (assessment.first_assessment == '') {
      assessment.first_assessment = 'No data'
    }

    if (assessment.second_assessment == '') {
      assessment.second_assessment = 'No data'
    }

    if (assessment.third_assessment == '') {
      assessment.third_assessment = 'No data'
    }

    if (assessment.fourth_assessment == '') {
      assessment.fourth_assessment = 'No data'
    }

    if (assessment.fifth_assessment == '') {
      assessment.fifth_assessment = 'No data'
    }

    if (assessment.final_assessment == '') {
      assessment.final_assessment = 'No data'
    }

    if (assessment.first_assessment == 'No data' || assessment.second_assessment == 'No data' || assessment.third_assessment == 'No data' ||
    assessment.fourth_assessment == 'No data' ||assessment.fifth_assessment == 'No data' || assessment.final_assessment == 'No data') {
      assessment.letter_grade = "incomplete"
    }
    else {

      let allAssessments = [assessment.first_assessment,
      assessment.second_assessment,
      assessment.third_assessment,
      assessment.fourth_assessment,
      assessment.fifth_assessment,
        assessment.final_assessment];
      allAssessments.map((ass) => {
        if (!isNaN(ass)) {
          value += parseFloat(ass);
        }
      })
      
    if (value == 0) {
      assessment.letter_grade = 'NO Grade'
    }
    if (value > 100) {
      return (
        alert("assessment wrong input")
      )
    }

    if (value > 0 && value < 40) {
      assessment.letter_grade = "F";
      assessment.grade_point = "0";
    }
    else if (value >= 40  && value < 45) {
      assessment.letter_grade = "D";
      assessment.grade_point = "1.0";
    }
    else if (value >= 45  && value < 50) {
      assessment.letter_grade = "C-";
      assessment.grade_point = "1.75";
    }
    else if (value >= 50  && value < 60) {
      assessment.letter_grade = "C";
      assessment.grade_point = "2.0";
    }
    else if (value >= 60  && value < 65) {
      assessment.letter_grade = "C+";
      assessment.grade_point = "2.5";
    }
    else if (value >= 65  && value < 70) {
      assessment.letter_grade = "B-";
      assessment.grade_point = "2.75";
    }
    else if (value >= 70  && value < 75) {
      assessment.letter_grade = "B";
      assessment.grade_point = "3.0";
    }
    else if (value >= 75  && value < 80) {
      assessment.letter_grade = "B+";
      assessment.grade_point = "3.5";
    }
    else if (value >= 80  && value < 85) {
      assessment.letter_grade = "A-";
      assessment.grade_point = "3.75";
    }
    else if (value >= 85  && value < 90) {
      assessment.letter_grade = "A";
      assessment.grade_point = "4.0";
    }
    else if (value >= 90  && value <= 100) {
      assessment.letter_grade = "A+";
      assessment.grade_point = "4.0";
    }
    }


    assessment.total = value.toString();
    dispatch(updateStudent_Course_Registration(row._id,assessment));

  } 

 const [identifier, setIdentifier] = useState('');
  


  const handleRows = (row) => {
   
    if (editMode) {
      if(row.student_id == identifier){
        return (
          <>
              <TableCell align="left" className={classes.tableCell}>
                    <Input
                      value={assessment.first_assessment}
                      onChange={(e) => { setAssessment({ ...assessment, first_assessment: e.target.value }) }}
                      className={classes.input}
                    />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                    <Input
                      value={assessment.second_assessment}
                onChange={(e) => { setAssessment({ ...assessment, second_assessment: e.target.value }) }}
                      className={classes.input}
                    />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                    <Input
                      value={assessment.third_assessment}
                      onChange={(e) => { setAssessment({ ...assessment, third_assessment: e.target.value }) }}
                      className={classes.input}
                    />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                    <Input
                      value={assessment.fourth_assessment}
                      onChange={(e) => { setAssessment({ ...assessment, fourth_assessment: e.target.value }) }}
                      className={classes.input}
                    />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                    <Input
                      value={assessment.fifth_assessment}
                      onChange={(e) => { setAssessment({ ...assessment, fifth_assessment: e.target.value }) }}
                      className={classes.input}
                    />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                    <Input
                      value={assessment.final_assessment}
                      onChange={(e) => { setAssessment({ ...assessment, final_assessment: e.target.value }) }}
                      className={classes.input}
                    />
            </TableCell>
            
          </>
        ) 
      }else{
        return (
          <>
                <TableCell onChange>{row.first_assessment}</TableCell>
                <TableCell onChange>{row.second_assessment}</TableCell>
                <TableCell onChange>{row.third_assessment}</TableCell>
                <TableCell onChange>{row.fourth_assessment}</TableCell>
                <TableCell onChange>{row.fifth_assessment}</TableCell>
                <TableCell onChange>{row.final_assessment}</TableCell>
          </>
        )
      }
      
    } 
    else {
      return (
        <>
              <TableCell onChange>{row.first_assessment}</TableCell>
              <TableCell onChange>{row.second_assessment}</TableCell>
              <TableCell onChange>{row.third_assessment}</TableCell>
              <TableCell onChange>{row.fourth_assessment}</TableCell>
              <TableCell onChange>{row.fifth_assessment}</TableCell>
              <TableCell onChange>{row.final_assessment}</TableCell>
        </>
      )
      }
  }


  let A_plus = 0;
  let A = 0;
  let A_minus = 0;
  let B_plus = 0;
  let B = 0;
  let B_minus = 0;
  let C_plus = 0;
  let C = 0;
  let C_minus = 0;
  let D = 0;
  let F = 0;
  return (
    <>
    <Paper className={classes.root}>

      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Student Id</TableCell>
            <TableCell align="left">Course Code</TableCell>
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
          {rows.map(row =>  {if(row.course_code == 'fa') 
          {
            switch(row.letter_grade){
              case 'A+': A_plus++;
              break;
              case 'A': A++;
              break;
              case 'A-': A_minus++;
              break;
              case 'B+': B_plus++;
              break;
              case 'B': B++;
              break;
              case 'B-': B_minus++;
              break;
              case 'C+': C_plus++;
              break;
              case 'C': C++;
              break;
              case 'C-': C_minus++;
              break;
              case 'D': D++;
              break;
              case 'F': A_minus++;
              break;
            }
            
            return(
            
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                
                {!editMode ? (
                  <IconButton
                    aria-label="delete"
                    onClick={() =>{
                       setEditMode(true)
                      setIdentifier(row.student_id)
                      }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => {
                        handleSubmit(row);
                        setEditMode(false);
                        setIdentifier('');
                      }}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => {
                        setEditMode(false);
                        setIdentifier('');
                      }}
                    >
                      <RevertIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
              <TableCell>{row.student_id}</TableCell>
              <TableCell>{row.course_code}</TableCell>
              {handleRows(row)}
              
              <TableCell onChange>{row.total}</TableCell>
              <TableCell onChange>{row.letter_grade}</TableCell>
            </TableRow>

          )}}
          )
          }
        </TableBody>
      </Table>
      </Paper>
      <Paper className={classes.root}>

      <Table className={classes.table} aria-label="caption table" style={{marginTop:'10px'}}>
        <TableHead>
          <TableRow>
            
            <TableCell align="left">A+</TableCell>
            <TableCell align="left">A</TableCell>
            <TableCell align="left">A-</TableCell>
            <TableCell align="left">B+</TableCell>
            <TableCell align="left">B</TableCell>
            <TableCell align="left">B-</TableCell>
            <TableCell align="left">C+</TableCell>
            <TableCell align="left">C</TableCell>
            <TableCell align="left">C-</TableCell>
            <TableCell align="left">D</TableCell>
            <TableCell align="left">F</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              
              <TableCell align="left">{A_plus}</TableCell>
              <TableCell align="left">{A}</TableCell>
              <TableCell align="left">{A_minus}</TableCell>
              <TableCell align="left">{B_plus}</TableCell>
              <TableCell align="left">{B}</TableCell>
              <TableCell align="left">{B_minus}</TableCell>
              <TableCell align="left">{C_plus}</TableCell>
              <TableCell align="left">{C}</TableCell>
              <TableCell align="left">{C_minus}</TableCell>
              <TableCell align="left">{D}</TableCell>
              <TableCell align="left">{F}</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </Paper>
    </>
  );
}

 export default Assessment_Table

