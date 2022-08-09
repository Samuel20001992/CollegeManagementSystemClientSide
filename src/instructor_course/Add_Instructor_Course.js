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
import { createInstructor_Course } from '../action/instructor_course.action';
function Add_Instructor_Course() {
    const [instructorCourseData, setCourseDesignData] = useState({
        instructor_id:'',
        program: '',
        faculty:'',
        department: '',
        admission_classification: '',
        academic_year: '',
        semester: '',
        section: '',
        course_title: '',
        course_code: '',
    })

     const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createInstructor_Course(instructorCourseData)); 
    }
    
    
    return (
        <div >
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CardContent style={{backgroundColor:'white', margin:'14px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Instructor Id" variant="outlined" size="small"
                        name='instructor_id'  onChange={(e) => setCourseDesignData({ ...instructorCourseData, instructor_id: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Program" variant="outlined" size="small"
                        name='program'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,program: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Faculty" variant="outlined" size="small"
                        name='faculty'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,faculty: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Department" variant="outlined" size="small"
                        name='department'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,department: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Admission Classification" variant="outlined" size="small"
                        name='admission_classification'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,admission_classification: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Academic Year" variant="outlined" size="small"
                        name='academic_year'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,academic_year: e.target.value })}
                        />
                </Grid>

          </Grid>
          </CardContent>
          <CardContent style={{backgroundColor:'white', margin:'14px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Semester" variant="outlined" size="small"
                        name='semester'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,semester: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Section" variant="outlined" size="small"
                        name='section'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,section: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Course Title" variant="outlined" size="small"
                        name='course title'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,course_title: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Course Code" variant="outlined" size="small"
                        name='course_code'  onChange={(e) => setCourseDesignData({ ...instructorCourseData,course_code: e.target.value })}
                        />
                </Grid>       
            </Grid>
            </CardContent>
            <CardContent style={{backgroundColor:'white', margin:'14px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' style={{width:'200px'}} type='submit'>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
            </CardContent>
          </form>
        </div>
     
  )
}

export default Add_Instructor_Course