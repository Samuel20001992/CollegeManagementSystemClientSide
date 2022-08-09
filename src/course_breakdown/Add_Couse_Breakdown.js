import React,{useState, useEffect} from 'react';
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
import { createCourse_Breakdown } from '../action/course_breakdown.action';
import { getCourse_Registrations } from '../action/course_registration.action';
function Add_Course_Breakdown() {
    const [courseBreakdownData, setCourseBreakdownData] = useState({
    section:'',
    attendance_year:'' ,
    semester:'',
    course_code:'' ,
    date:'', 
    department_id:''
    })

    const [section,setSection] = useState();
    const handleSection = (event) => {
        setSection(event.target.value);
    }

    const [semester,setSemester] = useState();
    const handleSemester = (event) => {
        setSemester(event.target.value);
    }

    const dispatch = useDispatch();
    

    const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getCourse_Registrations());
  }, [currentId, dispatch]);

  const courses =  useSelector((state) => state.course_registrationReducer);


    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCourse_Breakdown(courseBreakdownData)); 
    }
    
    const handleCourseCode = (e) => {
        setCourseBreakdownData({ ...courseBreakdownData, course_code: e.target.value })
    }
    return (
        <div>
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
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Section</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={section}
                            label="Department Head"
                                name='section'
                                onChange={(e) => setCourseBreakdownData({ ...courseBreakdownData, section: e.target.value })}
                        >
                         <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem> 
                    </Select>
                </FormControl>
                </Grid>
                
                  <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Attendance Year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={semester}
                    name='attendance_year'
                    onChange={(e) => setCourseBreakdownData({ ...courseBreakdownData, attendance_year: e.target.value })}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
                </Grid>  
                
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={semester}
                    name='semester'
                    onChange={(e) => setCourseBreakdownData({ ...courseBreakdownData, semester: e.target.value })}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
                    </Grid>
                 <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Course Code</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value= {courseBreakdownData.course_code}
                    onChange={handleCourseCode}
                  >
                    {courses.map((course)=>{

                           return <MenuItem value={course.course_code}>{course.course_code}</MenuItem>
                    })}
                          
                    </Select>
                </FormControl>
                    </Grid>   
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={semester}
                    name='academic_year'
                    onChange={(e) => setCourseBreakdownData({ ...courseBreakdownData, academic_year: e.target.value })}
                        >
                        <MenuItem value={"1"}>1</MenuItem>
                         <MenuItem value={"2"}>2</MenuItem>
                         <MenuItem value={"3"}>3</MenuItem>   
                    </Select>
                </FormControl>
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

export default Add_Course_Breakdown