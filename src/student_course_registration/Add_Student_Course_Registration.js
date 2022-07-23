import React,{useState} from 'react'
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Header from '../others/Header';
import { useDispatch, useSelector } from 'react-redux';
import {createStudent_Course_Registration} from '../action/student_course_registration.action'
function Add_Student_Course_Registration() {
    

    const [studentCourseRegistrationData,setStudentCourseRegistrationData] = useState({
    student_id:'',
    course_offering_id:'',
    course_code:'',
    accademic_year:'',
    semester:'',
    date:'',
    advisor:'',
    registered_by:''
    })

    const [dept,setCourse_Code] = useState();
    const handleCourse_Code = (event) => {
        setCourse_Code(event.target.value);
    }

    const [semester,setSemester] = useState();
    const handleSemester = (event) => {
        setSemester(event.target.value);
    }

    const [course_offering_id,setCourse_Offering_Id] = useState();
    const handleCourse_Offering_Id = (event) => {
        setCourse_Offering_Id(event.target.value);
    }

    const dispatch = useDispatch();

    

    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createStudent_Course_Registration(studentCourseRegistrationData)); 
  }
    return (
        <div style={{
            backgroundColor: 'white', height: '100vh', border: '1px solid blue' }}>
            <Header />
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <CardContent
            component="form"
            noValidate
            autoComplete="off"
            // className='d-flex'  
                style={{
                marginTop:'50px',
                // marginLeft: '20px',
                // marginRight: '20px',
                marginBottom: '50px',
                    backgroundColor: 'white',
                //  borderRadius:'2em'
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Student Id" variant="outlined" size="small"
                        onChange={(e) => setStudentCourseRegistrationData({ ...studentCourseRegistrationData, student_id: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Code</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => setStudentCourseRegistrationData({ ...studentCourseRegistrationData, course_code: e.target.value })}       
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>      
                    </Select>
                </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Offering Id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => setStudentCourseRegistrationData({ ...studentCourseRegistrationData, course_offering_id: e.target.value })}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Academic Year" variant="outlined" size="small"
                            onChange={(e) => setStudentCourseRegistrationData({ ...studentCourseRegistrationData, accademic_year: e.target.value })}
                            />
                    </Grid>
                     <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                   onChange={(e) => setStudentCourseRegistrationData({ ...studentCourseRegistrationData, semester: e.target.value })}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Advisor" variant="outlined" size="small"
                        onChange={(e) => setStudentCourseRegistrationData({ ...studentCourseRegistrationData, advisor: e.target.value })}
                        />
                </Grid>
               
               
                    
            </Grid>
            </CardContent>
            
            <Grid container spacing={3} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' style={{width:'200px'}} type='submit'>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
            
          </form>
        </div>
     
  )
}

export default Add_Student_Course_Registration