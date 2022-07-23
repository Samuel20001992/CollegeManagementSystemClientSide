import React,{useEffect,  useState} from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { createTotal, getTotal, updateTotal } from '../action/totals.action';
import { Grid, Button, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Select from '@mui/material/Select';
import Header from "../others/Header";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from "@mui/icons-material/EditOutlined";
import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
import RevertIcon from "@mui/icons-material/Cancel";
import { getStudent_Course_Registrations, updateStudent_Course_Registration } from '../action/student_course_registration.action';

import Add_Semester_Grade_Table from "./Add_Semester_Grade_Table";
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


function Add_Semester_Grade() {
  
  const [search, setSearch] = useState({
    student_id: '',
    attendance_year: '',
    semester:''
  })

  
  const handleSubmit = (row) => {
   
  } 

  // const [total, setTotal] = useState({
  //   student_id: search.student_id,
  //   total_credit: '0',
  //   total_point: '0',
  //   total_mpa_point: '0',
  //   total_mpa_credit:'0'
  // })

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const HandleShow = () => {
    
    setShow(true);
    

  }
//   useEffect(() => {
//     dispatch(getTotal(search.student_id));
//   }, [currentId, dispatch]);

  
// const totals = useSelector((state) => state.totalsReducer);
  
     const [show, setShow] = useState(false);
 
  return (
      <Paper >
          <Header/>
      <Grid container spacing={2} style={{ marginTop: '50px' }}>
        
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Attendance Year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={search.attendance_year}
                            label="Learning Modality"
                   onChange={(e) => {
                              setSearch({...search, attendance_year: e.target.value})
                            }}
                        >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                    </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={search.semester}
                            label="Semester"
                           onChange={(e) => {
                              setSearch({...search, semester: e.target.value})
                            }}
                        >
                            <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                            
                    </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={3} sm={4}>
                <FormControl  style={{ float:'left', marginLeft:'80px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Student_id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={search.student_id}
                            label="Student_id"
                           onChange={(e) => {
                              setSearch({...search, student_id: e.target.value})
                            }}
                        >
                            <MenuItem value={'1'}>1</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            
                    </Select>
          </FormControl>
        </Grid> 
              <Grid item xs={2} md={2} sm={2}>
                  <Button variant="contained" color='primary' onClick={(e) => {         
            HandleShow()
                  }
                  } style={{ width: '100px' }}>Search</Button>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          {
            show ?
              <Add_Semester_Grade_Table  student_id={search.student_id} attendance_year={search.attendance_year} semester={search.semester} />
              : null}
        </Grid>
        
           </Grid> 
         
    </Paper>
  );
}

 export default Add_Semester_Grade


