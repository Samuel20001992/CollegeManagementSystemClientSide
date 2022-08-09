
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
import { getStudents } from "../action/student.action";
import { getStudent_Sections, updateStudent_Section } from "../action/student_section.action";
import { Button, TextField } from "@mui/material";
import { createAttendance } from "../action/attendance.action";
const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 350
  },
  selectTableCell: {
    width: 30
  },
  tableCell: {
    width: 30,
    height: 40
  },
  input: {
    width: 30,
    height: 40
  }
}));



function AttendanceTable(props) {
  const [editMode, setEditMode] = useState(false);
  

  let attend = [];

  const rows = props.rows;

  const classes = useStyles();

  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState({
    student_id:'',
    section_name:'',
    course_code:'',
    academic_year:'',
    semester:'',
    day:'',
    month:'',
    status:''
   
  });

  const handleSubmit = (row) => {

    dispatch(updateStudent_Section(row._id, row))

  } 


 const [identifier, setIdentifier] = useState('');
  

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Student Id</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row =>   
          {return(
            
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
              <TableCell>{row.status}</TableCell>
            </TableRow>

          )}
          )
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

 export default AttendanceTable

