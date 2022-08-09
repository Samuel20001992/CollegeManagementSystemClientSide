
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
import { getOneStudent_Section, getStudent_Sections, updateStudent_Section } from "../action/student_section.action";
import { Button, TextField } from "@mui/material";
import { createAttendance } from "../action/attendance.action";
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



function Attendance(props) {
  const [editMode, setEditMode] = useState(false);
  
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();
  useEffect(()=>{
    if(props.searchValue!= ''){
      dispatch(getOneStudent_Section(props.searchValue)); 
    }
   
  },[currentId, dispatch])

  const rows =  useSelector((state) => state.student_sectionReducer);
  let attend = [];

  // const rows = props.rows;

  const [d, setD] = useState(rows);


  const classes = useStyles();

  
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

  const handleAllSubmit = () =>{
    
    let dt = new Date();
    rows.map((row)=>{
      attendance.student_id = row.student_id;
      attendance.section_name = row.section_name;
      attendance.academic_year = dt.getFullYear();
      attendance.semester = row.semester;
      attendance.day = dt.getDate();
      attendance.month= dt.getMonth();
      attendance.status = row.status;
      dispatch(createAttendance(attendance));
      row.status = "";
      dispatch(updateStudent_Section(row._id, row));
    })

    window.location.reload();
  }

 const [identifier, setIdentifier] = useState('');
  
 let x = 0;

  const handleRows = (row) => {
   x++;
     if (editMode) {
      if(row.student_id == identifier){
        return (
            <>
                <TableCell align="left" className={classes.tableCell}>
                      <Input
                        value={attend[x]}
                        onChange={(e) => {  
                        row.status = e.target.value
                          
                        } }
                        className={classes.input}
                      />
              </TableCell>
            </>
            
           )
           
           
        }
       else{
        
          return(
            <>
              
              <TableCell>{row.status}</TableCell>
            </>
          )
        // }   
      }
      
    } 
    else {
        return (
          <>
              <TableCell>{row.status}</TableCell>
         </>
         )
    }
  }

  return (
    <Paper className={classes.root}>
             < TextField id="outlined-basic"  style={{width:'230px', align:'left'}} sx={{m: 1}} label="Course Code" variant="outlined"  size="small" 
              onChange={(e)=> setAttendance({attendance,course_code:e.target.value})}
            />
      <Table className={classes.table} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Student Id</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Middle Name</TableCell>
            <TableCell align="left">Last Name </TableCell>
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
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.middle_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              {handleRows(row)}
            </TableRow>

          )}
          )
          }
        </TableBody>
      </Table>
      <center>
          <Button onClick={handleAllSubmit} sx={{m: 2}} variant="contained" color="primary">Submit</Button>
      </center>
    </Paper>
  );
}

 export default Attendance

